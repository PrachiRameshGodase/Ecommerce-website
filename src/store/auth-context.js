import React,{useState} from "react";

const AuthContext=React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
    emailInput:(email)=>{}
})

export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem("token")
    const [token,setToken]=useState(initialToken)

    const [email,setEmail]=useState();

    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem("token",token)
    }

    const logoutHandler=()=>{
        setToken(null)
        setEmail(null)
        localStorage.removeItem("token")
        localStorage.removeItem("email")
    }

    const emailInputHandler=()=>{
        setEmail(email);
        localStorage.setItem("email",email)
    }

    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
        emailInput:emailInputHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;