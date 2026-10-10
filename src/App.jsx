import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Article from "./pages/Article";
import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import ProductDetailPage from "./pages/ProductDetailPage"

function App(){
    return(
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<LandingPage/>}></Route>
                    <Route path='/Article' element={<Article/>}></Route>
                    <Route path='/Shop' element={<Shop/>}></Route>
                    <Route path='/ProductDetailPage' element={<ProductDetailPage/>}></Route>
                </Route>
                
            </Routes>
    );
}
export default App;