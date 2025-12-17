import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">BookWise</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/ministry">Ministry</Link>
      </div>
    </nav>
  );
}
