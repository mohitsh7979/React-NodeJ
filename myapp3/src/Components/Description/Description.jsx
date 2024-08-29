import React from "react";
import "./Description.css"
import { Link } from "react-router-dom";
function Description() {
  return (
    <>
      <div className="box1">
        <div className="box1a">
          <h2>Product Details</h2>
          <p style={{ color: "gray", fontsize: "14px" }}>
            Very us move be blessed multiply night
          </p>
        </div>
        <div className="box1b">
          <span>Home</span>
          <span>/</span>
          <span>Product Details</span>
        </div>
      </div>
      <div className="box2" id="x1"></div>
      <div className="main">
        <div className="main1">
          <div className="main11">
            <img
              src="https://themewagon.github.io/eiser/img/product/single-product/s-product-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="main1">
          <div className="innermain1">
            <h2>Faded SkyBlu Denim Jeans</h2>
            <br />
            <h2 style={{ color: "lightgreen" }}>$149.99</h2>
            <br />
            <div className="innermain2">
              <div className="innermain22">
                <p>Category</p>
                <br />
                <p>Availibility</p>
                <br />
                <div className="innermain23">
                  <p style={{ color: "#71cd14" }}>:Household</p>
                  <br />
                  <p>:In stock</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="line1">
              <p>
                Mill Oil is an innovative oil filled radiator with the most
                modern technology. If you are looking for something that can
                make your interior look awesome, and at the same time give you
                the pleasant warm feeling during the winter.
              </p>
              <br />
              <br />
              <br />
            </div>
            <div className="quantity">
              <label htmlFor="quantity" style={{ color: "rgb(58, 57, 57);" }}>
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="100"
                value="1"
              />
              <br />
              <br />
              <br />
            </div>
            <div className="cart">
              <div className="s1">
                <button type="submit">
                 <Link to="/cart/">Add to Cart</Link> 
                </button>
              </div>
              <div className="s2">
                <i className="fa-solid fa-diamond"></i>
              </div>
              <div className="s2">
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box3">
        <div className="box31">
          <button className="btn">Description</button>
          <button className="btn">Specification</button>
          <button className="btn" id="comments">
            Comments
          </button>
          <button className="btn">Reviews</button>
        </div>
        <div className="box32">
          <div className="box33">
            <img
              src="https://themewagon.github.io/eiser/img/product/single-product/review-1.png"
              alt=""
              className="img"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
            <img
              src="https://themewagon.github.io/eiser/img/product/single-product/review-2.png"
              alt=""
              className="img"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
            <img
              src="https://themewagon.github.io/eiser/img/product/single-product/review-3.png"
              alt=""
              className="img"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
          </div>
          <div className="box34">
            <h2 style={{margintop: "20px"}}>Post a comment</h2>
            <input type="text" placeholder="your full name" className="input" />
            <input type="email" placeholder="Email address" className="input" />
            <input type="number" placeholder="Phone Number " className="input" />
            <textarea name="Message" id=""></textarea>
            <button id="submit">Submit Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
