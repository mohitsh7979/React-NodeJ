import './Prdouctdatails.css'
import { Link, useParams } from 'react-router-dom';
import featured_data from '../Home/FD_product';


function Productdetails() {
 
   const {id} =  useParams();
   const ourproduct = featured_data.filter((item)=>{
    return item.id == id;
   })
   console.log(ourproduct)

   
    return (
        <>
            <div>
                <div className="box1">
                    <div className="box1a">
                        <h2>
                            Product Details
                        </h2>
                        <p style={{ color: 'gray', fontSize: 14 }}>
                            Very us move be blessed multiply night
                        </p>
                    </div>
                    <div className="box1b">
                        <span>Home</span>
                        <span>/</span>
                        <span>
                            Product Details
                        </span>
                    </div>
                </div>
                <div className="box2" id="x1" />
                <div className="main">
                    <div className="main1">
                        <div className="main11">
                            <img
                                src={ourproduct[0].image}
                                alt />
                        </div>
                    </div>
                    <div className="main1">
                        <div className="innermain1">
                            <h2>
                              {ourproduct[0].title}
                            </h2>
                            <br />
                            <h2 style={{ color: 'lightgreen' }}>Rs.{ourproduct[0].price}</h2>
                            <br />
                            <div className="innermain2">
                                <div className="innermain22">
                                    <p>Category</p>
                                    <br />
                                    <p>Availibility</p>
                                    <br />
                                    <div className="innermain23">
                                        <p style={{ color: '#71cd14' }}>:Household</p>
                                        <br />
                                        <p>
                                            :In stock
                                        </p>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="line1">
                                <p>
                                    500
                                </p>
                                <br />
                                <br />
                                <br />
                            </div>
                            <div className="quantity">
                                <label
                                    htmlFor="quantity"
                                    style={{ color: 'rgb(58, 57, 57)' }}>Quantity:</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min={0}
                                    max={100}
                                    defaultValue={1} />
                               
                            </div>
                            <div className="cart">
                                <div className="s1">
                                    <button type="submit">
                                        <Link to={"/Cart/"}>Add to Cart</Link>
                                    </button>
                                </div>
                                <div className="s2">
                                    <i className="fa-solid fa-diamond" />
                                </div>
                                <div className="s2">
                                    <i className="fa-regular fa-heart" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box3">
                    <div className="box31">
                        <button className="btn">Description</button>
                        <button className="btn">Specification</button>
                        <button className="btn" id="comments">Comments</button>
                        <button className="btn">Reviews</button>
                    </div>
                    <div className="box32">
                        <div className="box33">
                            <img
                                src="https://themewagon.github.io/eiser/img/product/single-product/review-1.png"
                                alt
                                className="img" />
                            {/* <h3>Blake Ruiz</h3> */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            </p>
                            <img
                                src="https://themewagon.github.io/eiser/img/product/single-product/review-2.png"
                                alt
                                className="img" />
                            {/* <h3>Blake Ruiz</h3> */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            </p>
                            <img
                                src="https://themewagon.github.io/eiser/img/product/single-product/review-3.png"
                                alt
                                className="img" />
                            {/* <h3>Blake Ruiz</h3> */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            </p>
                        </div>
                        <div className="box34">
                            <h2 style={{ marginTop: 20 }}>
                                Post a comment
                            </h2>
                            <input
                                type="text"
                                placeholder="your full name"
                                className="input" />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="input" />
                            <input
                                type="number"
                                placeholder="Phone Number "
                                className="input" />
                            <textarea name="Message" id defaultValue={""} />
                            <button id="submit">
                                Submit Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Productdetails;