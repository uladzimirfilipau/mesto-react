import React from "react";
import deleteButton from "../images/button-delete.svg";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__item">
      <figure className="elements__figure">
        <img
          src={deleteButton}
          alt="Удалить карточку"
          className="elements__button-delete"
        />
        <img
          src={card.link}
          alt={card.name}
          className="elements__item-image"
          onClick={handleCardClick}
        />
        <figcaption className="elements__figure-caption">
          <h2 className="elements__item-title">{card.name}</h2>
          <div className="elements__like-container">
            <button className="elements__item-like"></button>
            <p className="elements__like-number">{card.likes.length}</p>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}

export default Card;
