import React, { useState, Fragment } from "react";
// import React, { useState, Fragment, useEffect } from "react";
import useDocumentTitle from "./useDocumentTitle";

//Stateful Functional Component
function Counter(props) {
  // Bu fonksiyon içinde class bazlı olmadığımızdan state yok dolayısıyla state'e
  // erişimimiz de yok. Bu nedenle useState hook'unu kullanıyoruz.

  // useState bir array dönecek. array[0] ilgili değer, array[1] o değeri update
  // edecek (setState) fonksiyondur. Array destructor ile alırsak bu iki değeri
  // aşağıdaki gibi ayırabiliriz.
  const [count, setCount] = useState(0); // 0 başlangıç değeri

  //Aşağıdaki input için başlangıç değeri "Counter" boş string olan bir değişken yaratıyor
  const [name, setName] = useState("Counter");

  // Yukarıdaki gibi birden fazla state değişkeni multiple state variables olarak geçiyor.
  // Başlangıç değeri olarak obje de geçilebilir.

  // Aşağıdaki fonksiyon bu komponent her render edildiğinde çalışır.
  // useEffect(() => {
  //   document.title = `${name} has clicked ${count} times!`;
  // });

  // Aşağıdaki ise sadece count değiştiğinde çalışır. (Sondaki dizi: dependency array)
  // name bu dizide olmadığı içinde konsolda uyarı görülecektir. Çünkü name değişkeni
  // document.title'da kullanılıyor.
  // useEffect(() => {
  //   document.title = `${name} has clicked ${count} times!`;
  // }, [count]);

  // componentWillUnmount için aşağıdaki gibi bir yapı kullanılmalıdır:
  // useEffect(() => {
  //   document.title = `${name} has clicked ${count} times!`;

  //   return () => {
  //     // componentWillUnmount işlemleri
  //   }
  // }, [...]);

  useDocumentTitle(`${name} has clicked ${count} times!`);

  return (
    <Fragment>
      <input
        placeholder="Write your text"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        {name} has clicked {count} times!
      </div>
      <button
        onClick={() => (count < 10 ? setCount(count + 1) : setCount(count))}
      >
        Increase
      </button>
    </Fragment>
  );
}

export default Counter;
