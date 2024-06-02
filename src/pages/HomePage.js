import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

import '../App.css';

function HomePage() {
    return (
        <div className="container">
            <h2 className="my-4"> Добро пожаловать в Starbucks!<span className="badge text-bg-secondary">У нас вы можете насладиться ароматным кофе и вкусными десертами.</span>
            </h2>

            <br/>

            <h1>Актуальные <span className="badge text-bg-success">новости</span></h1>
            <br/>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <NavLink to="/products"><img src={slide1} className="d-block w-100" alt="..."/></NavLink>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Качественная продукция</h5>
                            <p>Чтобы узнать подробнее, нажмите на слайд</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <NavLink to="/about"><img src={slide2} className="d-block w-100" alt="..."/></NavLink>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Глобальная компания</h5>
                            <p>Чтобы узнать подробнее, нажмите на слайд</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <NavLink to="/contact"><img src={slide3} className="d-block w-100" alt="..."/></NavLink>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Оставить отзыв</h5>
                            <p>Чтобы узнать подробнее, нажмите на слайд</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br/>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link text-white nav-link-custom" to="/" end>Главная</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white nav-link-custom" to="/about">О нас</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white nav-link-custom" to="/products">Каталог</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white nav-link-custom" to="/contact">Контакты</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
