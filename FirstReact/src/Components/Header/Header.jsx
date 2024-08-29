import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
    return (
        <>
            <div className="header-1">
                <div>
                    <ul>
                        <li>PHONE: +01 256 25 235 </li>
                        <li>|</li>
                        <li>EMAIL: INFO@EISER.COM</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">GIFT CARD</a></li>
                        <li>|</li>
                        <li><a href="#">TRACK ORDER</a></li>
                        <li>|</li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                </div>
            </div>

            <div className="header-2">
                <div className="left">
                    <img src="https://themewagon.github.io/eiser/img/logo.png" alt="Logo" />
                </div>
                <div className="center">
                    <ul>
                        <li><Link to={"/"} style={{ color: "#71cd14" }}>HOME</Link></li>
                        <li className="shop">
                            <Link to={" "}className="hover">SHOP</Link>
                            <ul className="shopcategory">
                                <li className="sub-menu"><Link to={"/Category/"}>Shop Category</Link></li>
                                <hr />
                                <li className="sub-menu"><Link to={"/Detail/"}>Product Details</Link></li>
                                <hr />
                                <li className="sub-menu"><Link to={"/Checkout/"}>Product Checkout</Link></li>
                                <hr />
                                <li className="sub-menu"><Link to={"/Cart/"}>Shopping Cart</Link></li>                            </ul>
                        </li>
                        <li className="blog_a">
                            <a href="#" className="hover">BLOG</a>
                            <ul className="blog">
                                <li><a href="#">Blog</a></li>
                                <hr />
                                <li><a href="#">Blog Details</a></li>
                            </ul>
                        </li>
                        <li className="page_a">
                            <a href="#" className="hover">PAGES</a>
                            <ul className="page">
                                <li><a href="#">Tracking</a></li>
                                <hr />
                                <li><a href="#">Elements</a></li>
                            </ul>
                        </li>
                        <li><a href="#" className="hover">CONTACT</a></li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                        <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
                        <li><a href="#"><i className="fa-regular fa-user"></i></a></li>
                        <li><a href="#"><i className="fa-regular fa-heart"></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
