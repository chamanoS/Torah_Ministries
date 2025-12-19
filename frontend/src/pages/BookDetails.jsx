import { useParams } from "react-router-dom";
import { BOOKS } from "../data/books";
import { Star, Download, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function BookDetails() {
  const { id } = useParams();
  const book = BOOKS.find(b => b.id === id);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  if (!book) {
    return (
      <div className="pt-32 text-center text-slate-500">
        Book not found.
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 px-6 max-w-4xl mx-auto">

      {/* BOOK HEADER */}
      <section className="mb-16">
        <span className="text-xs uppercase tracking-widest text-accent">
          {book.category}
        </span>

        <h1 className="text-5xl font-serif font-bold mt-4">
          {book.title}
        </h1>

        <p className="text-slate-500 mt-2 mb-6">
          by {book.author}
        </p>

        <div className="flex items-center gap-6 mb-8">
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star size={16} fill="currentColor" />
            {book.rating}
            <span className="text-slate-400 text-sm ml-2">
              ({book.reviewsCount} reviews)
            </span>
          </div>

          <a
            href={book.downloadUrl}
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-accent transition"
          >
            <Download size={16} /> Download Book
          </a>
        </div>

        <p className="text-lg text-slate-700 leading-relaxed">
          {book.description}
        </p>
      </section>

      {/* REVIEWS */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <MessageSquare className="text-accent" /> Community Reflections
        </h2>

        <div className="space-y-6">
          {book.reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-bold">{r.user}</span>
                <span className="text-xs text-slate-400">{r.date}</span>
              </div>

              <div className="flex gap-1 text-amber-500 mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-700">{r.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADD REVIEW */}
      <section className="bg-slate-50 rounded-3xl p-10">
        <h3 className="text-2xl font-bold mb-6">
          Share Your Reflection
        </h3>

        {/* Rating */}
        <div className="flex gap-2 mb-6 text-amber-400">
          {[1, 2, 3, 4, 5].map(n => (
            <Star
              key={n}
              size={28}
              onClick={() => setRating(n)}
              className={`cursor-pointer ${
                rating >= n ? "fill-current" : ""
              }`}
            />
          ))}
        </div>

        {/* Comment */}
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          rows={4}
          placeholder="What did this book awaken in you?"
          className="w-full p-4 rounded-2xl bg-white outline-none focus:ring-2 focus:ring-accent mb-6"
        />

        <button
          className="bg-accent text-white px-8 py-4 rounded-2xl font-bold hover:scale-[1.02] transition"
        >
          Submit Review
        </button>
      </section>
    </div>
  );
}
