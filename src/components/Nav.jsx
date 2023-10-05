import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import RegisterModal from "./ui/RegisterModal";
import SignInModal from "./ui/SignInModal";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ user, setUser, setUserLoggedIn, userLoggedIn }) => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  let modalRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setUserModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  function logout() {
    signOut(auth);
    setUser({});
    setUserLoggedIn(false);
  }

  return (
    <>
      <nav>
        <div className="row">
          <div className="nav__container">
            <h1 className="nav__header">NYC Happy Hours</h1>
            <ul className="nav__bar--links">
              <li className="nav__bar--link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__bar--link">
                <Link to="/bars">Bars</Link>
              </li>
              {!userLoggedIn ? (
                <>
                  <SignInModal
                    user={user}
                    setUser={setUser}
                    setUserLoggedIn={setUserLoggedIn}
                    userLoggedIn={userLoggedIn}
                  />

                  <RegisterModal
                    user={user}
                    setUser={setUser}
                    setUserLoggedIn={setUserLoggedIn}
                    userLoggedIn={userLoggedIn}
                  />
                </>
              ) : (
                <>
                  {user ? (
                    <div className="user__icon--wrapper" ref={modalRef}>
                      <button
                        onClick={() => {
                          setUserModalOpen(!userModalOpen);
                        }}
                        className="user__icon click">
                        {user.email[0].toUpperCase()}
                      </button>
                      {userModalOpen ? (
                        <>
                          <div className="user__modal">
                            <button
                              className="logout__btn"
                              onClick={() => {
                                logout();
                              }}>
                              <FontAwesomeIcon icon={faRightFromBracket} />{" "}
                              Logout
                            </button>
                          </div>
                        </>
                      ) : null}
                    </div>
                  ) : null}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
