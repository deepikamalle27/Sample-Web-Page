import React from "react";
import { Routes,Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Article from "./Article";
import About from "./About";
import ProductDetailPage from "./ProductDetailPage";
import Shop from "./Shop";

const AppRoute=()=>{
    return(
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/Article' element={<Article/>}></Route>
            <Route path='/Shop' element={<Shop/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/ProductDetailPage' element={<ProductDetailPage/>}></Route>
        </Routes>
    )
}
export default AppRoute;