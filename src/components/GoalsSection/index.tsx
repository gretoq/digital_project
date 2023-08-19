import './GoalsSection.scss';

import React from 'react';

export const GoalsSection = () => {
  return (
    <section className="goals-section">
      <h3 className="goals-section__title">Основые задачи</h3>

      <div className="goals-section__container grid">
        <div className="goals-section__item grid__item--desktop-1-5">
          <h3 className="goals-section__item-title">1</h3>

          <p className="goals-section__item-description goals-section__item-description--first">
            Создание комфортных условий и повышение качества обслуживания
            клиентов
          </p>
        </div>

        <div className="goals-section__item grid__item--desktop-7-12">
          <h3 className="goals-section__item-title">2</h3>

          <p className="goals-section__item-description">
            Постоянно совершенствовать качество предоставляемых услуг путем
            обучения персонала, закупки нового оборудования и усиленной рекламы
            на рынке
          </p>
        </div>
      </div>
    </section>
  );
};
