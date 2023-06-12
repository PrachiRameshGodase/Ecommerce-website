import { useState, useRef,useContext } from 'react';
import {useNavigate} from "react-router-dom"

import classes from './LoginForm.module.css';
import AuthContext from '../../store/auth-context';

const LoginForm = () => {
  const navigate =useNavigate()
  const emailInputRef=useRef();
  const passwordInpurRef=useRef();
  const authCtx=useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);
  const[isLoading,setIsLoading]=useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault()
    const enteredEmail=emailInputRef.current.value;
    //we pass email from here it is hard coded
    localStorage.setItem("email",enteredEmail)
    const enteredPassword=passwordInpurRef.current.value
    setIsLoading(true)
    let url;
    if(isLogin){
      url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_YTVdPU09w4fVfXZCN4aaCuAu4j_Pcro"
    }else{
      url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_YTVdPU09w4fVfXZCN4aaCuAu4j_Pcro"
    }
    fetch(url,{
        method:"POST",
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnSecureToken:true
        }),
        header:{
          "Content-Type":"application/json"
        }
      }).then(res=>{
        setIsLoading(false)
        if(res.ok){
          return res.json();
        }else{
          return res.json().then((data)=>{
            //show error
            // console.log(data);
            let errorMessage ="Authentication failed!";
            // if(data && data.error && data.error.message){
            // errorMessage=data.error.message
            // }
            // alert(errorMessage);
            throw new Error(errorMessage)
          })
        }
      }).then(data=>{
        // console.log(data)
        authCtx.login(data.idToken)
        // console.log(data.idToken)
        
        navigate("/");
      }).catch((err)=>{
        alert(err.message);
      })
  }
  
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInpurRef}
          />
        </div>
        <div className={classes.actions}>
         {!isLoading && <button>{isLogin ? "Login":"Create Account"}</button>}
         {isLoading && <p>sending request</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
