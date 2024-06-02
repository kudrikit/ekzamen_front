// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Предполагая, что стили будут добавлены в этот файл

function ProductCard({ id, title, description, imageUrl }) {
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <div className="image-container">
                    <img src={imageUrl} className="card-img-top" alt={title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title"><span className="badge text-bg-success">{title}</span></h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/products/${id}`} className="btn btn-outline-primary" style={{ display: 'block', textAlign: 'center' }}>
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
