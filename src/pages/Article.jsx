import React from "react";
import Breakfast from "../assets/Images/Breakfast.jpg"
import coffee from "../assets/Images/coffee.jpg"
import vegbreakfast from "../assets/Images/vegbreakfast.jpg"
import salad from "../assets/Images/salad.jpg"
import kimchi from "../assets/Images/kimchi.jpg"
import pasta from "../assets/Images/pasta.jpg"

const Article=()=>{
    return(
        <>
            <div id="article_title_section">
                <h1 id="article_heading">Article or post title</h1>
                <p id="article_paragraph_section"> Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading</p>
            </div>
            <div id="article_breafast_img">
                <img src={Breakfast} alt="Breakfast"  id="breakfast_pic"/>
            </div>
            <div id="article_breakfast_para_section">
                <p id="article_breakfast_paragraph">Start your day with a delicious and healthy breakfast, made with fresh ingredients and lots of love. <br/><br /> From crispy toast and fluffy pancakes to nutritious fruits and tasty morning meals, breakfast gives <br /><br />you the energy you need to begin your
                Enjoy a perfect combination of taste, freshness, and nutrition <br /><br />with every bite. Whether you prefer a light and healthy meal or a filling breakfast, there is something <br /><br />delicious for Make every morning special with a breakfast that brings happiness to your table.</p>
            </div>
            <div id="multi_img">
                <img src={vegbreakfast} alt="" className="multi_img_section"/>
                <img src={coffee} alt="" className="multi_img_section"/>
            </div>
            <div id="multi_img_para">
                <p>Enjoy a fresh and delicious start to your day with a healthy vegetable breakfast and a warm cup of coffee. <br /><br />Made for peaceful mornings, our breakfast brings together fresh ingredients, delightful flavors, and the perfect <br /><br /> balance of taste and nutrition. 
                Whether you love a light, refreshing breakfast or enjoy sipping hot coffee to start <br /><br />your morning, every moment is a chance to relax, recharge, and feel refreshed. Make your mornings special with simple, <br /><br />tasty food and your favorite cup of coffee.</p>
            </div>
            <h1 id="related_post_section">Related articles or posts</h1>
            <div id="article_img_cards">
                <div class="contains-inline">
                    <div class="card-group">
                        <div class="card">
                            <img src={salad} class="card-img-top" alt="salad"/>
                            <div class="card-body">
                            <h4 class="card-title">Salad</h4>
                            </div>
                        </div>
                        <div class="card">
                            <img src={kimchi} class="card-img-top" alt="kimchi"/>
                            <div class="card-body">
                            <h4 class="card-title">Kimchi</h4>
                        </div>
                    </div>
                        <div class="card">
                            <img src={pasta} class="card-img-top" alt="pasta"/>
                            <div class="card-body">
                            <h4 class="card-title">Pasta</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Article;