import React from "react";
import Beetrate from "../assets/Images/Beetrate.jpg";
import Pappy from "../assets/Images/Pappy.jpg";
import watermelon from "../assets/Images/watermelon.jpg";
import Apple from "../assets/Images/Apple.jpg";
import orange_pic from "../assets/Images/orange_pic.jpg";

const ProductDetailPage = () => {
    return (
        <>
            {/* Product Details Section */}
            <div id="product_details_container">

                {/* Product Image */}
                <div id="product_details_img">
                    <img src={Beetrate} alt="Fresh beetroot"id="img_beetroot"/></div>
                {/* Product Information */}
                <div id="product_details_para">
                    <p id="para1" className="para_text">Fresh Beetroot</p>
                    <p id="para2" className="para_text">Fresh and Healthy</p>
                    <p id="para3" className="para_text">$10.99</p>
                    <p id="para4" className="para_text">Fresh beetroot packed with nutrients.A healthy and delicious addition to your meals.</p>
                    <button id="product_button" className="para_text">Add to cart</button>
                    <p id="para5" className="para_text">Fresh product. Store in a cool, dry place.</p>
                </div>
            </div>
            {/* Related Products Heading */}
            <h1 id="product_details_second_heading">Related Products</h1>
            {/* Related Products Cards */}
            <div id="product_details_cards">
                <div className="row row-cols-4 g-4">
                    {/* Card 1 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={Pappy} className="card-img-top" alt="Fresh Papaya"/>
                            <div className="card-body">
                                <h4 className="card-title">Fresh Papaya</h4>
                                <p className="card-textcd ">Fresh and healthy papaya.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={Apple} className="card-img-top" alt="Fresh Apple"/>
                            <div className="card-body">
                                <h4 className="card-title">Fresh Apple</h4>
                                <p className="card-text">Crisp and delicious apples.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={watermelon} className="card-img-top" alt="Fresh Watermelon"/>
                            <div className="card-body">
                                <h4 className="card-title">Fresh Watermelon</h4>
                                <p className="card-text">Juicy and refreshing watermelon.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={orange_pic} className="card-img-top" alt="Fresh Orange"/>
                            <div className="card-body">
                                <h4 className="card-title">Fresh Orange</h4>
                                <p className="card-text">Sweet and juicy oranges.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ProductDetailPage;