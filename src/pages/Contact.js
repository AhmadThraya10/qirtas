function Contact() {
  return (
    <div className="page">
      <h1>Contact</h1>

      <div className="boxes">
        <div className="box">
          <h3>Address</h3>
          <p>Khirbet Rouha<br />Lebanon</p>
        </div>

        <div className="box">
          <h3>Phone</h3>
          <p><a href="tel:+9611234567">+961 1 234 567</a></p>
        </div>

        <div className="box">
          <h3>Email</h3>
          <p><a href="mailto:hello@qirtas.com">hello@qirtas.com</a></p>
        </div>
      </div>

      <h2>Opening hours</h2>
      <ul className="list">
        <li><span>Monday to Thursday</span><span>9:00am - 6:00pm</span></li>
        <li><span>Saturday</span><span>10:00am - 4:00pm</span></li>
        <li><span>Friday and Sunday</span><span>Closed</span></li>
      </ul>
    </div>
  );
}

export default Contact;
