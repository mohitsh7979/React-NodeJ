import { Link } from "react-router-dom";
import product_data from "./FD_product";

function Featuredproduct(){

    const fproduct =  product_data.filter((item)=>{
        return item.category == "featured_product"
    })

    console.log(fproduct)

    return (
        <>
          <div className="fetured-product">
                    <h2>
                        FEATURED PRODUCT
                    </h2>
                    <p>
                        Bring called seed first of third give itself now ment
                    </p>
                    
                        <div className="image2">
                        {fproduct.map((item)=>(
                        <div className="product-image">
                            <div className="product-image1">
                                <img
                                    src={item.image}
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
                            <div className="content">
                                <Link to={`/Detail/${item.id}/`}>
                                    {item.title}
                                </Link>
                                <br />
                                <h6>{item.price}<span>
                                    <del>$35.00</del>
                                </span></h6>
                            </div>
                        </div>
                         ))}
                    </div>
                   
                </div>
                <div className="mencollection">
                    <div className="typeing">
                        <p>
                            ALL MEN'S COLLECTION
                        </p>
                        <h1>
                            50% OFF
                        </h1>
                        <input
                            type="submit"
                            defaultValue="DISCOVER NOW"
                            className="col" />
                        <p id="time">
                            Limited Time Offer
                        </p>
                    </div>
                </div>
        </>
    )
}

export default Featuredproduct;