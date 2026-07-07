import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/Aboutpage";
import Faq from "../pages/Faqpage";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}