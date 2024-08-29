
import product_data from "./FD_product";

function Newproduct(){

    const newproduct =  product_data.filter((item)=>{
        return item.category == "new_product"
    })

    console.log(newproduct)

    return (
        <>
            <div className="new-product">
                    <h2>
                        NEW PRODUCTS
                    </h2>
                    <p>
                        Bring called seed first of third give itself now ment
                    </p>
                </div>
                <div className="collection">
                    <div className="collect">
                        <p>
                            COLLECTION OF 2019
                        </p>
                        <h1>
                            MENS SUMMER T-SHIRT
                        </h1>
                        <img
                            src="https://themewagon.github.io/eiser/img/product/new-product/new-product1.png"
                            alt />
                        <p>
                            <span>$120.70</span>
                        </p>
                        <button>
                            ADD TO CART
                        </button>
                    </div>
                    <div className="collect-1" id="collect1">
                       {newproduct.map((item2)=>(
                        <div className="pics1">
                        <div className="imga">
                            <img
                                src={item2.image}
                                alt />
                            <div className="hover_div">
                                <div className="icondiv">
                                    <i className="far fa-eye" />
                                </div>
                                <div className="icondiv">
                                    <i className="far fa-heart" />
                                </div>
                                <div className="icondiv">
                                    <i className="fa-solid fa-cart-shopping" />
                                </div>
                            </div>
                        </div>
                        <div className="con">
                            <p>
                                {item2.title}
                            </p>
                            <span>{item2.price}<del>$35.00</del></span>
                        </div>
                    </div>

                       ))} 
                        {/* <div className="pics2">
                            <div className="imga">
                                <img
                                    src="https://themewagon.github.io/eiser/img/product/new-product/n2.jpg"
                                    alt />
                                <div className="hover_div">
                                    <div className="icondiv">
                                        <i className="far fa-eye" />
                                    </div>
                                    <div className="icondiv">
                                        <i className="far fa-heart" />
                                    </div>
                                    <div className="icondiv">
                                        <i className="fa-solid fa-cart-shopping" />
                                    </div>
                                </div>
                            </div>
                            <div className="con">
                                <p>
                                    MEN'S DENIM JEANS
                                </p>
                                <span>$25.00<del>$35.00</del></span>
                            </div>
                        </div>
                        <div className="pics3">
                            <div className="imga">
                                <img
                                    src="https://themewagon.github.io/eiser/img/product/new-product/n3.jpg"
                                    alt />
                                <div className="hover_div">
                                    <div className="icondiv">
                                        <i className="far fa-eye" />
                                    </div>
                                    <div className="icondiv">
                                        <i className="far fa-heart" />
                                    </div>
                                    <div className="icondiv">
                                        <i className="fa-solid fa-cart-shopping" />
                                    </div>
                                </div>
                            </div>
                            <div className="con">
                                <p>
                                    QUARTZ HAND WATCH
                                </p>
                                <span>$25.00<del>$35.00</del></span>
                            </div>
                        </div>
                        <div className="pics4">
                            <div className="imga">
                                <img
                                    src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg"
                                    alt />
                                <div className="hover_div">
                                    <div className="icondiv">
                                        <i className="far fa-eye" />
                                    </div>
                                    <div className="icondiv">
                                        <i className="far fa-heart" />
                                    </div>
                                    <div className="icondiv">
                                        <i className="fa-solid fa-cart-shopping" />
                                    </div>
                                </div>
                            </div>
                            <div className="con">
                                <p>
                                    ADIDAS SPORT SHOE
                                </p>
                                <span>$25.00<del> $35.00</del></span>
                            </div>
                        </div> */}
                    </div>
                </div>
        </>
    )
}

export default Newproduct;