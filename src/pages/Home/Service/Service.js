import React, { useEffect, useState } from 'react';
import SerivceItems from './SerivceItems';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='flex flex-col items-center'>
                <h5 className='text-xl font-bold text-orange-600'>Service</h5>
                <h2 className='text-3xl font-bold'>Our Service Area</h2>
                <p className='w-3/5 text-center text-gray-600'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid place-items-center md:max-w-screen-lg md:mx-auto py-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6'>
                    {
                        services.map(service => <SerivceItems
                            key={service._id}
                            service={service}
                        ></SerivceItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;