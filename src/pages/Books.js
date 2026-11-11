import { useState } from 'react';
import { Link } from 'react-router-dom';
import books, { genres } from '../data/books';

function Books() {
  const [search, setSearch] = useState('');

  // Keep only the books whose title contains what was typed.
  const results = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Books</h1>
      <p>Click on a book to see more details. Prices are in US dollars.</p>

      <input
        className="search"
        type="text"
        placeholder="Search for a book"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {results.length === 0 && <p>No books found.</p>}

      {/* Outer map draws each category, inner map draws its books. */}
      {genres.map((genre) => {
        const booksInGenre = results.filter((book) => book.genre === genre);

        if (booksInGenre.length === 0) {
          return null;
        }

        return (
          <div key={genre}>
            <h2>{genre}</h2>

            <div className="books">
              {booksInGenre.map((book) => (
                <div className="book" key={book.id}>
                  <Link to={`/books/${book.id}`}>
                    <img src={book.image} alt={book.title} />
                    <h3>{book.title}</h3>
                  </Link>
                  <p className="price">${book.price}</p>
                  <Link to={`/order?book=${book.id}`} className="button">Order now</Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Books;
