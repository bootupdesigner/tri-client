'use client';

import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { FaYoutube } from 'react-icons/fa';


const CHANNEL_ID = 'UCyjmGgjaYc9gCEbMhRYTk-w';
const CHANNEL_URL = `https://www.youtube.com/channel/${CHANNEL_ID}`;

export default function VideosPage() {
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' });

    const [videoBlogs, setVideoBlogs] = useState([]);
    const [playingId, setPlayingId] = useState(null); // track which video is "playing"

    const onVideoEnded = useCallback(() => {
        setPlayingId(null);
        window.alert('video has finished playing!');
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://youtube.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'id,snippet',
                        channelId: CHANNEL_ID,
                        type: 'video',
                        maxResults: 12,
                        key: process.env.NEXT_PUBLIC_GOOGLE_YOUTUBE_API,
                    },
                });

                setVideoBlogs(response.data.items ?? []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className='container'>

            <h1 style={{ textAlign: 'center', }}>TRI Videos</h1>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', }}>
                {videoBlogs.map((blog) => {
                    const videoId = blog?.id?.videoId;
                    if (!videoId) return null;

                    return (
                        <div key={videoId} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 300, }}>

                            <h3 style={{ textAlign: 'center', color:'#800000',}} title={blog?.snippet?.title}>
                                {blog?.snippet?.title}
                            </h3>

                            <YouTubeEmbed
                                videoId={videoId}
                                playing={playingId === videoId}
                                onEnded={onVideoEnded}
                                onPlay={() => setPlayingId(videoId)}
                            />

                            <p style={{}} title={blog?.snippet?.description}>
                                {blog?.snippet?.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            <a href={CHANNEL_URL} target="_blank" rel="noreferrer" style={styles.followLink}>
                <FaYoutube size={24} />
                <span style={styles.followText}>Follow Us On YouTube!</span>
            </a>


        </section>
    );
}

/**
 * Minimal YouTube embed.
 * Notes:
 * - "playing" toggles autoplay by changing the iframe URL param.
 * - onEnded via postMessage is non-trivial with raw iframe; easiest is use react-youtube.
 *   This component still works great for display + play.
 */
function YouTubeEmbed({ videoId, playing, onPlay }) {
    const src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=${playing ? 1 : 0
        }`;

    return (
        <div style={styles.playerWrap}>
            <iframe
                style={styles.iframe}
                src={src}
                title={`YouTube video ${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => {
                    // When iframe loads, consider it "ready"
                }}
                onClick={onPlay}
            />
            {/* If you *need* ended events, use react-youtube (below) */}
        </div>
    );
}

const styles = {
    followLink:{
        textDecoration:'none',
        color:'#800000',
        fontSize:22,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    card: {
        width: 315,
        minWidth: 315,
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    playerWrap: { width: 300, height: 169, margin: '0 auto' },
    iframe: { width: '100%', height: '100%', border: 0 },
};
