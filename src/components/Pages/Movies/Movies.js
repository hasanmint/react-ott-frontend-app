import React from 'react';
import MovieDhallywoodSection from './MovieDhallywoodSection';
import MovieDubbingSection from './MovieDubbingSection';
import MovieEnglishSection from './MovieEnglishSection';
import MovieFeatureItems from './MovieFeatureItems';
import MoviePopularSection from './MoviePopularSection';
import MovieSaleSection from './MovieSaleSection';
import MovieSliderSection from './MovieSliderSection';
import MovieTamilSection from './MovieTamilSection';
import MovieTrendingSection from './MovieTrendingSection';

const Movies = () => {
    return (
        <>
            <MovieSliderSection></MovieSliderSection>
            <MovieTrendingSection></MovieTrendingSection>
            <MovieSaleSection></MovieSaleSection>
            <MoviePopularSection></MoviePopularSection>
            <MovieDhallywoodSection></MovieDhallywoodSection>
            <MovieTamilSection></MovieTamilSection>
            <MovieDubbingSection></MovieDubbingSection>
            <MovieEnglishSection></MovieEnglishSection>
            <MovieFeatureItems></MovieFeatureItems>
        </>
    );
};

export default Movies;