import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import coffee1 from '../assets/1coffee.jpg';
import coffee2 from '../assets/2coffee.jpg';
import coffee3 from '../assets/3coffee.webp';

const products = [
    {
        id: 1,
        title: 'Caramel Macchiato',
        description: 'Caramel Macchiato - это вкусный кофейный напиток с эспрессо, ванильным сиропом, горячим молоком и карамельной начинкой. Он обладает сладким вкусом с легкой карамельной ноткой и нежным ароматом.',
        imageUrl: coffee1
    },
    {
        id: 2,
        title: 'Caffè Mocha',
        description: 'Caffè Mocha - это насыщенный кофейный напиток, приготовленный на основе эспрессо с добавлением шоколадного соуса и взбитого молока. Его богатый вкус шоколада в сочетании с ароматным кофе и кремовой пенкой делает его идеальным выбором для любителей кофейных десертов.',
        imageUrl: coffee2
    },
    {
        id: 3,
        title: 'Flat White',
        description: 'Flat White - это напиток с сильным эспрессо и бархатистым вспененным молоком. Его характеризует более сбалансированный вкус и мягкий аромат, чем у других кофейных напитков. Flat White придется по вкусу ценителям кофейного искусства и тем, кто предпочитает кофе без большого количества молока.',
        imageUrl: coffee3
    }
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
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={product.imageUrl} className="img-fluid" alt={product.title} />
                </div>
                <div className="col-md-6">
                    <h3>{product.title}</h3>
                    <p className="text-justify" style={{ color: '#00704A', textAlign: 'justify' }}>{product.description}</p>
                </div>
            </div>
            <br/>
        </div>
    );
}

export default ProductPage;
