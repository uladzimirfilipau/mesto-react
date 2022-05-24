import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Main
        handleEditAvatarClick={() =>
          document
            .querySelector(".popup_edit-avatar")
            .classList.add("popup_opened")
        }
        handleEditProfileClick={() =>
          document
            .querySelector(".popup_edit-profile")
            .classList.add("popup_opened")
        }
        handleAddPlaceClick={() =>
          document
            .querySelector(".popup_add-card")
            .classList.add("popup_opened")
        }
      />
      <PopupWithForm />
      <Footer />
    </>
  );
}

export default App;
