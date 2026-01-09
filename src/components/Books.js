"use client"

import React from 'react';
import { readings } from '@/data/data';
import { useMediaQuery } from 'react-responsive';

function Books() {
    const isBigScreen = useMediaQuery({ minWidth: 1224 });

    return (
        <div >
            <h2 className='py-2' style={{
                textAlign:'center',
                color:"black",
            }} >Recommended Books</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }} className='container'>
                {readings.map((reading, i) => (
                    <div key={i} className='' style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: isBigScreen ? '50%' :null,
                    }}>
                        <h3 style={{
                            color: "#800000",
                            textAlign: 'center',
                        }}><a href={reading.link} target='_blank'>{reading.title}</a></h3>
                        <p style={{
                            textAlign: 'center',
                        }}>{reading.author}</p>
                        <img height="300px" width="auto" src={reading.image} alt={reading.title} />
                        <p style={{
                            textAlign: 'center',
                        }}>{reading.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Books