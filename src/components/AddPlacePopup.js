import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({}) {
  return (
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
  );
}

export default AddPlacePopup;
