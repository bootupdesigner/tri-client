import ServiceDescription from '@/components/ServiceDescription';
import { triServices } from '@/data/data'
import React from 'react';

function page() {
    return (
        <div>
            <h1 className='text-center'>TRI Services</h1>
            <ServiceDescription variant='grid'/>
        </div>
    )
}

export default page