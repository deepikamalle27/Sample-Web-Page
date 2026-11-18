import { lazy , Suspense} from "react";
import { Route, Routes } from "react-router-dom";

// import Layout from "./Layout";
// import Article from "./pages/Article";
// import LandingPage from "./pages/LandingPage";
// import Shop from "./pages/Shop";
// import ProductDetailPage from "./pages/ProductDetailPage"

const Layout = lazy(()=> import ("./Layout"));
const LandingPage =lazy (()=> import("./pages/LandingPage"));
const  Article =lazy (()=> import("./pages/Article"));
const ProductDetailPage =lazy (()=> import("./pages/ProductDetailPage"));
const Shop =lazy (()=> import("./pages/Shop"));

function App(){
    return(
                <Suspense fallback={<h2>Loading....</h2>}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<LandingPage/>}></Route>
                        <Route path='Article' element={<Article/>}></Route>
                        <Route path='Shop' element={<Shop/>}></Route>
                        <Route path='ProductDetailPage' element={<ProductDetailPage/>}></Route>
                    </Route>
                </Routes>
                </Suspense>
    );
}
export default App;