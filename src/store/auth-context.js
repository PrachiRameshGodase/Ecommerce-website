import React,{useState,useEffect} from "react";

const AuthContext=React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
    autoLogout:()=>{}

})
export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem("token")
    const [token,setToken]=useState(initialToken);

    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        
        setToken(token) 
        localStorage.setItem("token",token)
    }

    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem("token")
    }

    function autoLogoutHandler(){
        setTimeout(()=>{
          console.log('You have been logged out');
          localStorage.removeItem('token');
          setToken(null); // Update the token state to reflect logout
        },2000)
      }
      useEffect(()=>{
        autoLogoutHandler();
      },[])

    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
        autoLogout:autoLogoutHandler
    }


    return (<AuthContext.Provider value={contextValue}>
        {props.children}
        </AuthContext.Provider>
    )
};
export default AuthContext;