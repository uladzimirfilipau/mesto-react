import React from "react";

function PopupWithForm() {
  return (
    <>
      {/* <!-- POPUP-EDIT-AVATAR-FORM --> */}
      <section className="popup popup_edit-avatar">
        <form
          action="#"
          name="form-avataredit"
          className="popup__form popup__form_edit-avatar"
          noValidate
        >
          <button
            type="button"
            aria-label="Закрыть"
            className="popup__button-close"
          ></button>
          <div className="popup__content">
            <h2 className="popup__title">Обновить аватар</h2>
            <input
              type="url"
              name="avatar"
              id="avatar"
              placeholder="Ссылка на картинку"
              required
              className="popup__input popup__input_type_avatar"
            />
            <span className="popup__error avatar-error"></span>
            <button
              type="submit"
              name="button"
              className="popup__button-submit"
            >
              <span className="popup__button-text">Сохранить</span>
            </button>
          </div>
        </form>
      </section>
      {/* POPUP-EDIT-PROFILE-FORM */}
      <section className="popup popup_edit-profile">
        <form
          action="#"
          name="form-editinfo"
          className="popup__form popup__form_name"
          noValidate
        >
          <button
            type="button"
            aria-label="Закрыть"
            className="popup__button-close"
          ></button>
          <div className="popup__content">
            <h2 className="popup__title">Редактировать профиль</h2>
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
            <button
              type="submit"
              name="button"
              className="popup__button-submit"
            >
              <span className="popup__button-text">Сохранить</span>
            </button>
          </div>
        </form>
      </section>
      {/* <!-- POPUP-ADD-CARD-FORM --> */}
      <section className="popup popup_add-card">
        <form
          action="#"
          name="form-addcard"
          className="popup__form popup__form_card"
          noValidate
        >
          <button
            type="button"
            aria-label="Закрыть"
            className="popup__button-close"
          ></button>
          <div className="popup__content">
            <h2 className="popup__title">Новое место</h2>
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
            <button
              type="submit"
              name="button"
              className="popup__button-submit"
            >
              <span className="popup__button-text">Создать</span>
            </button>
          </div>
        </form>
      </section>
      {/* <!-- POPUP-DELETE-CARD --> */}
      <section className="popup popup_delete-card">
        <form
          action="#"
          name="form-deletecard"
          className="popup__form popup__form_delete-card"
          noValidate
        >
          <button
            type="button"
            aria-label="Закрыть"
            className="popup__button-close"
          ></button>
          <div className="popup__content">
            <h2 className="popup__title">Вы уверены?</h2>
            <button
              type="submit"
              name="button"
              className="popup__button-confirm"
            >
              <span className="popup__button-text">Да</span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default PopupWithForm;
