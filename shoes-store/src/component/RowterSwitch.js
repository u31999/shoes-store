import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/contactPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

const RowterSwitch = () => {
    return(
        
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        
    )
}

export default RowterSwitch;