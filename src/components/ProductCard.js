// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ id, title, description, imageUrl }) {
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <img src={imageUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/products/${id}`} className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
