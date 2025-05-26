import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/services.module.css';

const Services = ({ title, time, cost, description, moreinfo }) => {
  const [isVisible, setIsVisible] = useState(false); // Состояние для управления видимостью

  const handleToggleDescription = () => {
    setIsVisible(prevVisible => !prevVisible); // Переключаем видимость
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {isVisible && <div className={styles.description}>{description}</div>}
      <div className={styles.info}>
        <p className={styles.text}><span>Продолжительность: </span>{time}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.text}><span>Стоимость: </span>{cost}</p>
        {isVisible && moreinfo && <div className={styles.moreinfo}>{moreinfo}</div>}
      </div>
      <button onClick={handleToggleDescription} className={styles.ref}>
        {isVisible ? 'Скрыть' : 'Подробнее'}
      </button>
    </div>
  );
};

// Определение типов пропсов для компонента
Services.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  moreinfo: PropTypes.string
};

export default Services;