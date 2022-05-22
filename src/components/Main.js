import React from "react";
import "../index.css";

function Main() {
  return (
    <main className="content">
      {/* PROFILE */}
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src="<%=require('/src/images/edit-avatar.png')%>"
            alt="edit avatar"
            className="profile__avatar-edit"
          />
          <img src="#" alt="avatar" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__title-container">
            <h1 className="profile__title">VOVA F.</h1>
            <button
              aria-label="edit profile"
              className="profile__button-edit"
            ></button>
          </div>
          <p className="profile__subtitle">Web-developer</p>
        </div>
        <button
          aria-label="add card"
          className="profile__button-add"
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
