import React from 'react';

import TvShows from '../TvShows/TvShows';
import AppAds from './AppAds';
import Banner from './Banner';

import MainContent from './MainContent';
import Sports from './Sports';

import WhatsMovie from './WhatsMovie';
import MoviesSale from '../MoviesSale/MoviesSale';
import MovieSection from '../Movies/MovieSection';
import MovieTrendingSection from '../Movies/MovieTrendingSection';
import AllSubCategories from './AllSubCategories';
import HomeSlider from './HomeSlider';
import TestSlider from './TestSlider';


const Home = () => {
    return (
        <>
            <HomeSlider></HomeSlider>
            <Banner></Banner>
            <TestSlider></TestSlider>

            <AllSubCategories></AllSubCategories>
            <MovieTrendingSection></MovieTrendingSection>
            <MainContent></MainContent>
            <MoviesSale></MoviesSale>
            <Sports></Sports>
            <MovieSection></MovieSection>
            <TvShows></TvShows>
            <AppAds></AppAds>
            <WhatsMovie></WhatsMovie>


        </>
    );
};

export default Home;