import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Показать уведомление
        setShowNotification(true);
        // Очистить поля формы
        setName('');
        setEmail('');
        setMessage('');
        // Скрыть уведомление через 3 секунды
        setTimeout(() => setShowNotification(false), 3000);
    };

    return (
        <div className="container">
            <h2 className="my-4">Контакты</h2>
            <p>Свяжитесь с нами, чтобы задать вопросы или отправить отзыв.</p>

            {/* Уведомление */}
            {showNotification && <div className="alert alert-success" role="alert">Заявка отправлена!</div>}

            {/* Форма для отправки сообщения */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Ваше имя</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Ваш email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Сообщение</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Отправить</button>
            </form>
            <br/>
            <br/>
        </div>
    );
}

export default ContactPage;
