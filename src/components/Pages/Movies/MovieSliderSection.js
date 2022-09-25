import React from 'react';
import MovieSlider from '../../../assets/images/Movies/MovieSlider.png';
import MovieSlider1 from '../../../assets/images/Movies/MoveSlider1.png';
import MovieSlider2 from '../../../assets/images/Movies/MoveSlider2.png';

const MovieSliderSection = () => {
    return (
        <>
            <div className="carousel carousel-center rounded-box my-5">
                <div className="carousel-item">
                    <img src={MovieSlider} alt="Pizza" />
                </div>
               
                <div className="carousel-item">
                    <img src={MovieSlider2} alt="Pizza" />
                </div>

                <div className="carousel-item">
                    <img src={MovieSlider1} alt="Pizza" />
                </div>
            </div>
        </>
    );
};

export default MovieSliderSection;