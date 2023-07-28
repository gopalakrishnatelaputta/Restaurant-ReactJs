import React from "react";
import Layout from "../Layout/Layout";
import Arrow from '../images/arrow.png'
import Cart1StylesCss from '../styles/Cart1StylesCss.css'
import CartIcon from '../images/cart.png'
import { Typography } from "@mui/material";

const Cart1 =()=>{
    return(
        <Layout>
            <header>
           <div className="continue-shopping">
            <Typography sx={{marginTop:5,marginLeft:5}}>
            <img src={Arrow} alt="arrow" className="arrow-icon"/>
            </Typography>
            <Typography variant="h5" sx={{bgcolor:"block",marginTop:5,marginLeft:5}}>
                Continue-Shopping
            </Typography>
              
            {/* <h5>Continue Shopping</h5> */}

           </div>
           <div className="cart-icon">
             <Typography sx={{marginTop:-8,marginRight:1}}>
               

            <img src={CartIcon} alt="cart" className="cart-icon"></img>
            <h6>7</h6> 
            </Typography>
           </div>
           
           </header>


           <section className="main-cart-section">
                <h6>Shopping Cart</h6>
                <p className="total-Items">you have <span className="total-items-count">7</span></p>
                <div className="cart-items">
                    <div className="class-items-container">
                        <div className="class-info">
                            <div className="product-img">
                                {/* <img src=""></img> */}
                                    
                            </div>

                        </div>

                    </div>


                </div>
           </section>
        </Layout>
        
    );
}
export default Cart1