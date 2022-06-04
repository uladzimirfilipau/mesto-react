import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({}) {
  return (
    <PopupWithForm
      name={"edit-avatar"}
      title={"Обновить аватар"}
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
  );
}

export default EditAvatarPopup;
