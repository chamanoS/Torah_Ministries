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

      {/* FEATURED BOOK */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-slate-900 text-white rounded-[3rem] p-12 grid md:grid-cols-2 gap-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-white/50">
              Featured Study
            </span>
            <h2 className="text-4xl font-serif font-bold mt-4 mb-4">
              {featured.title}
            </h2>
            <p className="text-white/70 mb-6">by {featured.author}</p>
            <button className="flex items-center gap-2 text-sm font-bold text-accent">
              Read Reflections <ArrowRight size={16} />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <BookOpen size={120} className="text-white/10" />
          </div>
        </div>
      </section>

      LIBRARY + COMMUNITY
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 pb-24">

        {/* BOOK GRID */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold flex gap-2 items-center">
              <BookOpen className="text-accent" /> Library
            </h2>
            <button
              onClick={() => setOpen(true)}
              className="flex gap-2 text-accent font-bold text-sm"
            >
              <Plus size={18} /> Add Review
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {filtered.map(book => (
              <div
                key={book.id}
                className="bg-white rounded-3xl p-6 border hover:shadow-xl transition"
              >
                <div className="flex justify-between mb-4">
                  <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">
                    {book.category}
                  </span>
                  <span className="flex gap-1 text-amber-500 font-bold">
                    <Star size={14} fill="currentColor" /> {book.rating}
                  </span>
                </div>

                <h3 className="font-bold text-xl">{book.title}</h3>
                <p className="text-sm text-slate-500 mb-6">{book.author}</p>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex gap-4 text-slate-400">
                    <Download className="hover:text-accent cursor-pointer" />
                    <span className="flex gap-1 items-center">
                      <MessageSquare size={18} /> {book.reviews}
                    </span>
                  </div>
                  <button className="text-xs font-bold bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-accent">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem]">
            <h3 className="font-bold flex gap-2 mb-6">
              <TrendingUp className="text-accent" /> Trending
            </h3>
            {["Weekly Parsha", "Faith in Modernity", "Attributes of Mercy"].map((t, i) => (
              <p key={i} className="text-white/70 mb-3 hover:text-accent cursor-pointer">
                {t}
              </p>
            ))}
          </div>
        </aside>
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
