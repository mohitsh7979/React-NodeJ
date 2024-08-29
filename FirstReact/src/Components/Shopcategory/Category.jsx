import './Category.css'

function Category() {
    return (
        <>
            <div>
                <div className="box1">
                    <div className="box1a">
                        <h2>
                            Shop Category
                        </h2>
                        <p style={{ color: 'gray', fontSize: 14 }}>
                            Very us move be blessed multiply night
                        </p>
                    </div>
                    <div className="box1b">
                        <span>Home</span>
                        <span>/</span>
                        <span>Shop</span>
                        <span>/</span>
                        <span>
                            Women Fashion
                        </span>
                    </div>
                </div>
                <div className="box2" id="x1" />
                <div className="container">
                    <div className="leftbox">
                        <div className="leftb1">
                            <div className="title">
                                <h2>
                                    Browse Category
                                </h2>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option1"
                                    name="option"
                                    defaultValue="option1" />
                                <label htmlFor="option1">
                                    Frozen Fish
                                </label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option2"
                                    name="option"
                                    defaultValue="option2" />
                                <label htmlFor="option2">
                                    Dried Fish
                                </label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option3"
                                    name="option"
                                    defaultValue="option3" />
                                <label htmlFor="option3">
                                    Fresh Fish
                                </label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option4"
                                    name="option"
                                    defaultValue="option4" />
                                <label htmlFor="option4">
                                    Meat Alternatives
                                </label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option5"
                                    name="option"
                                    defaultValue="option5" />
                                <label htmlFor="option5">
                                    Fresh Fish
                                </label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option5"
                                    name="option"
                                    defaultValue="option5" />
                                <label htmlFor="option5">
                                    Meat Alternatives
                                </label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option5"
                                    name="option"
                                    defaultValue="option5" />
                                <label htmlFor="option5">Meat</label>
                            </div>
                        </div>
                        <div className="leftb1">
                            <div className="title">
                                <h2>
                                    Product Brand
                                </h2>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option1"
                                    name="option"
                                    defaultValue="option1" />
                                <label htmlFor="option1">Apple</label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option2"
                                    name="option"
                                    defaultValue="option2" />
                                <label htmlFor="option2">Asus</label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option3"
                                    name="option"
                                    defaultValue="option3" />
                                <label htmlFor="option3">Gionee</label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option4"
                                    name="option"
                                    defaultValue="option4" />
                                <label htmlFor="option4">Micromax</label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option5"
                                    name="option"
                                    defaultValue="option5" />
                                <label htmlFor="option5">Samsung</label>
                            </div>
                        </div>
                        <div className="leftb1">
                            <div className="title">
                                <h2>
                                    Color Filter
                                </h2>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option1"
                                    name="option"
                                    defaultValue="option1" />
                                <label htmlFor="option1">Black</label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option2"
                                    name="option"
                                    defaultValue="option2" />
                                <label htmlFor="option2">
                                    Black Leather
                                </label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option3"
                                    name="option"
                                    defaultValue="option3" />
                                <label htmlFor="option3">
                                    Black with Red
                                </label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option4"
                                    name="option"
                                    defaultValue="option4" />
                                <label htmlFor="option4">Gold</label>
                            </div>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="option5"
                                    name="option"
                                    defaultValue="option5" />
                                <label htmlFor="option5">Spacegray</label>
                            </div>
                        </div>
                        <div className="leftb1">
                            <div className="title">
                                <h2>
                                    Price Filter
                                </h2>
                            </div>
                            <label htmlFor="rangeInput">price</label>
                            <input
                                type="range"
                                id="rangeInput"
                                min={0}
                                max={100}
                                defaultValue={50}
                                oninput="updateValueDisplay(this.value)" />
                            <div id="valueDisplay">50</div>
                        </div>
                    </div>
                    <div className="rightbox">
                        {/* <div className="box3">
                            <div className="default">
                                <select className="default1" id name>
                                    <option value=" Default Sorting">
                                        Default Sorting
                                    </option>
                                    <option value="Default Sorting 01">
                                        Defualt Sorting 01
                                    </option>
                                    <option value="Default Sorting 02">
                                        Default Sorting 02
                                    </option>
                                </select>
                            </div>
                            <div className="default">
                                <select className="sort12" id name>
                                    <option value=" sort 12">
                                        sort 12
                                    </option>
                                    <option value="sort 14">
                                        sort 14
                                    </option>
                                    <option value="sort 16">
                                        sort 16
                                    </option>
                                </select>
                            </div> */}
                           
                        <div className="box4">
                            <div className="b41">
                                <div className="inner1">
                                    <img
                                        src="https://themewagon.github.io/eiser/img/product/inspired-product/i1.jpg"
                                        alt />
                                    <div className="cart-info">
                                        <div className="circle">
                                            <i className="fa-regular fa-eye" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-regular fa-heart" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-solid fa-cart-shopping" />
                                        </div>
                                    </div>
                                </div>
                                <div className="inner2">
                                    <p>
                                        Latest Men's Sneaker
                                    </p>
                                </div>
                                <div className="inner3">
                                    <div className="i1">$25.00</div>
                                    <div className="i2">
                                        <del>$35.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="b41">
                                <div className="inner1">
                                    <img
                                        src="	https://themewagon.github.io/eiser/img/product/inspired-product/i2.jpg"
                                        alt />
                                    <div className="cart-info">
                                        <div className="circle">
                                            <i className="fa-regular fa-eye" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-regular fa-heart" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-solid fa-cart-shopping" />
                                        </div>
                                    </div>
                                </div>
                                <div className="inner2">
                                    <p>
                                        Latest Men's Sneaker
                                    </p>
                                </div>
                                <div className="inner3">
                                    <div className="i1">$25.00</div>
                                    <div className="i2">
                                        <del>$35.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="b41">
                                <div className="inner1">
                                    <img
                                        src="https://themewagon.github.io/eiser/img/product/inspired-product/i3.jpg"
                                        alt />
                                    <div className="cart-info">
                                        <div className="circle">
                                            <i className="fa-regular fa-eye" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-regular fa-heart" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-solid fa-cart-shopping" />
                                        </div>
                                    </div>
                                </div>
                                <div className="inner2">
                                    <p>
                                        Latest Men's Sneaker
                                    </p>
                                </div>
                                <div className="inner3">
                                    <div className="i1">$25.00</div>
                                    <div className="i2">
                                        <del>$35.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="b41">
                                <div className="inner1">
                                    <img
                                        src="https://themewagon.github.io/eiser/img/product/inspired-product/i6.jpg"
                                        alt />
                                    <div className="cart-info">
                                        <div className="circle">
                                            <i className="fa-regular fa-eye" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-regular fa-heart" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-solid fa-cart-shopping" />
                                        </div>
                                    </div>
                                </div>
                                <div className="inner2">
                                    <p>
                                        Latest Men's Sneaker
                                    </p>
                                </div>
                                <div className="inner3">
                                    <div className="i1">$25.00</div>
                                    <div className="i2">
                                        <del>$35.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="b41">
                                <div className="inner1">
                                    <img
                                        src="https://themewagon.github.io/eiser/img/product/inspired-product/i4.jpg"
                                        alt />
                                    <div className="cart-info">
                                        <div className="circle">
                                            <i className="fa-regular fa-eye" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-regular fa-heart" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-solid fa-cart-shopping" />
                                        </div>
                                    </div>
                                </div>
                                <div className="inner2">
                                    <p>
                                        Latest Men's Sneaker
                                    </p>
                                </div>
                                <div className="inner3">
                                    <div className="i1">$25.00</div>
                                    <div className="i2">
                                        <del>$35.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="b41">
                                <div className="inner1">
                                    <img
                                        src="	https://themewagon.github.io/eiser/img/product/inspired-product/i5.jpg"
                                        alt />
                                    <div className="cart-info">
                                        <div className="circle">
                                            <i className="fa-regular fa-eye" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-regular fa-heart" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-solid fa-cart-shopping" />
                                        </div>
                                    </div>
                                </div>
                                <div className="inner2">
                                    <p>
                                        Latest Men's Sneaker
                                    </p>
                                </div>
                                <div className="inner3">
                                    <div className="i1">$25.00</div>
                                    <div className="i2">
                                        <del>$35.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="b41">
                                <div className="inner1">
                                    <img
                                        src="https://themewagon.github.io/eiser/img/product/inspired-product/i7.jpg"
                                        alt />
                                    <div className="cart-info">
                                        <div className="circle">
                                            <i className="fa-regular fa-eye" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-regular fa-heart" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-solid fa-cart-shopping" />
                                        </div>
                                    </div>
                                </div>
                                <div className="inner2">
                                    <p>
                                        Latest Men's Sneaker
                                    </p>
                                </div>
                                <div className="inner3">
                                    <div className="i1">$25.00</div>
                                    <div className="i2">
                                        <del>$35.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="b41">
                                <div className="inner1">
                                    <img
                                        src="https://themewagon.github.io/eiser/img/product/inspired-product/i8.jpg"
                                        alt />
                                    <div className="cart-info">
                                        <div className="circle">
                                            <i className="fa-regular fa-eye" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-regular fa-heart" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-solid fa-cart-shopping" />
                                        </div>
                                    </div>
                                </div>
                                <div className="inner2">
                                    <p>
                                        Latest Men's Sneaker
                                    </p>
                                </div>
                                <div className="inner3">
                                    <div className="i1">$25.00</div>
                                    <div className="i2">
                                        <del>$35.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="b41">
                                <div className="inner1">
                                    <img
                                        src="https://themewagon.github.io/eiser/img/product/inspired-product/i2.jpg"
                                        alt />
                                    <div className="cart-info">
                                        <div className="circle">
                                            <i className="fa-regular fa-eye" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-regular fa-heart" />
                                        </div>
                                        <div className="circle">
                                            <i className="fa-solid fa-cart-shopping" />
                                        </div>
                                    </div>
                                </div>
                                <div className="inner2">
                                    <p>
                                        Latest Men's Sneaker
                                    </p>
                                </div>
                                <div className="inner3">
                                    <div className="i1">$25.00</div>
                                    <div className="i2">
                                        <del>$35.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    )

}

export default Category;