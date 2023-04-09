import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const onLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const u = await loginRequest(email, password);
      setUser(u);
      setIsLoading(false);
    } catch (e) {
      setError(e.toString());
      setIsLoading(false);
    }
    // loginRequest(email, password)
    //   .then((u) => {
    //     setUser(u);
    //     setIsLoading(false);
    //   })
    //   .error((e) => {
    //     setError(e.toString());
    //     setIsLoading(false);
    //   });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .error((e) => {
        setError(e.toString());
        setIsLoading(false);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
