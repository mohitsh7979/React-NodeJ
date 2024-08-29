import { Link } from "react-router-dom";

function Header() {
  return <>
      <div className="header-1">
      <div>
        <ul>
          <li>PHONE: +01 256 25 235</li>
          <li>|</li>
          <li>EMAIL: INFO@EISER.COM</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a href="">GIFT CARD</a></li>
          <li>|</li>
          <li><a href="">TRACK ORDER</a></li>
          <li>|</li>
          <li><a href="">CONTACT US</a></li>
        </ul>
      </div>
    </div>

    <div className="header-2">
      <div className="left">
        <img src="https://themewagon.github.io/eiser/img/logo.png" alt="" />
      </div>
      <div className="center">
        <ul>
          <li>
            <Link to={"/"} style={{color: "#71cd14"}}>HOME</Link>
          </li>
          <li className="shop">
            <Link to={""} className="hover">Shop</Link>
            <ul className="shopcategory">
              <li className="sub-menu">
                <Link to="/category/">Shop Category</Link>
              </li>
              <hr />
              <li className="sub-menu">
                <Link to="/detail/">Product Detail</Link>
              </li>
              <hr />
              <li className="sub-menu">
                <Link to="/checkout/">Product Checkout</Link>
              </li>
              <hr />
              <li className="sub-menu">
                <Link to="/cart/">Shopping Cart</Link>
              </li>
            </ul>
          </li>
          <li className="blog_a">
            <a href="" className="hover">BLOG</a>
            <ul className="blog">
              <li><a href="">blog</a></li>
              <hr />
              <li><a href="">blog details</a></li>
            </ul>
          </li>
          <li className="page_a">
            <a href="" className="hover">PAGES</a>
            <ul className="page">
              <li><a href="">tracking</a></li>
              <hr />
              <li><a href="">elements</a></li>
            </ul>
          </li>
          <li><a href="" className="hover">CONTECT</a></li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
          </li>
          <li>
            <a href=""><i className="fa-solid fa-cart-shopping"></i></a>
          </li>
          <li>
            <a href=""><i className="fa-regular fa-user"></i></a>
          </li>
          <li>
            <a href=""><i className="fa-regular fa-heart"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </>;
}

export default Header;
