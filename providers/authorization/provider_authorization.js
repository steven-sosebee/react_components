import React, { useState, createContext, useContext,useRef, useEffect } from "react";
import { Spinner } from "../../components/loading/spinner";
import { useUserContext } from "../user/provider_user";
import Validate from "../../utils/validations";
import {Navigate, useNavigate} from "react-router-dom";

export const AuthorizationRequired= createContext();

export const AuthorizationContext = () => useContext(AuthorizationRequired);

export const AuthorizationProvider = ({children}) => {
    const {user, loading, authorized}=useUserContext();

    const rendering=(loading)=>{
        if (loading){
            // return <Spinner/>
            return <></>
        } else {
            if (authorized){
                return children
            } else {
                return <Navigate to={"/"}/>
            }
        }
    }

    useEffect(()=>{
        if (!loading && user.session!==undefined && !authorized){
            <Navigate to={"/"}/>
        }
    },[])
    return (
            <AuthorizationRequired.Provider value={{authorized:true}}>{rendering(loading)}</AuthorizationRequired.Provider>
        )
}