import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutProvider from "../layout/layout";
import Headlines from "../pages/headlines/headlines";
import Home from "../pages/home/home";

export const WebRoute = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayoutProvider content={<Home />} />} />      
            <Route path='/headlines' element={<LayoutProvider content={<Headlines />} />} />    
        </Routes>
    </BrowserRouter>
    )
}