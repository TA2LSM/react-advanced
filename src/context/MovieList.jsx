import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

// Class komponentlerde context kullanımı
class MovieList extends Component {
  // Bu class'a context bilgi girişi olabilmesi için aşağıdaki metot ekleniyor.
  // Değişmeyecek bir metot olduğu için static olarak eklendi.
  static contextType = UserContext; //MovieList.contextType = UserContext; yerine kullanıldı

  componentDidMount() {
    console.log("Movie Context", this.context);
  }

  render() {
    return (
      // Consumer component'i içine bir fonksiyon bekler. Parametre olarak userContext
      // yerine ne istenirse yazılabilir.
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List:{" "}
            {userContext.currentUser ? userContext.currentUser.name : ""}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

// Bunun yerine class içinde yapıldı
//MovieList.contextType = UserContext;

export default MovieList;
