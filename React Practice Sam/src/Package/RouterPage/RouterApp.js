import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import NoPage from "./Error";
import ContactUs from "./Contact";
import AboutUs from "./About";
import './RouterAppStyle.css'
function PageRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="aboutUs" element={<AboutUs />} />
                    <Route path="contact" element={<ContactUs />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default PageRoute;