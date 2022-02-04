import React from 'react';
import { Rating as StarsRating } from 'react-simple-star-rating';

const Rating = (ratingValue: any): JSX.Element => {
  const { rating } = ratingValue;

  return (
    <StarsRating
      ratingValue={rating * 10}
      size={25}
      readonly
      fillColor="orange"
      emptyColor="gray"
    />
  );
};

export { Rating };
