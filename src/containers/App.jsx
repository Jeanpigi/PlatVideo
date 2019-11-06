import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';


const App = () => (
    <div className="App">
        <Header></Header>
        <Search></Search>

        <Categorias title="Lista">
            <Carousel>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </Carousel>
        </Categorias>

        <Categorias title="Tendencias">
            <Carousel>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </Carousel>
        </Categorias>

        <Categorias title="Originales de Jp video">
            <Carousel>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </Carousel>
        </Categorias>

        <Footer></Footer>
    </div>
);

export default App;