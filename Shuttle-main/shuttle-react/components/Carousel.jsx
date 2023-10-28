
import React, { useEffect, useState } from 'react';

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Define your slide data
    const slides = [
        {
            imageSrc: "assets/white_and_black.png",
            // title: "First slide label",
            // caption: "Some representative placeholder content for the first slide."
        },
        {
            imageSrc: "assets/banner_shuttle.jpg",
            // title: "Second slide label",
            // caption: "Some representative placeholder content for the second slide."
        },
        {
            imageSrc: "assets/banner.jpeg",
            // title: "Third slide label",
            // caption: "Some representative placeholder content for the third slide."
        }
    ];

    // Function to handle automatic slide change
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        // Set an interval to change the active slide automatically
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        
            <div id="carouselExampleCaptions" className="carousel slide mt-2">
                {/* Indicators */}
                <div className="carousel-indicators">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === activeIndex ? 'active' : ''}
                            aria-current={index === activeIndex ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                {/* Slides */}
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                        >
                            <img src={slide.imageSrc} className="d-block w-100" alt={`Slide ${index + 1}`} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{slide.title}</h5>
                                <p>{slide.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        
    );
}
