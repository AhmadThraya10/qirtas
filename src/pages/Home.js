import { Link } from 'react-router-dom';
import books from '../data/books';

function Home() {
  // Only the first four books are shown on the home page.
  const newArrivals = books.slice(0, 4);

  return (
    <div>
      <div className="hero">
        <h1>The books of the Sunnah, in one place.</h1>
        <p>An online bookstore for the great collections of hadith.</p>
        <Link to="/books" className="button">Browse books</Link>
      </div>

      <div className="page">
        <h2>What we offer</h2>

        <div className="boxes">
          <div className="box">
            <h3>The six books</h3>
            <p>Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa'i and Ibn Majah.</p>
          </div>

          <div className="box">
            <h3>Commentaries</h3>
            <p>Explanations of the hadith by well known scholars.</p>
          </div>

          <div className="box">
            <h3>Easy ordering</h3>
            <p>Pick a book, choose how many, and place your order.</p>
          </div>
        </div>

        <h2>New arrivals</h2>

        <div className="books">
          {newArrivals.map((book) => (
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
    </div>
  );
}

export default Home;
