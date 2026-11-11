import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import books from '../data/books';

function Order() {
  // If we came from an "Order now" button, the address has ?book=id,
  // so that book is already chosen in the dropdown.
  const [searchParams] = useSearchParams();

  // One piece of state for each input, plus one for the list of orders.
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [bookId, setBookId] = useState(searchParams.get('book') || '');
  const [quantity, setQuantity] = useState('1');
  const [error, setError] = useState('');
  const [orders, setOrders] = useState([]);

  const addOrder = () => {
    if (name === '' || phone === '' || bookId === '') {
      setError('Please fill in your name, phone number and choose a book.');
      return;
    }

    const book = books.find((b) => b.id === Number(bookId));

    const newOrder = {
      id: Date.now(),
      name: name,
      phone: phone,
      title: book.title,
      quantity: quantity,
      total: book.price * quantity,
    };

    // Build a NEW array instead of pushing into the old one, so that React
    // sees the change and redraws the table.
    setOrders([...orders, newOrder]);

    setName('');
    setPhone('');
    setBookId('');
    setQuantity('1');
    setError('');
  };

  const cancelOrder = (id) => {
    // Keep every order except the one that was clicked.
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="page">
      <h1>Order</h1>
      <p>Orders are delivered within three to five working days.</p>

      <div className="form">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Phone</label>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Book</label>
        <select value={bookId} onChange={(e) => setBookId(e.target.value)}>
          <option value="">Choose a book</option>
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title} (${book.price})
            </option>
          ))}
        </select>

        <label>Quantity</label>
        <input
          type="number"
          min="1"
          max="10"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        {/* Only shows when error is not empty. */}
        {error && <p className="error">{error}</p>}

        <button className="button" onClick={addOrder}>Place order</button>
      </div>

      <h2>Your orders</h2>

      {/* Show a message when the list is empty, otherwise show the table. */}
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Book</th>
              <th>Qty</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.title}</td>
                <td>{order.quantity}</td>
                <td>${order.total}</td>
                <td>
                  <button onClick={() => cancelOrder(order.id)}>
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Order;
