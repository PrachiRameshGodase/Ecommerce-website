import React from 'react'
import ConatctUsForm from './ConatctUsForm'

function ContactUs() {
    const addContactHandler=async(contactdata)=>{
        const response=await fetch("https://ecommerce-react-http-default-rtdb.firebaseio.com/contactus.json",{
           method :"POST" ,
           body:JSON.stringify(contactdata),
           headers:{
            "content-type":"application/json"
           }
        })
        const data = await response.json();
        console.log('Response:', data);
    }
  return (
    <div>
      <ConatctUsForm onAddContact={addContactHandler}/>
    </div>
  )
}

export default ContactUs

