// src/pages/ProductsPage.js
import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductsPage extends Component {
    render() {
        const products = [
            { id: 1, title: 'Кофе Арабика', description: 'Описание товара Арабика', imageUrl: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Кофе Робуста', description: 'Описание товара Робуста', imageUrl: 'https://via.placeholder.com/150' },
            { id: 3, title: 'Кофе Либерика', description: 'Описание товара Либерика', imageUrl: 'https://via.placeholder.com/150' }
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
