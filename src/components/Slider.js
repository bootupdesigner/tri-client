'use client';

import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Link from 'next/link';

import { triServices } from '../data/data';

function Slider() {
    const rollOvers = triServices.find(
        (service) => service.id === '401k-rollovers'
    );


    const lifeInsurance = triServices.find(
        (service) => service.id === 'life-insurance'
    );

    const retirementPlanning = triServices.find(
        (service) => service.id === 'retirement-planning'
    );

    return (
        <div >
            <Carousel fade>

                {/* life insurace slide */}
                
                <Carousel.Item interval={5000}
                    className="slider d-flex align-items-center"
                    style={{
                        minHeight: 300,
                        backgroundImage: `url(${lifeInsurance.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <Carousel.Caption className="position-static">
                        <div className="text-center bg-light bg-opacity-75 p-4 rounded">
                            <h2 className="text-dark">{lifeInsurance.serviceName}</h2>
                            <p className="text-dark">
                                {lifeInsurance.blog?.[0]?.summary?.[0]?.paragraph?.[0]?.slice(0, 200)}
                            </p>

                            <Button
                                as={Link}
                                href={`/service/${lifeInsurance.id}`}
                                variant="primary"
                            >
                                Learn More About {lifeInsurance.serviceName}
                            </Button>
                        </div>
                    </Carousel.Caption>

                </Carousel.Item>

                {/* 401K Rollovers slide */}

                <Carousel.Item interval={5000}
                    className="slider d-flex align-items-center"
                    style={{
                        minHeight: 300,
                        backgroundImage: `url(${rollOvers.image})`,
                        backgroundSize: 'cover',
                        
                        backgroundPosition: 'center',
                    }}>
                    <Carousel.Caption className="position-static">
                        <div className="text-center bg-light bg-opacity-75 p-4 rounded">
                            <h2 className="text-dark">{rollOvers.serviceName}</h2>
                            <p className="text-dark">
                                {rollOvers.blog?.[0]?.summary?.[0]?.paragraph?.[0]?.slice(0, 200)}
                            </p>

                            <Button
                                as={Link}
                                href={`/service/${rollOvers.id}`}
                                variant="primary"
                            >
                                Learn More About {rollOvers.serviceName}
                            </Button>
                        </div>
                    </Carousel.Caption>

                </Carousel.Item>

                {/* retirement planning slide */}

                <Carousel.Item interval={5000}
                    className="slider d-flex align-items-center"
                    style={{
                        minHeight: 300,
                        backgroundImage: `url(${retirementPlanning.image})`,
                        backgroundSize: 'cover',
                        
                        backgroundPosition: 'center',
                    }}>
                    <Carousel.Caption className="position-static">
                        <div className="text-center bg-light bg-opacity-75 p-4 rounded">
                            <h2 className="text-dark">{retirementPlanning.serviceName}</h2>
                            <p className="text-dark">
                                {retirementPlanning.blog?.[0]?.summary?.[0]?.paragraph?.[0]?.slice(0, 200)}
                            </p>

                            <Button
                                as={Link}
                                href={`/service/${retirementPlanning.id}`}
                                variant="primary"
                            >
                                Learn More About {retirementPlanning.serviceName}
                            </Button>
                        </div>
                    </Carousel.Caption>

                </Carousel.Item>

            </Carousel>
        </div >
    )
}

export default Slider