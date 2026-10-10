import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
            <div style={{width:"1535px",height:"100px",backgroundColor:"lavender"}}>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <h1 class="navbar-brand" href="#">Sample Web Page</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div id="navbar-nav">
                        <Link to="/" class="nav-link " aria-current="page" >Home Page</Link>
                        <Link to="/Article" class="nav-link " aria-current="page" >Article</Link>
                        <Link to="/Shop" class="nav-link" >Shop</Link>
                        <Link to="/ProductDetailPage" class="nav-link"> Product Details Page</Link>
                    </div>
                    </div>
                </div>
                </nav>
            </div>
        </>
    )
}
export default Header;