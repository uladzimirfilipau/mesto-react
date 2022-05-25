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
}) {
  return (
    <main className="content">
      {/* PROFILE */}
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={editAvatar}
            alt="edit avatar"
            className="profile__avatar-edit"
            onClick={onEditAvatar}
          />
          <img src={userAvatar} alt="user avatar" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__title-container">
            <h1 className="profile__title">{userName}</h1>
            <button
              aria-label="edit profile"
              className="profile__button-edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          aria-label="add card"
          className="profile__button-add"
          onClick={onAddPlace}
        ></button>
      </section>
      {/* ELEMENTS */}
      <section className="elements" aria-label="cards">
        {/* ADD CARD CONTAINER */}
        <ul className="elements__list">
          {cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
