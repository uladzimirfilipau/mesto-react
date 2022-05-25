import React from "react";
import deleteButton from "../images/Trash.svg";

function Card({ card }) {
  return (
    //<template className="elements__template">
      <li className="elements__item">
        <figure className="elements__figure">
          <img
            src={deleteButton}
            alt="Удалить карточку"
            className="elements__button-delete"
          />
          <img src={card.link} alt={card.name} className="elements__item-image" />
          <figcaption className="elements__figure-caption">
            <h2 className="elements__item-title">{card.name}</h2>
            <div className="elements__like-container">
              <button className="elements__item-like"></button>
              <p className="elements__like-number">{card.likes.length}</p>
            </div>
          </figcaption>
        </figure>
      </li>
    //</template>
  );
}

export default Card;
