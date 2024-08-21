import React from "react";
import "./Cart.css"

const Cart = () => {
  return (
    <>
      <div>
        <div className="cart">
          <div className="cart1">
            <div id="cartsize">Cart</div>
            <p>Very us move be blessed multiply night</p>
          </div>
          <div className="cart2">
            <p className="hover">Home</p>
            <p>/</p>
            <p className="hover">Cart</p>
          </div>
        </div>
        <div className="productpricecard ppc">
          <div className="ppcbox">
            <h5>Product</h5>
            <ul>
              <li>Price</li>
              <li>Quantity</li>
              <li>Total</li>
            </ul>
          </div>
        </div>
        <div className="ppc">
          <div className="ppcbox ppcli">
            {/* <img src="" alt="">  */}
            <img
              src="https://themewagon.github.io/eiser/img/product/single-product/cart-1.jpg"
              alt
            />
            <h5>Minimalistic shop for multipurpose use</h5>
            <ul>
              <li>$360.00</li>
              <li className="input">
                <input type="text" />
                <div className="btn">
                  <button></button>
                  <button></button>
                </div>
              </li>
              <li>$720.00</li>
            </ul>
          </div>
        </div>
        <div className="ppc">
          <div className="ppcbox ppcli">
            {/* <img src="" alt="">  */}
            <img
              src="https://themewagon.github.io/eiser/img/product/single-product/cart-1.jpg"
              alt
            />
            <h5>Minimalistic shop for multipurpose use</h5>
            <ul>
              <li>$360.00</li>
              <li className="input">
                <input type="text" />
                <div className="btn">
                  <button></button>
                  <button />
                </div>
              </li>
              <li>$720.00</li>
            </ul>
          </div>
        </div>
        <div className="ppc ">
          <div className="ppcbox ppcli">
            {/* <img src="" alt="">  */}
            <img
              src="https://themewagon.github.io/eiser/img/product/single-product/cart-1.jpg"
              alt
            />
            <h5>Minimalistic shop for multipurpose use</h5>
            <ul>
              <li>$360.00</li>
              <li className="input">
                <input type="text" />
                <div className="btn">
                  <button></button>
                  <button></button>
                </div>
              </li>
              <li>$720.00</li>
            </ul>
          </div>
        </div>
        <div className="apply">
          <button>Update Cart</button>
          <div className="threebtn">
            <input type="text" placeholder="Coupon code" />
            <a href className="ahover">
              Apply
            </a>
            <button className="cc">Close Coupon</button>
          </div>
        </div>
        <div className="productpricecard ppc relppc">
          <div className="ppcbox rel">
            <ul>
              <li>Quantity</li>
              <li>Total</li>
            </ul>
          </div>
        </div>
        <div className="lowerdiv">
          <div className="llmid">
            <ul className="ul">
              <li>Shopping</li>
            </ul>
            <ul className="ul-list">
              <li>
                <a href>Flat Rate:$5.00</a>
                <input type="radio" />
              </li>
              <li>
                <a href>Flat Rate:$5.00</a>
                <input type="radio" />
              </li>
              <li>
                <a href>Flat Rate:$5.00</a>
                <input type="radio" />
              </li>
              <li>
                <a href>Flat Rate:$5.00</a>
                <input type="radio" />
              </li>
              <p>
                Calculate Shipping <span>&gt;</span>
              </p>
              <span className="spn">
                <input type="submit" defaultValue="State" className="inp" />
                <input type="submit" defaultValue="City" className="inp" />
                <input
                  type="search"
                  placeholder="Post Code/Zip Code"
                  className="inp"
                />
                <input
                  type="submit"
                  defaultValue="Update Details"
                  className="inp"
                  style={{ textAlign: "center", padding: 20, fontWeight: 600 }}
                />
              </span>
            </ul>
          </div>
          <div className="checkout">
            <button className="cc">CONTINUE SHOPPING</button>
            <a href className="ahover">
              Proceed to chechout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
