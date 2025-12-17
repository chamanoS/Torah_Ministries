import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Blogs from "./pages/Blogs.jsx";
import Ministry from "./pages/Ministry.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/ministry" element={<Ministry />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
