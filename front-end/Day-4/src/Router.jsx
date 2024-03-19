import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./pages/navigation";
import Product from "./pages/Product/Product";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Notfound from "./pages/Contact";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import MyEventsPage from "./pages/MyEventsPage";
import EnquiryForm from "./pages/EnquiryForm";
import AttendanceDashboard from "./pages/Admin";
import ManageThemesPage from "./pages/ManageThemesPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const Router = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      {!isAdmin && <Navigation />}
      <Routes>
        {!isAdmin && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/pro" element={<Product />} />
            <Route path="/login" element={<Home />} />
            <Route path="/register" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Policy" element={<PrivacyPolicy />} />
            <Route path="/T&C" element={<TermsAndConditions />} />
            <Route path="/myevents" element={<MyEventsPage />} />
            <Route path="/enquiryform" element={<EnquiryForm />} />
            <Route path="/product" element={<ProductDetails />} />
          </>
        )}

        {isAdmin && (
          <>
            <Route path="/admin" element={<AttendanceDashboard />} />
            <Route path="/theme" element={<ManageThemesPage />} />
          </>
        )}

        <Route path="*" element={<Notfound />} />
      </Routes>
      {!isAdmin && <Footer />}
    </div>
  );
};

export default Router;
