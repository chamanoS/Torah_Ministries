import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Blogs from "./pages/Blogs";
import Ministry from "./pages/Ministry";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ministry" element={<Ministry />} />
      </Routes>
    </BrowserRouter>
  );
}
