import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
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
  );
}

export default EditProfilePopup;
