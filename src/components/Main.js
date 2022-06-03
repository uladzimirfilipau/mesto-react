import React from "react";
import editAvatar from "../images/edit-avatar.png";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  cards,
  onCardClick,
  onCardLike,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      {/* PROFILE */}
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={editAvatar}
            alt="Обновить аватар"
            className="profile__avatar-edit"
            onClick={onEditAvatar}
          />
          <img
            src={currentUser.avatar}
            alt="Аватар пользователя"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__title-container">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              aria-label="Редактировать профиль"
              className="profile__button-edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          aria-label="Добавить карточку"
          className="profile__button-add"
          onClick={onAddPlace}
        ></button>
      </section>
      {/* ELEMENTS */}
      <section className="elements" aria-label="Карточки">
        {/* ADD CARD CONTAINER */}
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardLike={onCardLike}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
