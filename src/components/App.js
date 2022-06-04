import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import Footer from "./Footer";
import api from "../utils/api.js";
import handleError from "../utils/utils.js";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  useEffect(() => {
    api
      .getInitialData()
      .then((data) => {
        const [profileData, cardsData] = data;
        setCurrentUser(profileData);
        setCards(cardsData);
      })
      .catch(handleError);
  }, []);

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(dataCard) {
    setSelectedCard(dataCard);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card._id && c));
    });
  }

  function handleUpdateUser(data) {
    api.editProfileInfo(data)
    .then((newData) => {
      setCurrentUser(newData)
      closeAllPopups();
    }).catch(handleError);
  }

  function closeAllPopups() {
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        {/* POPUP-EDIT-AVATAR-FORM */}
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

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

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
        ></PopupWithForm>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
