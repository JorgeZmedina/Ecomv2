import React from "react";
import '../styles/home-page.css';
import { BrowserRouter, Route, Link } from "react-router-dom";


function HomePage () {

    return (
        <div>
        <main>
    <section className="action"><h5>l</h5>
    <section className="hero content"><h5>l</h5>
    <h2 className="animate__animated animate__zoomIn title"><strong>ICoffee <span>Shop</span></strong></h2>
    <p>Coffee. Perfected</p>
    <img src="images/slide1pch.png" alt="img1"></img>
    <img src="images/mccf.png" alt="img1"></img>
    <h6> <Link to="/contact"> learn more </Link> </h6>
    <h6><Link to="/products"> Buy</Link></h6>
</section>
</section>

</main>
        </div>
    )
}

export default HomePage;