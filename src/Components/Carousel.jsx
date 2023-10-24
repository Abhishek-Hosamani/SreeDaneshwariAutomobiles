import React, { useState, useEffect } from 'react';
import CarouselImg1 from './../Assets/Carousel1.png'
import CarouselImg2 from './../Assets/Carousel2.png'
import CarouselImg3 from './../Assets/Carousel3.png'
const images = [
    CarouselImg1,
    CarouselImg2,
    CarouselImg3
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000); // Switch slides every 3 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="relative  h-36 sm:w-auto sm:h-96 rounded">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-slide absolute w-full h-full transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-[20] h-[40] sm:w-full sm:h-full object-cover"
                    />
                </div >
            ))
            }
            {/* <button
                className="prev-button absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded"
                onClick={prevSlide}
            >
                Previous
            </button>
            <button
                className="next-button absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded"
                onClick={nextSlide}
            >
                Next
            </button> */}
        </div >
    );
}

export default Carousel;
