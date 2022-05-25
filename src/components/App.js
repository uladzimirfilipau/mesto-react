import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import Footer from "./Footer";
import api from "../utils/api.js";
import handleError from "../utils/utils.js";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .getProfileData()
      .then((data) => {
        setUser(data);
      })
      .catch(handleError);
  }, []);

  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }
  return (
    <>
      <Header />
      <Main
        userName={user.name}
        userDescription={user.about}
        userAvatar={user.avatar}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      {/* POPUP-EDIT-AVATAR-FORM */}
      <PopupWithForm
        name={"edit-avatar"}
        title={"Обновить аватар"}
        buttonText={"Сохранить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          name="avatar"
          id="avatar"
          placeholder="Ссылка на картинку"
          required
          className="popup__input popup__input_type_avatar"
        />
        <span className="popup__error avatar-error"></span>
      </PopupWithForm>
      {/* POPUP-EDIT-PROFILE-FORM */}
      <PopupWithForm
        name={"edit-profile"}
        title={"Редактировать профиль"}
        buttonText={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
            type="text"
            name="name"
            id="name"
            placeholder="Введите имя"
            required
            minLength="2"
            maxLength="40"
            className="popup__input popup__input_type_name"
          />
          <span className="popup__error name-error"></span>
          <input
            type="text"
            name="about"
            id="about"
            placeholder="Введите профессию"
            required
            minLength="2"
            maxLength="200"
            className="popup__input popup__input_type_about"
          />
          <span className="popup__error about-error"></span>
      </PopupWithForm>
      {/* POPUP-ADD-CARD-FORM */}
      <PopupWithForm
        name={"add-card"}
        title={"Новое место"}
        buttonText={"Создать"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
            type="text"
            name="name"
            id="place-name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
            className="popup__input popup__input_type_title"
          />
          <span className="popup__error place-name-error"></span>
          <input
            type="url"
            name="link"
            id="link"
            placeholder="Ссылка на картинку"
            required
            className="popup__input popup__input_type_link"
          />
          <span className="popup__error link-error"></span>
      </PopupWithForm>
      {/* POPUP-DELETE-CARD */}
      <PopupWithForm
        name={"delete-card"}
        title={"Вы уверены?"}
        buttonText={"Да"}
        isOpen={false}
        onClose={closeAllPopups}
      >
      </PopupWithForm>
    </>
  );
}

export default App;
