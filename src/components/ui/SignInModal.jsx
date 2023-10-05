import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SignInModal = ({ setUserLoggedIn, userLoggedIn, setUser, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  function login(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setUser(data.user);
        setUserLoggedIn(true);
        document.body.style.overflow = "auto";
        setErrorMessage(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(true);
      });
    console.log(user);
  }

  const showModal = () => {
    setModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal(false);
    document.body.style.overflow = "auto";
  };

  const handleInputChange = (e) => {
    // Update the email and password state as the user types
    if (e.target.name === "user_email") {
      setEmail(e.target.value);
    } else if (e.target.name === "user_password") {
      setPassword(e.target.value);
    }
  };

  return (
    <>
      <button className="click login__btn" onClick={showModal}>
        Login
      </button>
      {modal ? (
        <div className="modal__overlay">
          <div className="modal">
            <div className="modal__content">
              <h1>Login</h1>
              <p className="modal__message">
                Log In To Gain Access To All The Bars We've Collected!
              </p>
              {errorMessage ? (
                <div className="login__error--message">
                  <p>Oops! There was an issue signing you in.</p>
                  <p>Please check your credentials and try again.</p>
                </div>
              ) : null}
              <form onSubmit={login} className="sign-up__form">
                <li>
                  <label className="form__item--label">Email</label>
                  <input
                    type="text"
                    required
                    name="user_email"
                    className="form__item--input"
                    value={email} // Set input value from state
                    onChange={handleInputChange} // Handle input changes
                  />
                </li>
                <li>
                  <label className="form__item--label">Password</label>
                  <input
                    type="password" // Use password type for passwords
                    required
                    name="user_password"
                    className="form__item--input"
                    value={password} // Set input value from state
                    onChange={handleInputChange} // Handle input changes
                  />
                </li>
                <button type="submit">Login!</button>
              </form>
            </div>
            <button onClick={closeModal} className="close__modal click">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SignInModal;
