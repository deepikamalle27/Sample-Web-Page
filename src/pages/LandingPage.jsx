import React from "react";
import orange_pic from "../assets/Images/orange_pic.jpg";
import wildfruite from "../assets/Images/wildfruite.jpg";
import fruite from "../assets/Images/fruite.jpg";
import Dryfruite from "../assets/Images/Dryfruite.jpg";

const LandingPage=()=>{
    return(
       <>
            <div id="heading_section">
                <h1 id="title_section">Home Page </h1> <br />
                <p id="paragraph_section">Subheading that sets up context, shares more info about the wedsite, or <br />generally gets people psyced to keep scrolling</p>
                <div id="empty_div"></div>
                <button id="button_section">Button</button>
            </div>
            <div id="image_section">
                <img id="image" src={orange_pic} alt="orange_pic" />
            </div>
            <div id="card_section">
                <div class="cards_lists">
                <div class="card-group">
                <div class="card">
                    <img src={fruite} class="card-img-top" alt="..." id="fruite"/>
                    <div class="card-body">
                    <h4 class="card-title">Fresh Fruits</h4>
                    <p class="card-text">Fresh fruits are rich in vitamins, minerals, and antioxidants that keep your body healthy and energized.</p>
                    <p class="card-text"><small class="fg-2">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <h1 id="section_heading">Fruits</h1>
                <div class="card">
                    <img src={Dryfruite} class="card-img-top" alt="..." id="dry_fruite"/>
                    <div class="card-body">
                    <h4 class="card-title">Dry Fruits</h4>
                    <p class="card-text">Dry fruits are rich in nutrients, fiber, and healthy fats that support overall health.</p>
                    <p class="card-text"><small class="fg-2">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={wildfruite} class="card-img-top" alt="..." id="wild_fruite"/>
                    <div class="card-body">
                        <h4 class="card-title">Wild Fruits</h4>
                        <p class="card-text">Wild fruits are packed with natural vitamins and antioxidants that help nourish and protect your body.</p>
                        <p class="card-text"><small class="fg-2">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
       </>
    )
}
export default LandingPage;