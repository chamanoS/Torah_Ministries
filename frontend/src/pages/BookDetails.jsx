import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif font-bold mb-4">
        Book Title #{id}
      </h1>

      <p className="text-slate-600 mb-10">
        Author name here
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Community Reviews</h2>
        <p className="text-slate-500">
          Reviews and comments will live here.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
        <textarea
          className="w-full p-4 rounded-xl bg-slate-50 outline-none"
          rows={4}
          placeholder="Share your insight..."
        />
        <button className="mt-4 bg-accent text-white px-6 py-3 rounded-xl font-bold">
          Post Comment
        </button>
      </section>
    </div>
  );
}
