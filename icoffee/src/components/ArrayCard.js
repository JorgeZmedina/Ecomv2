import React, { useRef, useState, useEffect } from "react";
import '../styles/products.css'
import ProductsArray from "./ProductsArray";
function thankyou () {
    alert("Added To Cart :)")};

const ArrayCard = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const inputRef = useRef(null);
    const handleChange = (e) => setSearch(e.target.value);
    useEffect(() => {
        setProducts(ProductsArray);
    }, []);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(50);
    useEffect(() => {
        const filtered = products.filter((product) => {
            const titleMatch = product.title.toLowerCase().includes(search.toLowerCase());
            const priceMatch = product.price >= minPrice && product.price <= maxPrice;
            return titleMatch && priceMatch;
        });
        setFilteredProducts(filtered);
    }, [products, search, minPrice, maxPrice]);
    return (
        <div>
            <div className="searchBar">
                <label>Search:</label>
                <input
                    ref={inputRef}
                    onChange={handleChange}
                    placeholder="Type your favorite drink!"
                    type="text"
                />
            </div>
            <div className="maxnmin">
                <label>Min Price:</label>
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Math.max(0, e.target.value))}
                />
                <label>Max Price:</label>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Math.min(50, e.target.value))}
                />
            </div>
            <div className="products-container">
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-item root">
                            <img src={product.image} alt={product.title} />
                            <div className="product-details">
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <span className="product-price">${product.price}</span>
                                <button className="buttonC buttonD" onClick={thankyou} type="submit" value="submit" id="Submit">Add To Cart</button>

                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    )
};
export default ArrayCard;





