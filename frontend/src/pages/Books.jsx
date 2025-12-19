export default function Books() {
  const books = [
    {
      id: 1,
      title: "The Wisdom Path",
      author: "John Doe",
      cover: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Faith & Knowledge",
      author: "Jane Smith",
      cover: "https://via.placeholder.com/150",
      rating: 4.7,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Books</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img src={book.cover} alt={book.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{book.title}</h2>
              <p className="text-sm text-muted">{book.author}</p>
              <p className="mt-2">⭐ {book.rating}</p>
              <a
                href="#"
                className="mt-4 inline-block px-4 py-2 bg-accent text-white rounded"
              >
                Buy / Affiliate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
