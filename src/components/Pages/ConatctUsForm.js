import React,{useState} from 'react'
import classes from "./ContactUsForm.module.css"

function ConatctUsForm(props) {
    const [enteredName,setEnteredName]=useState("");
    const [enteredEmail,setEnteredEmail]=useState("");
    const [enterePhoneNumber,setenterePhoneNumber]=useState("");


    const nameChangeHandler= (event)=>{
        setEnteredName(event.target.value);
    }

    const emailChangeHandler= (event)=>{
        setEnteredEmail(event.target.value);
    }

    const phoneNumberChangeHandler= (event)=>{
        setenterePhoneNumber(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const data={
            name:enteredName,
            email:enteredEmail,
            number:enterePhoneNumber
        }
        props.onAddContact(data);
        // console.log(data);
        setEnteredName("");
        setEnteredEmail("");
        setenterePhoneNumber("")

    }


  return (
    <>
    <h1 className={classes.Label}>The Generics</h1>
    <div className={classes.container}>
        <h1 className='h1-label'>Contact Us</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' value={enteredEmail} onChange={emailChangeHandler}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='phone'>Phone Number</label>
          <input type='text' id='phone' value={enterePhoneNumber} onChange={phoneNumberChangeHandler} />
        </div>
        <button className='button'>Submit</button>
      </form>
    </div>
    <h1 className={classes.bottom}>The Generics</h1>
    
    </>
  );
}

  
export default ConatctUsForm
