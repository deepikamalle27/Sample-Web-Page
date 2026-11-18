import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
            <div style={{width:"1535px",height:"100px",backgroundColor:"lavender"}}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="navbar-brand" href="#">Sample Web Page</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div id="navbar-nav">
                        <Link to="/" className="nav-link " aria-current="page" >Home Page</Link>
                        <Link to="/Article" className="nav-link " aria-current="page" >Article</Link>
                        <Link to="/Shop" className="nav-link" >Shop</Link>
                        <Link to="/ProductDetailPage" className="nav-link"> Product Details Page</Link>
                    </div>
                    </div>
                </div>
                </nav>
            </div>
        </>
    )
}
export default Header;