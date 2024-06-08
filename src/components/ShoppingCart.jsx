/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "../shopping-cart.css"
import { useState } from "react";

export default function ShoppingCart({products}) {

    let [productsInCart, setProductsInCart] = useState([]);

    function addToCart(product) {
        let newProductsInCart = [...productsInCart];
        newProductsInCart.push(product);
        setProductsInCart(newProductsInCart);    
    }

    function removeFromCart(product) {
        let newProductsInCart = productsInCart.filter(item => item !== product);
        setProductsInCart(newProductsInCart);    
    }

    return(
        <>
            <div className="shopping-cart">
                <Products products = {products} addToCart={addToCart}/>
                <Cart productsInCart={productsInCart} removeFromCart={removeFromCart}/>
            </div>
        </>
    );
}

function Products({ products, addToCart }) {
    return (
        <>
            <div className="products">            
                    {products.map((product)=>(
                        <Product product={product} addToCart={addToCart} />
                    ))}
            </div>
       </>
    );
}

function Product({ product, addToCart }) {
    return (
        <div className="product">
            <div className="product-details">
                <img src={product.srcImage} />
                <span>{product.title}</span>
                <span>{product.price} euro</span>
                <button className="compra_btn" onClick={() => addToCart(product)}>compra!</button>
            </div>
            
        </div>
    );
}

function Cart({productsInCart, removeFromCart}) {

    let total = productsInCart.reduce((total, {price})=> price + total, 0)
    return (
        <div className="cart">
            <h2>Cart</h2>
            <span>Total: {total}</span>
            {productsInCart.map((product)=>(
                <div className="cartItem">
                    <div className="p-title">
                        {product.title}
                    </div>
                    <div className="price-plus-btn">
                        {product.price} euro
                        <button className="x_btn" onClick={()=> removeFromCart(product)}>x</button>
                    </div>
                </div>
            ))}
        </div>
    );
}