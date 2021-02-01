import React from 'react';
import { CardInterface } from './card';

const CardTemplate = ({
  author,
  text,
  title,
  image,
}: CardInterface): JSX.Element => (
  <div>
    <img src={image} />
    <div>
      <h4>{title}</h4>
      <h5>{author}</h5>
      <p>{text}</p>
    </div>
  </div>
);

export default CardTemplate;
