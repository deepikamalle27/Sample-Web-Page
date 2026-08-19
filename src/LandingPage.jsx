import React from "react";
import orange_pic from "./assets/Images/orange_pic.jpg";

const LandingPage=()=>{
    return(
       <>
            <div id="heading_section">
                <h1 id="title_section">Landing page title</h1> <br />
                <p id="paragraph_section">Subheading that sets up context, shares more info about the wedsite, or <br />generally gets people psyced to keep scrolling</p>
                <div id="empty_div"></div>
                <button id="button_section">Button</button>
            </div>
            <div id="image_section">
                <img id="image" src={orange_pic} alt="orange_pic" />
            </div>
            <h1 id="section_heading">Section heading</h1>
            <div id="cards_section">
                <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="" className="" alt=""/>
                        </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
       </>
    )
}
export default LandingPage