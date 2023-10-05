import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const RegisterModal = ({ setUserLoggedIn, userLoggedIn, setUser, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

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

  const register = (e) => {
    e.preventDefault();

    // Now you can use the email and password state to create a new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully registered
        const user = userCredential.user;
        setUser(user);
        setUserLoggedIn(true);
        setErrorMessage(false);
        document.body.style.overflow = "auto";
      })
      .catch((error) => {
        setErrorMessage(true);
        console.error("Registration error:", error.message);
      });
  };

  return (
    <>
      <button onClick={showModal} className="register__btn click">
        Get Started
      </button>

      {modal ? (
        <div className="modal__overlay">
          <div className="modal">
            <div className="modal__content">
              <h1>Sign Up</h1>
              <p className="modal__message">
                Sign Up To Gain Access To All The Bars We've Collected!
              </p>
              {errorMessage ? (
                <div className="login__error--message">
                  <p>Oops! It seems like this email is already registered.</p>
                  <p>
                    Please use a different email address or sign in if it's
                    yours.
                  </p>
                </div>
              ) : null}
              <form onSubmit={register} className="sign-up__form">
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
                <button type="submit">Sign Up!</button>
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

export default RegisterModal;
