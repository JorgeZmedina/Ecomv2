import { isVisible } from "@testing-library/user-event/dist/utils";
import React from "react";
import '../styles/cart.css'

const Cart = () => {
    console.log('route to cart');
    // alert('This feature will be available on the next update');

    // const toggleHamburger = () => {
    //     console.log(`clicked`)
    //     var x = document.querySelector("#menuToggle");
    
    //     console.log(x);
    //     if (x.style.display === "block") {
    //         x.style.display = "none";
    //     }
    //     else {
    //         x.style.display = "block";
    //     }
    // }
    const cycleCart = () => {
        console.log('cycling cart options...')
        let cart;
        if (cart === 0){
            console.log('nothing in cart')
        } else {
            console.log('rending cart items')
        }
    }

    return (
    <div className="cart">
        <div className="CartDown">
            <h1>This is the cart</h1>
            <h2>It is currently under construction</h2>
            <h2>Please try again later</h2>
        </div>
        {/* <div className="CartEmpty">
            <h2>Your cart is empty</h2>
        </div> */}

    </div>
    )
}

export default Cart;