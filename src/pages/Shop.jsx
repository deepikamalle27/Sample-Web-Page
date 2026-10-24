import React from "react";
import Background_clip from "../assets/Images/Background_clip.jpg"
import Pappy from "../assets/Images/Pappy.jpg"
import watermelon from "../assets/Images/watermelon.jpg"
import Apple from "../assets/Images/Apple.jpg"

const Shop=()=>{
    return(
        <>
            <div id="Bacground_img_shop_section">
                <img src={Background_clip} alt="Background_clip" id="background_clip_shop"/>
            </div>
            <div id="shop_cards">
                <div className="card" id="shop_card1">
                    <img src={Pappy} alt="Papaya" className="shop_card_img"/>
                    <div className="card-body">
                        <h4 className="card-title">Fresh Papaya</h4>
                        <p className="card-text">
                            Enjoy fresh and healthy papaya for breakfast.
                        </p>
                    </div>
                </div>

                <div className="card" id="shop_card2">
                    <img src={watermelon} alt="Watermelon" className="shop_card_img"/>
                    <div className="card-body">
                        <h4 className="card-title">Fresh Watermelon</h4>
                        <p className="card-text">
                            Enjoy juicy watermelon every morning.
                        </p>
                    </div>
                </div>
            </div>
            <h1 id="shop_second_heading">Section Heading</h1>
            {/* card price */}

            <div id="price_details_section">

                {/* Large card on the left */}
                <div className="featured_card" id="price_details_card1">
                    <img src={Pappy} className="featured_img" alt="Pear" />

                    <div className="card-body">
                        <h4 className="card-title">Featured product</h4>
                        <p className="card-text">Description of featured product</p>
                        <p className="card-price">$10.99</p>
                    </div>
                </div>

    {/* Two small cards on the right */}
                <div id="right_product_cards">
                <div className="small_product_card">
                    <img src={Apple} className="small_product_img" alt="Apple" />
                    <div className="card-body">
                        <h4 className="card-title">Product</h4>
                        <p className="card-text">Description of top product</p>
                        <p className="card-price">$10.99</p>
                    </div>
                    </div>
                    <div className="small_product_card">
                        <img src={watermelon} className="small_product_img" alt="Watermelon" />
                        <div className="card-body">
                            <h4 className="card-title">Product</h4>
                            <p className="card-text">Description of lower product</p>
                            <p className="card-price">$10.99</p>
                        </div>
                    </div>
                    </div>
                </div>

        </>
    )
}
export default Shop;