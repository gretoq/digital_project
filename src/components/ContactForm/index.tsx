import './ContactForm.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { CustomButton } from '../CustomButton';

interface Props {
  name: string;
  phone: string;
  email: string;
  products: string;
  message: string;
  privacyCheck: boolean;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onProductChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMessageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPrivacyChange: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const ContactForm: React.FC<Props> = ({
  name,
  phone,
  email,
  products,
  message,
  privacyCheck,
  onNameChange,
  onPhoneChange,
  onEmailChange,
  onProductChange,
  onMessageChange,
  onPrivacyChange,
  onSubmit,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit(event);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input-field"
        type="text"
        placeholder="Имя"
        value={name}
        onChange={onNameChange}
      />

      <input
        type="tel"
        className="form__input-field"
        placeholder="Номер телефона*"
        required
        value={phone}
        onChange={onPhoneChange}
      />

      <input
        type="email"
        className="form__input-field"
        placeholder="E-mail*"
        value={email}
        onChange={onEmailChange}
      />

      <input
        type="text"
        className="form__input-field"
        placeholder="Интересующий товар/услуга"
        value={products}
        onChange={onProductChange}
      />

      <textarea
        className="form__input-field form__input-field--message"
        placeholder="Сообщение*"
        value={message}
        onChange={onMessageChange}
      />

      <div className="form__privacy-policy">
        <input
          type="checkbox"
          className="form__privacy-checkbox"
          checked={!privacyCheck}
          onChange={onPrivacyChange}
        />
        <p className="form__privacy-description">
          Отправляя заявку Вы соглашаетесь с{' '}
          <Link style={{ color: 'blue' }} to={'/privacy-policy'}>
            политикой конфиденциальности
          </Link>
        </p>
      </div>

      <div className="form__button">
        <CustomButton
          text="отправить"
          isWithoutBorder
          dark
          disabled={privacyCheck}
          onClick={() => handleSubmit}
        />
      </div>
    </form>
  );
};
