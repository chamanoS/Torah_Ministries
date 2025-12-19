import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`
        fixed top-0 z-50 w-full transition-all
        ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-slate-900 text-white p-2 rounded-xl">
            <BookOpen size={18} />
          </div>
          <span className="font-serif text-2xl font-bold tracking-wide">
            Living in <span className="text-accent italic">Torah</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {[
            { to: "/", label: "Home" },
            { to: "/books", label: "Library" },
            { to: "/blogs", label: "Teachings" },
            { to: "/ministry", label: "Ministry" },
          ].map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative transition ${
                  isActive
                    ? "text-accent"
                    : "text-slate-700 hover:text-accent"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* CTA */}
          <Link
            to="/books"
            className="bg-slate-900 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-accent transition"
          >
            Explore Library
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-900"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white border-t shadow-lg"
        >
          <div className="px-6 py-6 flex flex-col gap-5 font-semibold">
            <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/books">Library</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/blogs">Teachings</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/ministry">Ministry</NavLink>

            <Link
              onClick={() => setOpen(false)}
              to="/books"
              className="mt-4 bg-slate-900 text-white py-3 text-center rounded-xl font-bold"
            >
              Explore Library
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
