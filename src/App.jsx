import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Preloader from "./components/Preloader";
import Aboutpage from "./pages/Aboutpage";
import Faq from "./pages/Faqpage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/faq" element={<Faq/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;