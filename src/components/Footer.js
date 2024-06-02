import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'; // Импортируем файл CSS
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <NavLink className="navbar-brand d-flex align-items-center" to="/">
                            <img src={logo} alt="Starbucks Coffee Logo" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                            <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>Starbucks Coffee</span>
                        </NavLink>
                        <p>Качественное кофе из натуральных продуктов.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Разделы:</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Главная</a></li>
                            <li><a href="/about" className="text-white">О нас</a></li>
                            <li><a href="/products" className="text-white">Каталог</a></li>
                            <li><a href="/contact" className="text-white">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Следите за нами:</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com/people/Starbucks-Казахстан/100089954462101/" className="text-white"><i className="fab fa-facebook footer-icon"></i> Facebook</a></li>
                            <li><a href="https://x.com/starbucks/" className="text-white"><i className="fab fa-twitter footer-icon"></i> Twitter</a></li>
                            <li><a href="https://www.instagram.com/starbuckskz/?igshid=YmMyMTA2M2Y%3D" className="text-white"><i className="fab fa-instagram footer-icon"></i> Instagram</a></li>
                            <li><a href="https://www.linkedin.com/company/starbucks" className="text-white"><i className="fab fa-linkedin footer-icon"></i> LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center py-3" >
                    &copy; {new Date().getFullYear()} Starbucks Coffee. Все права защищены.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
