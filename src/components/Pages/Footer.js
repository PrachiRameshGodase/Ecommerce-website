import React from 'react'
import classes from "./Footer.module.css"
import { FaTwitter,FaInstagram, FaYoutube } from 'react-icons/fa';
import { Button, NavLink } from 'react-bootstrap'
import image from "../../assests5/images2.jpg"


function Footer() {
  return (
    <>
        <footer className={classes.footer}>
        <div className={classes.start}>
        <div className={classes.col}>
            <img src={image}></img>
            <h5>Enjoy Online Shopping!!</h5>
        </div>

        <div className={classes.col}>
            <h3>Subscribe to get important updates!</h3>
            <form>
                <input type="email" placeholder='your e-mail'/>
                <Button>SUBSCRIBE</Button>

            </form>
        </div>

        <div className={classes.col}>
            <h3 className={classes.follow}>Follow us!</h3>
            <div className={classes.icons}>
            <ul className={classes.link}>
                <a href="https://twitter.com" className={classes.twitter}><FaTwitter /></a>
                <a href="https://youtube.com" className={classes.youtube}><FaYoutube /></a>
                <a href="https://instagram.com" className={classes.instagram}><FaInstagram /></a>
            </ul>
            </div>

        </div>

        <div className={classes.col}>
            <h4>Call Us..</h4>
            <h5> +91 9876543210</h5>

        </div>
        </div>
        
        <div className={classes.hr}>
            <hr className={classes.horizontal}/>
            <div>
               <p style={{textAlign:"center"}}>@{new Date().getFullYear()} Online Shopping. All Rights Reserved</p> 
            </div>
           
        </div>
    </footer>
    </>
  )
}

export default Footer
