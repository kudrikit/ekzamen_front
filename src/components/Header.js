import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Импортируем логотип
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Импортируем файл CSS

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#00704A' }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand d-flex align-items-center" to="/">
                        <img src={logo} alt="Starbucks Coffee Logo" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                        <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>Starbucks Coffee</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
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
            </nav>
        </header>
    );
}

export default Header;
