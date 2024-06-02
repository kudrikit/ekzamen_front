import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactPage() {
    return (
        <div className="container">
            <h2 className="my-4">Контакты</h2>
            <p>Свяжитесь с нами, чтобы задать вопросы или отправить отзыв.</p>
            {/* Форма для отправки сообщения */}
            <form>
                <div className="form-group">
                    <label htmlFor="name">Ваше имя</label>
                    <input type="text" className="form-control" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Ваш email</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Сообщение</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
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
