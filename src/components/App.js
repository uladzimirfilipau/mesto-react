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

  return (
    <>
      <Header />
      <Main
        userName={user.name}
        userDescription={user.about}
        userAvatar={user.avatar}
        
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
