import { useState } from 'react';
import './Slideshow.scss';
import arrowLeft from '../../assets/images/icons/arrow_left.svg';
import arrowRight from '../../assets/images/icons/arrow_right.svg';

// The code for the slideshow component ( Carousel )
function Slideshow({ pictures }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="carousel">
            <img
                src={pictures[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />
            {pictures.length > 1 && (
                <div>
                    <button className="left" onClick={handlePrev}>
                        <img src={arrowLeft} alt="Image précédente" className="arrow" />
                    </button>
                    <button className="right" onClick={handleNext}>
                        <img src={arrowRight} alt="Image suivante" className="arrow" />
                    </button>
                </div>
            )}
            {pictures.length > 1 && (
                <p>{currentIndex + 1}/{pictures.length}</p>
            )}
        </div>
    )
}

export default Slideshow;