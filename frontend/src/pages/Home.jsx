import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Download,
  MessageSquare,
  Star,
  TrendingUp,
  BookOpen,
  Plus,
  X,
  ArrowRight,
} from "lucide-react";

const BOOKS = [
  { id: 1, title: "The Path of the Just", author: "Ramchal", file: "/downloads/path-of-the-just.pdf" },
  { id: 2, title: "Garden of Emuna", author: "Shalom Arush", file: "/downloads/garden-of-emuna.pdf" },
  { id: 3, title: "The Kuzari", author: "Yehuda HaLevi", file: "/downloads/kuzari.pdf" },
  { id: 4, title: "Duties of the Heart", author: "Rabbeinu Bachya", file: "/downloads/duties-of-the-heart.pdf" },
  { id: 5, title: "Tanya", author: "Rabbi Schneur Zalman", file: "/downloads/tanya.pdf" },
  { id: 6, title: "Mesillat Yesharim", author: "Ramchal", file: "/downloads/mesillat-yesharim.pdf" },
  { id: 7, title: "Chovot HaLevavot", author: "Rabbeinu Bachya", file: "/downloads/chovot.pdf" },
  { id: 8, title: "Pirkei Avot", author: "Sages of Israel", file: "/downloads/pirkei-avot.pdf" },
  { id: 9, title: "Sefer HaIkkarim", author: "Joseph Albo", file: "/downloads/ikkarim.pdf" },
  { id: 10, title: "Derech Hashem", author: "Ramchal", file: "/downloads/derech-hashem.pdf" },
  { id: 11, title: "Shaarei Teshuva", author: "Rabbeinu Yonah", file: "/downloads/shaarei-teshuva.pdf" },
  { id: 12, title: "Orchot Tzaddikim", author: "Anonymous", file: "/downloads/orchot-tzaddikim.pdf" },
  { id: 13, title: "Sefer HaChinuch", author: "Anonymous", file: "/downloads/chinuch.pdf" },
  { id: 14, title: "Emunah U’Bitachon", author: "Chazon Ish", file: "/downloads/emunah-bitachon.pdf" },
  { id: 15, title: "Yesod VeShoresh HaAvodah", author: "Rabbi Alexander Ziskind", file: "/downloads/yesod.pdf" },
  { id: 16, title: "Ohr HaChaim", author: "Rabbi Chaim Ben Attar", file: "/downloads/ohr-hachaim.pdf" },
  { id: 17, title: "Likutei Moharan", author: "Rabbi Nachman", file: "/downloads/likutei-moharan.pdf" },
  { id: 18, title: "Akeidat Yitzchak", author: "Rabbi Isaac Arama", file: "/downloads/akeidat.pdf" },
  { id: 19, title: "Sefer Yetzirah", author: "Attributed to Avraham", file: "/downloads/sefer-yetzirah.pdf" },
  { id: 20, title: "Zohar (Selections)", author: "Rabbi Shimon bar Yochai", file: "/downloads/zohar.pdf" },
];


export default function Home() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = BOOKS.filter(
    b =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  const featured = BOOKS[0];

  return (
    <div className="bg-[#FDFCFB] text-slate-900">

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-amber-50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-serif font-bold mb-6"
          >
            Living in <span className="text-accent italic">Torah</span>
          </motion.h1>
          <p className="text-xl text-slate-600 mb-10">
            A living library of faith, wisdom, and disciplined truth.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full pl-14 py-5 rounded-2xl shadow-xl text-lg focus:ring-2 focus:ring-accent outline-none"
              placeholder="Search books, authors, teachings..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>


{/* BOOK DOWNLOAD TABLE */}
<section className="max-w-7xl mx-auto px-6 pb-32">
  <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
    <BookOpen className="text-accent" />
    Books Ready for Download
  </h2>

  <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
    <table className="w-full text-left">
      <thead className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider">
        <tr>
          <th className="px-6 py-4">Book</th>
          <th className="px-6 py-4">Author</th>
          <th className="px-6 py-4 text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        {BOOKS.map((book, idx) => (
          <tr
            key={book.id}
            className={`border-t hover:bg-amber-50/40 transition ${
              idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
            }`}
          >
            <td className="px-6 py-4 font-semibold">
              <a
                href={`/books/${book.id}`}
                className="text-accent hover:underline"
              >
                {book.title}
              </a>
            </td>
            <td className="px-6 py-4 text-slate-600">
              {book.author}
            </td>
            <td className="px-6 py-4 text-right">
              <a
                href={book.file}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-accent"
                download
              >
                <Download size={16} />
                Download
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="text-sm text-slate-500 mt-4">
    Click a book title to read reviews, reflections, and community insights.
  </p>
</section>


      {/* REVIEW MODAL */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60"
            />
            <motion.div className="bg-white rounded-[2.5rem] p-10 z-10 max-w-lg w-full">
              <button onClick={() => setOpen(false)} className="absolute top-6 right-6">
                <X />
              </button>
              <h2 className="text-3xl font-bold mb-6">Share a Reflection</h2>
              <textarea
                rows={4}
                className="w-full p-4 bg-slate-50 rounded-2xl outline-none"
                placeholder="What wisdom did you gain?"
              />
              <button className="w-full mt-6 bg-accent text-white py-4 rounded-2xl font-bold">
                Publish Review
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
