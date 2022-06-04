import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function EditProfilePopup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      name={"edit-profile"}
      title={"Редактировать профиль"}
      isOpen={isOpen}
      onClose={onClose}
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
        value={name}
        onChange={handleNameChange}
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
        onChange={handleDescriptionChange}
        value={description}
      />
      <span className="popup__error about-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
