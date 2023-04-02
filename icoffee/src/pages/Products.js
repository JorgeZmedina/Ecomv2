import React from "react";
import '../styles/products.css';
import Cards from '../components/cards'

const losProducts = () => {
    return(
        <div>
            <h1>Los Productos!!</h1>
            <div className="main-products">
            <Cards />
            <Cards />
            <Cards />
            </div>
        </div>
    )
}

export default losProducts;