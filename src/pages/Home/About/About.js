import React from 'react';
import imag1 from '../../../assets/images/about_us/person.jpg';
import imag2 from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col gap-24 lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={imag1} className="w-full md:w-10/12 h-48 md:h-80 rounded-lg shadow-2xl" alt='' />
                        <img src={imag2} className="absolute top-2/4 -right-8 md:right-12 w-9/12 h-40 md:w-7/12 md:h-60 rounded-lg shadow-2xl border-4 border-gray-100" alt='' />
                    </div>
                    <div className='w-1/2'>
                        <h5 className="text-xl font-bold text-orange-600">About Us</h5>
                        <h1 className="text-5xl font-bold w-full md:w-5/6">We are qualified & of experience in this field</h1>
                        <p className="py-6 text-gray-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="mb-4 text-gray-600">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="mb-6 rounded px-4 py-2 border-orange-600 text-gray-100 font-semibold bg-orange-600 hover:bg-orange-700 ease-in duration-200 mr-5">Get More-info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;