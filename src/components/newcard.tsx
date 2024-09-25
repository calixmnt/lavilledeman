import React from 'react';

interface NewsCardProps {
  number: string;
  title: string;
  image?: string;
  description?: string;
}

const NewCard = ({ number, title, image, description } : NewsCardProps) => {
  return (
    <div className="card">
      {image && (
        <div className="card__image-container">
          <img src={image} alt={title} className="card__image" />
        </div>
      )}
      <div className="card__text-container">
        <h4 className="card__number">{number}</h4>
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__description">{description}</p>}
      </div>
    </div>
  );
};

export default NewCard;
