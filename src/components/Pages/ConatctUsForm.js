// import React,{useState} from 'react'
// import classes from "./ContactUsForm.module.css"

// function ConatctUsForm(props) {
//     const [enteredName,setEnteredName]=useState("");
//     const [enteredEmail,setEnteredEmail]=useState("");
//     const [enterePhoneNumber,setenterePhoneNumber]=useState("");


//     const nameChangeHandler= (event)=>{
//         setEnteredName(event.target.value);
//     }

//     const emailChangeHandler= (event)=>{
//         setEnteredEmail(event.target.value);
//     }

//     const phoneNumberChangeHandler= (event)=>{
//         setenterePhoneNumber(event.target.value);
//     }

//     const submitHandler=(event)=>{
//         event.preventDefault();
//         const data={
//             name:enteredName,
//             email:enteredEmail,
//             number:enterePhoneNumber
//         }
//         props.onAddContact(data);
//         // console.log(data);
//         setEnteredName("");
//         setEnteredEmail("");
//         setenterePhoneNumber("")

//     }


//   return (
//     <>
    
//     <div className={classes.container}>
//         <h1 className={classes.h1}>Contact Us</h1>
//       <form className={classes.form} onSubmit={submitHandler}>
//         <div className={classes.control}>
//           <label htmlFor='name'>Name</label>
//           <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor='email'>Email</label>
//           <input type='email' id='email' value={enteredEmail} onChange={emailChangeHandler}/>
//         </div>
//         <div className={classes.control}>
//           <label htmlFor='phone'>Phone Number</label>
//           <input type='text' id='phone' value={enterePhoneNumber} onChange={phoneNumberChangeHandler} />
//         </div>
//         <button className='button'>Submit</button>
//       </form>
//     </div>
 
    
//     </>
//   );
// }

  
// export default ConatctUsForm


import React, { useState } from 'react';
import classes from './ContactUsForm.module.css';

function ConatctUsForm(props) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneNumberChangeHandler = (event) => {
    setEnteredPhoneNumber(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: enteredName,
      email: enteredEmail,
      phoneNumber: enteredPhoneNumber,
      message: enteredMessage,
    };
    props.onAddContact(data);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredPhoneNumber('');
    setEnteredMessage('');
  };

  return (
    <div className={classes.container}>
      <h1 className={`${classes.h1} ${classes.animateText}`}>CONTACT US</h1>
      <form  onSubmit={submitHandler} className={`bg-gradient-to-b from-pink-400 to-violet-900  ${classes.form}`} >
        <div className={classes.control}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" value={enteredPhoneNumber} onChange={phoneNumberChangeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="message"> Write Message:</label>
          <textarea id="message" value={enteredMessage} onChange={messageChangeHandler} rows="5" />
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default ConatctUsForm;

