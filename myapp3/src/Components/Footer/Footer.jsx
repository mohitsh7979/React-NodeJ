function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <div className="mul">
            <ul>
              <li>Top Products</li>
              <li>Quick Links</li>
              <li>Features</li>
              <li>Resources</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className="mul1">
            <ul>
              <li>Managed Website</li>
              <li>Manage Reputation</li>
              <li>Power tools</li>
              <li>Marketing Service</li>
            </ul>
          </div>
          <div className="mul2">
            <ul>
              <li>Jobs</li>
              <li>Brand Assets</li>
              <li>Investor Relations</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="mul3">
            <ul>
              <li>Jobs</li>
              <li>Brand Assets</li>
              <li>Investor Relations</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="mul4">
            <ul>
              <li>Guides</li>
              <li>Research</li>
              <li>Experts</li>
              <li>Agencies</li>
            </ul>
          </div>
          <div className="mul5">
            <span style={{color: "#797979"}}>
              You can trust us. we only send promo offers,
            </span>
            <input
              type="email"
              placeholder="Your Email Address"
              style={{
              padding:" 20px 40px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              margintop: "8%",
              border: "none"
            }}
            />
            <div className="subs">
              <button style={{backgroundcolor: "#71cd14", color: "white", padding: "3.5%"}}>
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="copyright">
            <span>
              Copyright ©2024 All rights reserved | This template is made with
              <i className="fa-regular fa-heart"></i> by
              <span style={{color: "#71cd14"}}>Colorlib</span>
            </span>
          </div>
          <div className="icon">
            {/* <i
              style="
              margin-right: 2%;
              height: 40px;
              width: 40px;
              background-color: rgba(255, 255, 255, 0.15);
              text-align: center;
              padding: 10px;
            "
              className="fa-brands fa-facebook-f"
            ></i>
            <i
              style="
              margin-right: 2%;
              height: 40px;
              width: 40px;
              background-color: rgba(255, 255, 255, 0.15);
              text-align: center;
              padding: 10px;
            "
              className="fa-brands fa-twitter"
            ></i>
            <i
              style="
              margin-right: 2%;
              height: 40px;
              width: 40px;
              background-color: rgba(255, 255, 255, 0.15);
              text-align: center;
              padding: 10px;
            "
              className="fa-solid fa-earth-americas"
            ></i>
            <i
              style="
              margin-right: 2%;
              height: 40px;
              width: 40px;
              background-color: rgba(255, 255, 255, 0.15);
              text-align: center;
              padding: 10px;
            "
              className="fa-brands fa-square-behance"
            ></i> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
