import React, { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function Users(props) {
  // Burada oluşturulacak HER STATE, Users komponenti altında depolanacak.
  // App'e ait DEĞİL !!! Burada users[] oluşturuluyor.
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // useEffect regular bir fonksiyon olduğu için "async" burada kullanılamaz.
    // Bu nedenle alttaki fonksiyon yazıldı.
    async function getUsers() {
      try {
        const result = await axios(apiUrl);

        // bu fonksiyon tekrar komponent'in render olmasına neden olacak
        setUsers(result.data);
      } catch (ex) {
        console.error("ERROR:", ex.message);
      }
    }

    // yukarıdaki fonksiyon otomatşk olarak ÇAĞRILMAYACAĞI için
    // elle çağırmamız gerekiyor.
    getUsers();
  });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
