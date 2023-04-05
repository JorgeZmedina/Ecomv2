import React from "react";
import '../styles/header.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

function Header () {
  const toggleHamburger = () => {
    console.log(`clicked`)
    var x = document.querySelector("#menuToggle");

    console.log(x);
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

// function cartError () {
//     console.log("click")
//     var x = document.querySelector("#")
//     prompt ("The cart is under renovation. Try again later")
// }

    return (
        <div>
          {/* <img className="img2" src="images/bgg.png" alt="img2"></img> */}
          <div className="logo animate__animated animate__pulse"><Link to="/"><img src="images/logo.png" alt="logo" class="logo"></img></Link></div>

          <article class="cart"><h5>l</h5>
    <a href="">
    <Link to="/Cart">
        <img src="images/cart.jpeg" alt="cart"></img></Link>
    </a>
</article>
         <nav>
            <button className="hamburger" onClick={toggleHamburger}><img src="images/hamburger.png" alt="hamburger" id="hamburger"/></button>
            <article id="menuToggle">
              <ul id="menu">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/products"> Products </Link></li>
                <li><Link to="/contact"> Contact </Link></li>
              </ul>
            </article>
          </nav>
        </div>
    )
};

export default Header;