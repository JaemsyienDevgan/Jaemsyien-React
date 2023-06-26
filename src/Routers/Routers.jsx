import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Menu from "../Menu";
import AboutUs from "../AboutUs";
import Order from "../Order";

export default function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/Order" element={<Order/>} />
            </Routes>
        </BrowserRouter>
    )
}