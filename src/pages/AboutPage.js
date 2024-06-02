import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutImage from '../assets/aboutimage.jpg';  // Убедитесь, что путь к изображению правильный
import './AboutPage.css';  // Убедитесь, что путь к CSS-файлу правильный

function AboutPage() {
    return (
        <div className="container my-4">
            <h2 className="my-4">О нас</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={aboutImage} alt="О нас" className="img-fluid about-image" />
                </div>
                <div className="col-md-6">
                    <p style={{ textAlign: 'justify' }}>
                        Мы стараемся создавать уютную атмосферу, где каждый может насладиться своим любимым напитком в приятной компании. Наша миссия — предлагать качественные продукты и отличный сервис, чтобы каждый визит был особенным.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        Наша команда работает каждый день, чтобы удивлять вас новыми вкусами и предлагать самые свежие и ароматные напитки. Мы верим, что кофе — это больше, чем просто напиток, это опыт, который можно разделить с друзьями и близкими.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        Присоединяйтесь к нам и наслаждайтесь моментом!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
