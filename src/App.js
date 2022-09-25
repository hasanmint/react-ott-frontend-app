
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { BeakerIcon } from '@heroicons/react/solid'
import About from './components/Pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Movies from './components/Pages/Movies/Movies';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Blogs from './components/Pages/Blogs';



function App() {
  return (
    <div className="App overflow-hidden">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="movies" element={<Movies />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;