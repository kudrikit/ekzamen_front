// src/pages/ProductsPage.js
import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

// Импорт фотографий
import coffee1 from '../assets/1coffee.jpg';
import coffee2 from '../assets/2coffee.jpg';
import coffee3 from '../assets/3coffee.webp';

class ProductsPage extends Component {
    render() {
        const products = [
            { id: 1, title: 'Caramel Macchiato', description: 'Эспрессо с ванильным сиропом, молоком и карамельной начинкой.', imageUrl: coffee1 },
            { id: 2, title: 'Caffè Mocha', description: 'Эспрессо с шоколадным соусом и вспененным молоком, украшенный взбитыми сливками.', imageUrl: coffee2 },
            { id: 3, title: 'Flat White', description: 'Сильный эспрессо с бархатистым вспененным молоком.', imageUrl: coffee3 }
        ];

        return (
            <div className="container">
                <h2 className="my-4">Каталог товаров</h2>
                <div className="row">
                    {products.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        );
    }
}

export default ProductsPage;
