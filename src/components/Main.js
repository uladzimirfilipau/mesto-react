import React from "react";
import "../index.css";
import editAvatar from "../images/edit-avatar.png";

function Main({
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick,
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
            onClick={handleEditAvatarClick}
          />
          <img src="#" alt="avatar" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__title-container">
            <h1 className="profile__title">VOVA F.</h1>
            <button
              aria-label="edit profile"
              className="profile__button-edit"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__subtitle">Web-developer</p>
        </div>
        <button
          aria-label="add card"
          className="profile__button-add"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      {/* ELEMENTS */}
      <section className="elements" aria-label="card">
        {/* ADD CARD CONTAINER */}
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;