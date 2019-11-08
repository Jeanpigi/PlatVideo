import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';


const App = () => {
    const initialState = useInitialState(API);
    
    return initialState.length === 0 ? <h1>Loading...</h1>: (
        <div className="App">
            <Header />
            <Search />
            {initialState.mylist.length > 0 &&
                <Categorias title="Mi Lista">
                    <Carousel>
                        {initialState.mylist.map(item => 
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categorias>
            }
            

            <Categorias title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item => 
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categorias>

            <Categorias title="Originales">
                <Carousel>
                    {initialState.originals.map(item =>
                        <CarouselItem  key={item.id} {...item} />
                    )};
                </Carousel>
            </Categorias>

            <Footer></Footer>
        </div>
    ); 
}

export default App;