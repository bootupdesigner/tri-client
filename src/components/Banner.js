import React from 'react'
import { triServices } from '@/data/data';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'react-bootstrap';
import { MdLocalPhone, } from "react-icons/md";

function Banner() {
    const isBigScreen = useMediaQuery({ minWidth: 1224 });


    const lifeInsurance = triServices.find(
        (service) => service.id === 'life-insurance'
    );

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: isBigScreen ? '100vh' : 300,
                backgroundImage: `url('https://images.pexels.com/photos/5082865/pexels-photo-5082865.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            <div
                className='p-5 '
                style={{
                    width: isBigScreen ? '50%' : null,
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 25,
                }}>
                <h3 style={{ color: '#fff' }}>Plan Your Financial Future</h3>
                <p style={{ fontSize: 18, color: '#fff', }}>Start planning for your families future and retirement. Contact Renee to learn about better life insurance policies, annuities, 401K rollovers anad more. We’re ready to answer any questions you may have about your financial goals. Call Renee Today!</p>
                <Button href="tel:+14108804680"
                    style={{
                        backgroundColor:"#800000",
                        borderColor:"#800000",
                        gap: 6,
                        color: "white",
                        fontSize: 20,
                    }}>
                    <MdLocalPhone /> Call Renee
                </Button>
            </div>
        </div>
    )
}

export default Banner