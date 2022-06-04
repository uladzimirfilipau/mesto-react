import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatar = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }

  useEffect(() => {
    avatar.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name={"edit-avatar"}
      title={"Обновить аватар"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        name="avatar"
        id="avatar"
        placeholder="Ссылка на картинку"
        required
        className="popup__input popup__input_type_avatar"
        ref={avatar}
      />
      <span className="popup__error avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
