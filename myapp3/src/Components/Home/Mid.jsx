import React from 'react'
import InspiredProduct from './InspiredProduct';
import Blog from './Blog';
import NewProduct from './NewProduct';

function Mid() {
  return (
    
     <>
    <div className="image1">
      <p>MEN COLLECTION</p>
      <h3>
        <span>Show</span> Your <br />
        Personal <span>Style</span>
      </h3>
      <h4>Fowl saw dry which a above together place.</h4>
      <input type="submit" value="VIEW COLLECTION" className="button" />
    </div>
    <div className="boxes">
      <div className="box">
        <i className="fa-solid fa-sack-dollar"></i>
        <p>MONEY BACK GARUNTEE</p>
        <span>Shall open divide a one</span>
      </div>
      <div className="box">
        <i className="fa-solid fa-truck"></i>
        <p>FREE DILIVERY</p>
        <span>Shall open divide a one</span>
      </div>
      <div className="box">
        <i className="fa-solid fa-headset"></i>
        <p>ALWAYS SUPPORT</p>
        <span>Shall open divide a one</span>
      </div>
      <div className="box">
        <i className="fa-solid fa-shield-halved"></i>
        <p>SECURE PAYMENT</p>
        <span>Shall open divide a one</span>
      </div>
    </div>
    <div className="fetured-product">
      <h2>FEATURED PRODUCT</h2>
      <p>Bring called seed first of third give itself now ment</p>
      <div className="image2">
        <div className="product-image">
          <div className="product-image1">
            <img
              src="https://themewagon.github.io/eiser/img/product/feature-product/f-p-1.jpg"
              alt=""
            />
            <div className="hover_div">
              <div className="icondiv">
                <i className="far fa-eye"></i>
              </div>
              <div className="icondiv">
                <i className="far fa-heart"></i>
              </div>
              <div className="icondiv">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
          <div className="content">
            <a href="">LATEST MEN'S SNEAKER</a><br />
            <h6>
              $25.00<span><del>$35.00</del></span>
            </h6>
          </div>
        </div>
        <div className="product-image">
          <div className="product-image1">
            <img
              src="	https://themewagon.github.io/eiser/img/product/feature-product/f-p-2.jpg"
              alt=""
            />
            <div className="hover_div">
              <div className="icondiv">
                <i className="far fa-eye"></i>
              </div>
              <div className="icondiv">
                <i className="far fa-heart"></i>
              </div>
              <div className="icondiv">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
          <div className="content">
            <a href="">RED WOMEN PURSES</a><br />
            <h6>
              $25.00<span><del>$35.00</del></span>
            </h6>
          </div>
        </div>
        <div className="product-image">
          <div className="product-image1">
            <img
              src="https://themewagon.github.io/eiser/img/product/feature-product/f-p-3.jpg"
              alt=""
            />
            <div className="hover_div">
              <div className="icondiv">
                <i className="far fa-eye"></i>
              </div>
              <div className="icondiv">
                <i className="far fa-heart"></i>
              </div>
              <div className="icondiv">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
          <div className="content">
            <a href="">MEN STYLIST SMART WATCH</a><br />
            <h6>
              $25.00<span><del>$35.00</del></span>
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div className="mencollection">
      <div className="typeing">
        <p>ALL MEN'S COLLECTION</p>
        <h1>50% OFF</h1>
        <input type="submit" value="DISCOVER NOW" className="col" />
        <p id="time">Limited Time Offer</p>
      </div>
    </div>
  
      <NewProduct />
      <InspiredProduct />
      <Blog />
     </>
  )
}

export default Mid;