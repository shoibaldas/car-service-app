import React from 'react';
import '../Banner/Banner.css';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={image} className='rounded-md w-full' alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 hover:bg-orange-600">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-orange-600">❯</a>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-1/3">
                <h1 className='text-6xl text-gray-100 font-bold w-3/6'>Affordable Price For Car Servicing</h1>

            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 mt-12 top-2/4">
                <p className='text-sm text-gray-200 w-3/5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-3/4">
                <button className="rounded px-4 py-2 border-orange-600 text-gray-100 font-semibold bg-orange-600 hover:bg-orange-700 ease-in duration-200 mr-5">Discover More</button>
                <button className="outline outline-offset-2 outline-1 rounded px-4 py-2 border-orange-600 text-orange-600 font-semibold hover:bg-orange-600 hover:text-gray-100 hover:outline-none ease-in duration-300">Latest Project</button>
            </div>
        </div >
    );
};

export default BannerItem;