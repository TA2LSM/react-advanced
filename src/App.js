import React, { useState } from "react";

import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";

import MoviePage from "./context/MoviePage";
import Login from "./context/Login";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";

import "./App.css";

function App() {
  // value objesi içinde currentUser objesi var onun da bir tane
  // name adında property'si var değeri de Test User.
  const [value, setValue] = useState({
    currentUser: { name: "Test User", password: "12345" },
  });

  function handleLoggedIn(username) {
    console.log("Getting the user: " + username);

    // aynı class komponentler'de state'in direkt değiştirilememesi gibi
    // burada da aynı durum var.
    let newUser = { ...value };
    newUser.currentUser.name = username;
    setValue(newUser);

    // setValue({
    //   currentUser: { name: username, password: "12345" },
    // });
  }

  return (
    <div>
      <Movie id={1} />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <Users />
      <br />
      <br />
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: value.currentUser,
            onLoggedIn: handleLoggedIn,
          }}
        >
          <MoviePage />
          <Login />
        </UserContext.Provider>
      </CartContext.Provider>
      <br />
    </div>
  );
}

export default App;
