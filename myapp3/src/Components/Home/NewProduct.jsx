import React from "react";

function NewProduct() {
  return (
    <>
      <div className="new-product">
        <h2>NEW PRODUCTS</h2>
        <p>Bring called seed first of third give itself now ment</p>
      </div>
      <div className="collection">
        <div className="collect">
          <p>COLLECTION OF 2019</p>
          <h1>MEN’S SUMMER T-SHIRT</h1>
          <img
            src="https://themewagon.github.io/eiser/img/product/new-product/new-product1.png"
            alt=""
          />
          <p>
            <span>$120.70</span>
          </p>
          <button>ADD TO CART</button>
        </div>
        <div className="collect-1" id="collect1">
          <div className="pics1">
            <div className="imga">
              <img
                src="https://themewagon.github.io/eiser/img/product/new-product/n1.jpg"
                alt=""
              />
            </div>
            <div className="con">
              <p>NIKE LATEST SNEAKER</p>
              <span>
                $25.00<del>$35.00</del>
              </span>
            </div>
          </div>
          <div className="pics2">
            <div className="imga">
              <img
                src="https://themewagon.github.io/eiser/img/product/new-product/n2.jpg"
                alt=""
              />
            </div>
            <div className="con">
              <p>MEN'S DENIM JEANS</p>
              <span>
                $25.00<del>$35.00</del>
              </span>
            </div>
          </div>
          <div className="pics3">
            <div className="imga">
              <img
                src="https://themewagon.github.io/eiser/img/product/new-product/n3.jpg"
                alt=""
              />
            </div>
            <div className="con">
              <p>QUARTZ HAND WATCH</p>
              <span>
                $25.00<del>$35.00</del>
              </span>
            </div>
          </div>
          <div className="pics4">
            <div className="imga">
              <img
                src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg"
                alt=""
              />
            </div>
            <div className="con">
              <p>ADIDAS SPORT SHOE</p>
              <span>
                $25.00<del> $35.00</del>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProduct;
