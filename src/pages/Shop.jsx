import React from "react";
import Background_clip from "../assets/Images/Background_clip.webp";
import Pappy from "../assets/Images/Pappy.webp";
import watermelon from "../assets/Images/watermelon.webp";
import Apple from "../assets/Images/Apple.webp";

const Shop = () => {
    return (
        <>
            {/* Background Image */}
            <div id="Bacground_img_shop_section">
                <img
                    src={Background_clip}
                    alt="Fresh fruit background"
                    id="background_clip_shop"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                />
            </div>

            {/* Top Product Cards */}
            <div id="shop_cards">

                <div className="card" id="shop_card1">
                    <img
                        src={Pappy}
                        alt="Fresh Papaya"
                        className="shop_card_img"
                        loading="lazy"
                        decoding="async"
                    />

                    <div className="card-body">
                        <h4 className="card-title">Fresh Papaya</h4>
                        <p className="card-text">
                            Enjoy fresh and healthy papaya for breakfast.
                        </p>
                    </div>
                </div>

                <div className="card" id="shop_card2">
                    <img
                        src={watermelon}
                        alt="Fresh Watermelon"
                        className="shop_card_img"
                        loading="lazy"
                        decoding="async"
                    />

                    <div className="card-body">
                        <h4 className="card-title">Fresh Watermelon</h4>
                        <p className="card-text">
                            Enjoy juicy watermelon every morning.
                        </p>
                    </div>
                </div>

            </div>

            <h1 id="shop_second_heading">Section Heading</h1>

            {/* Product Price Section */}
            <div id="price_details_section">

                {/* Featured Product */}
                <div className="featured_card" id="price_details_card1">

                    <img
                        src={Pappy}
                        className="featured_img"
                        alt="Fresh Papaya"
                        loading="lazy"
                        decoding="async"
                    />

                    <div className="card-body">
                        <h4 className="card-title">Featured product</h4>
                        <p className="card-text">
                            Description of featured product
                        </p>
                        <p className="card-price">$10.99</p>
                    </div>

                </div>

                {/* Right Product Cards */}
                <div id="right_product_cards">

                    <div className="small_product_card">

                        <img
                            src={Apple}
                            className="small_product_img"
                            alt="Fresh Apple"
                            loading="lazy"
                            decoding="async"
                        />

                        <div className="card-body">
                            <h4 className="card-title">Product</h4>
                            <p className="card-text">
                                Description of top product
                            </p>
                            <p className="card-price">$10.99</p>
                        </div>

                    </div>

                    <div className="small_product_card">

                        <img
                            src={watermelon}
                            className="small_product_img"
                            alt="Fresh Watermelon"
                            loading="lazy"
                            decoding="async"
                        />

                        <div className="card-body">
                            <h4 className="card-title">Product</h4>
                            <p className="card-text">
                                Description of lower product
                            </p>
                            <p className="card-price">$10.99</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Shop;
