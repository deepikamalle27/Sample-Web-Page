import React from "react";
import orange_pic from "../assets/Images/orange_pic.webp";
import wildfruite from "../assets/Images/wildfruite.webp";
import fruite from "../assets/Images/fruite.webp";
import Dryfruite from "../assets/Images/Dryfruite.webp";

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
            <h1 id="section_heading">Fruits</h1>
            <div id="card_section">
                <div className="cards_lists">
                <div className="card-group">
                <div className="card">
                    <img src={fruite} className="card-img-top" alt="..." id="fruite"/>
                    <div className="card-body">
                    <h4 className="card-title">Fresh Fruits</h4>
                    <p className="card-text">Fresh fruits are rich in vitamins, minerals, and antioxidants that keep your body healthy and energized.</p>
                    <p className="card-text"><small className="fg-2">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={Dryfruite} className="card-img-top" alt="..." id="dry_fruite"/>
                    <div className="card-body">
                    <h4 className="card-title">Dry Fruits</h4>
                    <p className="card-text">Dry fruits are rich in nutrients, fiber, and healthy fats that support overall health.</p>
                    <p className="card-text"><small className="fg-2">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={wildfruite} className="card-img-top" alt="..." id="wild_fruite"/>
                    <div className="card-body">
                        <h4 className="card-title">Wild Fruits</h4>
                        <p className="card-text">Wild fruits are packed with natural vitamins and antioxidants that help nourish and protect your body.</p>
                        <p className="card-text"><small className="fg-2">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
       </>
    )
}
export default LandingPage;