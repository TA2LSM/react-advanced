import React from "react";

//UserContext, context objesidir ve pascal named olmalıdır.
const UserContext = React.createContext();

// Her context'e otomatik isim verildiği için aşağıdaki gibi ismi
// değiştirmek uygulamada takip etmek adına önemli. Buna alışmak
// gerekiyor. (Context.Provider yerine UserContext.Provider olarak
// gözükecektir)
UserContext.displayName = "UserContext";

export default UserContext;
