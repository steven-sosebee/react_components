// import React, { useState, createContext, useContext, useEffect } from "react";
// import { XMLPromise } from "../../utils/calls";

// export const AuthContext = createContext();

// export const useAuthContext = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(false);

// function authed(){
//   console.log(auth);
//   if(!auth){
//     return <div>Not logged in</div>
//   } else {
//     return children
//   }
// }
//   return (
//     <AuthContext.Provider value={{auth:auth,setAuth:setAuth}}>
//       {authed()}
//     </AuthContext.Provider>
//   );
// };
