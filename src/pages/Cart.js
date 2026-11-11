import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Cart = ({ cart, changeQty, removeFromCart, clearCart }) => {
  const [form, setForm] = useState({ name: '', email: '', address: '' });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(form).every((v) => v.trim() !== '');

    if (!allFilled) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Thank you ${form.name}, your order has been placed!`);
    clearCart();
    setForm({ name: '', email: '', address: '' });
  };

  if (cart.length === 0) {
    return (
      <div>
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/books">Browse Books</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="cartItem">
          <img src={item.image} alt={item.title} />
          <div className="cartInfo">
            <h3>{item.title}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <div>
            <button type="button" onClick={() => changeQty(item.id, -1)}>-</button>
            <span className="qty">{item.qty}</span>
            <button type="button" onClick={() => changeQty(item.id, 1)}>+</button>
          </div>
          <button type="button" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} noValidate className="form">
        <label>Full Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />

        <label>Address</label>
        <input name="address" value={form.address} onChange={handleChange} required />

        <button type="submit">Place Order</button>
      </form>
    </div>
  )
}

export default Cart
