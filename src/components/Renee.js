"use client"

import Image from 'next/image';
import React from 'react';
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive';
import { aboutTri } from '@/data/data';


const reneeHeadshot = 'https://res.cloudinary.com/daj06anmm/image/upload/v1709312978/Renee_ikihix.jpg';

function Renee() {

    const isMobile = useMediaQuery({ maxWidth: 480 });
    const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 1224 });
    const isBigScreen = useMediaQuery({ minWidth: 1224 });

    // youtube video options
    const opts = {
        height: isMobile ? "169" : isTablet ? "240" : "315",
        width: isMobile ? "300" : isTablet ? "426": "560",
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <div
            className=''>
            <h2 style={{ textAlign: 'center' }}>Meet Renee</h2>

            {/* laptop screens and larger */}

            {isBigScreen && (
                <div>
                    <div className='' style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        <figure
                            className="mx-3"
                            style={{
                                width: 300,
                                textAlign: "center",
                            }}>

                            <div
                                style={{
                                    height: 400,
                                    position: 'relative',
                                    aspectRatio: '3 / 4'
                                }}>
                                <Image
                                    src={reneeHeadshot}
                                    alt="Cloudinary image"
                                    fill
                                    style={{ objectFit: 'contain', borderRadius: 5, }}
                                />
                            </div>
                            <figcaption
                                style={{
                                    marginTop: 8,
                                    fontSize: 14,
                                    color: "#555",
                                }}
                            >Renee Ilesanmi — Founder & CEO</figcaption>
                        </figure>

                        <div className='mx-3' style={{
                            width: '50%',

                        }}>
                            {aboutTri.meetRenee.summary.map((paragraph, i) => (
                                <p style={{ fontSize: 18, }} key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* meet renee youtube video */}
                    <div className='py-3' style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                    }}>
                        <YouTube videoId='H_bTToAeYbA' opts={opts} />
                    </div>
                </div>
            )}

            {/* tablet screens and landscape orientation */}

            {isTablet && (
                <div>
                    <div className='container' style={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <p style={{ fontSize: 18, }}>{aboutTri.meetRenee.summary[0]}</p>
                        <div
                            className=''
                            style={{
                                height: 400,
                                position: 'relative',
                                aspectRatio: '3 / 4'
                            }}>
                            <Image
                                src={reneeHeadshot}
                                alt="Cloudinary image"
                                fill
                                style={{ objectFit: 'contain', borderRadius: 5, }}
                            />
                        </div>
                        <p style={{ fontSize: 18, }}>{aboutTri.meetRenee.summary[1]}</p>
                        <p style={{ fontSize: 18, }}>{aboutTri.meetRenee.summary[2]}</p>
                    </div>


                    {/* meet renee youtube video */}
                    <div className='py-3' style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                    }}>
                        <YouTube videoId='H_bTToAeYbA' opts={opts} />
                    </div>
                </div>
            )}

            {/* display for mobile devices */}

            {isMobile && (
                <div>
                    <div className='container' style={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <p style={{ fontSize: 18, }}>{aboutTri.meetRenee.summary[0]}</p>
                        <figure
                            className=""
                            style={{
                                width: 300,
                                textAlign: "center",
                            }}>

                            <div
                                style={{
                                    height: 400,
                                    position: 'relative',
                                    aspectRatio: '3 / 4'
                                }}>
                                <Image
                                    src={reneeHeadshot}
                                    alt="Cloudinary image"
                                    fill
                                    style={{ objectFit: 'contain', borderRadius: 5, }}
                                />
                            </div>
                            <figcaption
                                style={{
                                    marginTop: 8,
                                    fontSize: 14,
                                    color: "#555",
                                }}
                            >Renee Ilesanmi — Founder & CEO</figcaption>
                        </figure>

                        <p style={{ fontSize: 18, }}>{aboutTri.meetRenee.summary[1]}</p>
                        <p style={{ fontSize: 18, }}>{aboutTri.meetRenee.summary[2]}</p>

                    </div>

                    {/* meet renee youtube video */}
                    <div className='py-3' style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                    }}>
                        <YouTube videoId='H_bTToAeYbA' opts={opts} />
                    </div>
                </div>
            )}

        </div>
    )
}

export default Renee