// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
    { id: 1, title: 'Кофе Арабика', description: 'Описание товара Арабика', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Кофе Робуста', description: 'Описание товара Робуста', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Кофе Либерика', description: 'Описание товара Либерика', imageUrl: 'https://via.placeholder.com/150' }
];

function ProductPage() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="container"><h2 className="my-4">Товар не найден</h2></div>;
    }

    return (
        <div className="container">
            <h2 className="my-4">{product.title}</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={product.imageUrl} className="img-fluid" alt={product.title} />
                </div>
                <div className="col-md-6">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <button className="btn btn-primary">Добавить в корзину</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
