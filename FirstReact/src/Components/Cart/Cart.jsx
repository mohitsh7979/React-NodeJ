import './Cart.css'
import { Link } from 'react-router-dom';

function Cart() {
    return (
        <>
            <div>
                <div className="cart">
                    <div className="cart1">
                        <div id="cartsize">Cart</div>
                        <p>
                            Very us move be blessed multiply night
                        </p>
                    </div>
                    <div className="cart2">
                        <p className="hover">Home</p>
                        <p>/</p>
                        <p className="hover">Cart</p>
                    </div>
                </div>
                <div className="productpricecard ppc">
                    <div className="ppcbox">
                        <h5>
                            Product
                        </h5>
                        <ul>
                            <li>Price</li>
                            <li>Quantity</li>
                            <li>Total</li>
                        </ul>
                    </div>
                </div>
                <div className="ppc">
                    <div className="ppcbox ppcli">
                        <img
                            src="https://themewagon.github.io/eiser/img/product/single-product/cart-1.jpg"
                            alt />
                        <h5>
                            Minimalistic shop for multipurpose use
                        </h5>
                        <ul>
                            <li>$360.00</li>
                            <li className="input">
                                <input type="number" />
                            </li>
                            <li>$720.00</li>
                        </ul>
                    </div>
                </div>
                <div className="ppc">
                    <div className="ppcbox ppcli">
                        <img
                            src="https://themewagon.github.io/eiser/img/product/single-product/cart-1.jpg"
                            alt />
                        <h5>
                            Minimalistic shop for multipurpose use
                        </h5>
                        <ul>
                            <li>$360.00</li>
                            <li className="input">
                                <input type="number" />
                            </li>
                            <li>$720.00</li>
                        </ul>
                    </div>
                </div>
                <div className="ppc ">
                    <div className="ppcbox ppcli">
                        <img
                            src="https://themewagon.github.io/eiser/img/product/single-product/cart-1.jpg"
                            alt />
                        <h5>
                            Minimalistic shop for multipurpose use
                        </h5>
                        <ul>
                            <li>$360.00</li>
                            <li className="input">
                                <input type="number" />
                            </li>
                            <li>$720.00</li>
                        </ul>
                    </div>
                </div>
                <div className="apply">
                    <button>
                        UPDATE CART
                    </button>
                    <div className="threebtn">
                        <input type="text" placeholder="Coupon code" />
                        <a href className="ahover">Apply</a>
                        <button className="cc">
                            Close Coupon
                        </button>
                    </div>
                </div>
                <div className="productpricecard ppc relppc">
                    <div className="ppcbox rel">
                        <ul>
                            <li>Subtotal</li>
                            <li>$2160.00</li>
                        </ul>
                    </div>
                </div>
                <div className="lowerdiv">
                    <div className="llmid">
                        <ul className="ul">
                            <li>Shipping</li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <a href>
                                    Flat Rate:$5.00
                                </a>
                                <input type="radio" />
                            </li>
                            <li>
                                <a href>
                                    Free Shipping
                                </a>
                                <input type="radio" />
                            </li>
                            <li>
                                <a href>
                                    Flat Rate:$10.00
                                </a>
                                <input type="radio" />
                            </li>
                            <li>
                                <a href>
                                    Local Delivery:$2.00
                                </a>
                                <input type="radio" />
                            </li>
                            <p>Calculate Shipping </p>
                            <span className="spn">
                                <select name id="spn">
                                    <option value>Bangladesh</option>
                                    <option value>India</option>
                                    <option value>Pakistan</option>
                                </select>
                                <select name id="spn">
                                    <option value>
                                        Select a State
                                    </option>
                                    <option value>
                                        Select a State
                                    </option>
                                    <option value>
                                        Select a State
                                    </option>
                                </select>
                                <input
                                    type="search"
                                    placeholder="Post Code/Zip Code"
                                    className="inp" />
                                <input
                                    type="Update Details"
                                    defaultValue="Update Details"
                                    className="update"
                                    style={{ textAlign: 'center', padding: 20, fontWeight: 600 }} />
                            </span>
                        </ul>
                    </div>
                    <div className="checkout">
                        <button className="cc">
                            CONTINUE SHOPPING
                        </button>
                        <Link to={"/Checkout/"}  className="ahover">
                            Proceed to checkout
                            </Link>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Cart;