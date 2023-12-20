import React, { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendClick = () => {
    console.log('Email sent:', email);
    // Дополнительный код для отправки данных, если необходимо
  };

  return (
    <section id="contacts">
      <div className="contact-wrapper">
        <div className="inner">
          <div className="contact-text">
            <h1>Contact us</h1>
            <p>Convenient, decent, safe</p>
          </div>
          <div className="contact-form">
            <div className="contact-container">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="E-mail"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-button" onClick={handleSendClick}>
                Send
              </div>
            </div>
            <p style={{ textAlign: 'center' }}>Your data is protected!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;