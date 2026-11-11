import { Link, useParams } from 'react-router-dom';
import books from '../data/books';

function BookDetails() {
  // The id comes from the address, for example /books/3 gives id = "3".
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="page">
        <h1>Book not found</h1>
        <Link to="/books">Back to books</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/books">&larr; Back to books</Link>

      <div className="details">
        <img src={book.image} alt={book.title} />

        <div>
          <h1>{book.title}</h1>
          <p className="arabic">{book.arabic}</p>

          <ul className="list">
            <li><span>Author</span><span>{book.author}</span></li>
            <li><span>Category</span><span>{book.genre}</span></li>
            <li><span>Volumes</span><span>{book.volumes}</span></li>
            <li><span>Price</span><span className="price">${book.price}</span></li>
          </ul>

          <p>{book.description}</p>

          <Link to={`/order?book=${book.id}`} className="button">Order this book</Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
