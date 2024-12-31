import { useState } from 'react';
import './Carousel.scss';
import arrowLeft from '../../assets/images/icons/arrow_left.svg';
import arrowRight from '../../assets/images/icons/arrow_right.svg';

function Carousel({ pictures }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="carousel">
            <div className="carousel__container">
                <img
                    src={pictures[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>
            <button onClick={handlePrev}>
                <img src={arrowLeft} alt="Image précédente"/>
            </button>
            <button onClick={handleNext}>
                <img src={arrowRight} alt="Image suivante"/>
            </button>
        </div>
    )
}

export default Carousel;