import React from "react";
import "./Checkout.css"

function Checkout() {
  return (
    <>
      <div>
        <div className="box1">
          <div className="box1a">
            <h2>Product Checkout</h2>
            <p style={{ color: "gray", fontSize: 14 }}>
              Very us move be blessed multiply night
            </p>
          </div>
          <div className="box1b">
            <span>Home</span>
            <span>/</span>
            <span>Product Checkout</span>
          </div>
        </div>
        <div className="box2">
          <div className="box21">
            <div className="box22">
              Returning Customer?{" "}
              <a href style={{ color: "#71cd14" }}>
                Click here to login
              </a>
            </div>
            <p className="para">
              If you have shopped with us before, please enter your details in
              the boxes below. If you are a new customer, please proceed to the
              Billing &amp; Shipping section.
            </p>
            <input
              type="text"
              placeholder="Username or Email*"
              className="form"
            />
            <input type="password" placeholder="Password*" className="form" />
            <br />
            <button id="btn">Send Message</button>
            <input type="checkbox" id="checkbox" />
            <span>Remember Me</span>
            <p className="para">Lost your password?</p>
            <div className="box22">
              Have a coupon?{" "}
              <a href style={{ color: "#71cd14" }}>
                Click here to enter your code{" "}
              </a>
            </div>
            <input
              type="text"
              placeholder="Enter coupon code"
              className="form"
              id="form2"
            />
            <br />
            <button id="btn2">APPLY COUPON</button>
          </div>
        </div>
        <div className="box3">
          <div className="box31">
            <div className="form3">
              <h3 style={{ marginTop: 35 }}>Billing Details</h3>
              <p
                style={{
                  borderBottom: "1px solid rgb(198, 197, 197)",
                  marginTop: 10,
                  border: "1px solid rgb(228, 226, 226)",
                }}
              ></p>
              <input
                type="text"
                placeholder="First Name"
                className="form31 form32"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form31 form32"
                style={{ marginLeft: 25 }}
              />
              <br />
              <input
                type="text"
                placeholder="Company Name"
                className="form31"
              />
              <br />
              <input
                type="number"
                placeholder="Phone Number"
                className="form31 form32"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="form31 form32"
                style={{ marginLeft: 25 }}
              />
              <br />
              <select name id className="form31">
                <option value>Country</option>
                <option value>Country</option>
                <option value>Country</option>
              </select>
              <br />
              <input
                type="text"
                placeholder="Address Line 01"
                className="form31"
              />
              <br />
              <input
                type="text"
                placeholder="Address Line 02"
                className="form31"
              />
              <br />
              <input type="text" placeholder="Town/city" className="form31" />
              <br />
              <select name id className="form31">
                <option value>District</option>
                <option value>District</option>
                <option value>District</option>
              </select>
              <br />
              <input
                type="text"
                placeholder="POSTCODE/ZIP"
                className="form31"
              />
              <input type="checkbox" className="checkbox" />
              <span className="checkbox">Create an account?</span>
              <h3 style={{ marginTop: 35 }}>Shipping Details</h3>
              <p
                style={{
                  borderBottom: "1px solid rgb(224, 223, 223)",
                  marginTop: 10,
                  border: "1px solid rgb(228, 226, 226)",
                }}
              ></p>
              <input type="checkbox" className="checkbox" />
              <span className="checkbox"> Ship to a different address?</span>
              <br />
              <textarea
                name
                id="textarea"
                placeholder="Order Notes"
                defaultValue={""}
              />
            </div>
            <div className="order">
              <h3 style={{ marginTop: 35, marginLeft: 20 }}>Your Order</h3>
              <p
                style={{
                  borderBottom: "1px solid gray",
                  margin: 20,
                  border: "1px solid rgb(228, 226, 226)",
                }}
              />
              <ul className="list">
                <li>
                  <a href="#">
                    Product
                    <span style={{ marginLeft: 227 }}>Total</span>
                  </a>
                </li>
                <p
                  style={{
                    borderBottom: "1px solid gray",
                    margin: 10,
                    border: "1px solid rgb(228, 226, 226)",
                  }}
                />
                <li>
                  <a href="#">
                    Fresh Blackberry
                    <span className="middle">x 02</span>
                    <span className="last">$720.00</span>
                  </a>
                </li>
                <p
                  style={{
                    borderBottom: "1px solid gray",
                    margin: 10,
                    border: "1px solid rgb(228, 226, 226)",
                  }}
                />
                <li>
                  <a href="#">
                    Fresh Tomatoes
                    <span className="middle">x 02</span>
                    <span className="last" style={{ marginLeft: 65 }}>
                      $720.00
                    </span>
                  </a>
                </li>
                <p
                  style={{
                    borderBottom: "1px solid gray",
                    margin: 10,
                    border: "1px solid rgb(228, 226, 226)",
                  }}
                />
                <li>
                  <a href="#">
                    Fresh Brocoli
                    <span className="middle" style={{ marginLeft: 57 }}>
                      x 02
                    </span>
                    <span className="last" style={{ marginLeft: 66 }}>
                      $720.00
                    </span>
                  </a>
                </li>
                <p
                  style={{
                    borderBottom: "1px solid gray",
                    margin: 10,
                    border: "1px solid rgb(228, 226, 226)",
                  }}
                />
              </ul>
              <ul className="list_2">
                <li>
                  <a href="#">
                    Subtotal
                    <span className="list21" style={{ marginLeft: 168 }}>
                      $2160.00
                    </span>
                  </a>
                  <p
                    style={{
                      borderBottom: "1px solid gray",
                      margin: 10,
                      border: "1px solid rgb(228, 226, 226)",
                    }}
                  ></p>
                </li>
                <li>
                  <a href="#">
                    Shipping
                    <span className="list21">Flat rate: $50.00</span>
                  </a>
                  <p
                    style={{
                      borderBottom: "1px solid gray",
                      margin: 10,
                      border: "1px solid rgb(228, 226, 226)",
                    }}
                  ></p>
                </li>
                <li>
                  <a href="#">
                    Total
                    <span className="list21" style={{ marginLeft: 198 }}>
                      $2210.00
                    </span>
                  </a>
                  <p
                    style={{
                      borderBottom: "1px solid gray",
                      margin: 10,
                      border: "1px solid rgb(228, 226, 226)",
                    }}
                  ></p>
                </li>
              </ul>
              <div className="payment_item">
                <div className="radion_btn">
                  <input type="radio" id="f-option5" name="selector" />
                  <label htmlFor="f-option5">Check payments</label>
                </div>
                <p>
                  Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.
                </p>
              </div>
              <div className="payment_item active">
                <div className="radion_btn">
                  <input type="radio" id="f-option6" name="selector" />
                  <label htmlFor="f-option6">Paypal </label>
                  <img
                    src="https://themewagon.github.io/eiser/img/product/single-product/card.jpg"
                    alt
                  />
                </div>
                <p style={{ color: "#71cd14" }}>
                  Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.
                </p>
              </div>
              <div className="creat_account">
                <input type="checkbox" id="f-option4" name="selector" />
                <label htmlFor="f-option4">I’ve read and accept the </label>
                <a href="#" style={{ color: "#71cd14" }}>
                  terms &amp; conditions*
                </a>
              </div>
              <a className="main_btn" href="#">
                Proceed to Paypal
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
