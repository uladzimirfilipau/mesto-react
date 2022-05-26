import React from "react";
import editAvatar from "../images/edit-avatar.png";
import Card from "./Card";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  userName,
  userDescription,
  userAvatar,
  cards,
  onCardClick,
}) {
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
          <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__title-container">
            <h1 className="profile__title">{userName}</h1>
            <button
              aria-label="Редактировать профиль"
              className="profile__button-edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
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
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
