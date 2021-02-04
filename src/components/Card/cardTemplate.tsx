import React from 'react';
import { CardInterface } from './card';
import styles from './card.module.scss';

const CardTemplate = ({
  author,
  text,
  title,
  image,
}: CardInterface): JSX.Element => (
  <div className={styles['card']}>
    <img src={image} />
    <div className={styles['card-content']}>
      <h4 className={styles.title}>{title}</h4>
      <h5 className={styles.author}>{author}</h5>
      <p>{text}</p>
    </div>
  </div>
);

export default CardTemplate;
