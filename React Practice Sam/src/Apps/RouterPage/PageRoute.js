import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./P8Layout";
import Home from "./P8HomePage";
import NoPage from "./P8NoPage";
import ContactUs from "./P8ContactPage";
import AboutUs from "./P8AboutPage";
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