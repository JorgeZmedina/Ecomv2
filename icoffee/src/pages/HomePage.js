import React from "react";
import '../styles/home-page.css';
// import styles from '../styles/home-page.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Background from "../components/ImgBGSlider";
// import Search from "../components/Search";

function HomePage () {

    return (
  
        <main>
         <h1 className="title"><strong>ICOFFEE <span>SHOP</span></strong></h1>
         <p className="title2">Coffee. Perfected</p>
         <Link to="/contact"><button className="title3 buttonH">Learn More</button></Link>
         <Link to="/products"><button className="title4 buttonH">Buy</button></Link>
        <Background />
        </main>


    )
}

export default HomePage;