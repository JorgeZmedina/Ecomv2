import React from "react";
import ArrayCard from "../components/ArrayCard";
// import ProductsArray from "../components/ProductsArray";
const Products = ({addToCart}) => {
    return (
        <div>
            <ArrayCard addToCart={addToCart}/>
            {/* <ProductsArray /> */}
        </div>
    );
};
export default Products;