import './ContactUs.scss';

import React, { useState } from 'react';

import ContactForm from '../ContactForm';

export const ContactUs = () => {
  const [privacyCheck, setPrivacyCheck] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [products, setProducts] = useState('');
  const [message, setMessage] = useState('');

  // If the validate logic is the same we can avoid repetitive code
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;

    setName(newName);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = event.target.value;

    setPhone(newPhone);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;

    setEmail(newEmail);
  };

  const handleProductsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newProducts = event.target.value;

    setProducts(newProducts);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newMessage = event.target.value;

    setMessage(newMessage);
  };

  const handlePrivacyCheck = () => {
    setPrivacyCheck((prevCheck) => !prevCheck);
  };

  const handleClearForm = () => {
    setPrivacyCheck(true);
    setName('');
    setPhone('');
    setEmail('');
    setProducts('');
    setMessage('');
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Checking and prepare data to send it to server and then sending

    const data = new FormData();

    data.append('name', name);
    data.append('phone', phone);
    data.append('email', email);
    data.append('products', products);
    data.append('message', message);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/api/submit', true);
    xhr.send(data);

    // After sending clear the form fields
    handleClearForm();
  };

  return (
    <div className="contact-us">
      <h3 className="contact-us__title">Связаться с нами</h3>

      <div className="contact-us__container">
        <div className="contact-us__form">
          <ContactForm
            name={name}
            phone={phone}
            email={email}
            products={products}
            message={message}
            privacyCheck={privacyCheck}
            onNameChange={handleNameChange}
            onPhoneChange={handlePhoneChange}
            onEmailChange={handleEmailChange}
            onProductChange={handleProductsChange}
            onMessageChange={handleMessageChange}
            onPrivacyChange={handlePrivacyCheck}
            onSubmit={handleSubmitForm}
          />
        </div>

        <img
          src="/images/contact-us/man_talk_phone.svg"
          alt="man talk by phone"
          className="contact-us__image"
        />
      </div>
    </div>
  );
};
