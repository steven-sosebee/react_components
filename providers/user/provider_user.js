import React, { useState, createContext, useContext, useEffect } from "react";
import { XMLPromise } from "../../utils/calls";
// import { useModalContext } from "../modal/provider_modal";
import Validate from "../../utils/validations";
export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const handleAuthorized =(user)=>{
    // console.log(user.session);
    setAuthorized(user.session?.userId!==undefined)
  }

  const getSession = async ()=>{
    // console.log("get")
    return await XMLPromise("","","GET","/php/index.php/auth/getSession/");
    // return await XMLPromise("","","GET","/php/auth/getSession/");
  };
  const logOut = async ()=>{
    const session = await XMLPromise("","","GET","/php/index.php/auth/logOut/")
    setUser(session);
    setAuthorized(user.session?.userId!==undefined)
    // console.log(user);
  };

  const logIn = async (credentials)=>{
    // console.log(credentials);
    setLoading(true);
    const auth = await XMLPromise(credentials,"","POST","/php/index.php/auth/logIn/");
    setUser(auth);
    setAuthorized(auth.session.userId!==undefined);
    // handleAuthorized(auth);
    setLoading(false);
    console.log(auth);
    // return authorized;
  }
  useEffect(()=>{
    const open =async()=>{
    const session = await getSession();
    setUser(session);
    // console.log(session.session.userId!==undefined);
    setAuthorized(session.session.userId!==undefined);
    setLoading(false);
    console.log(session.session.userId!==undefined);
    console.log(session);
    // handleAuthorized(session.session.userId!==undefined);
  };
    open();
  },[]);

  // console.log(user);
  return (
    <UserContext.Provider value={{ loading:loading, user: user, setUser: setUser,logOut:logOut, logIn:logIn, getSession:getSession, authorized:authorized }}>
      {children}
    </UserContext.Provider>
  );
};
