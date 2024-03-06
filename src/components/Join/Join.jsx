import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_j068smv', 'template_vrk8fie', form.current, '7Ui1U17v3sDAtbyfE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
    <div className='Join' id='Join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'> ready to </span>
                <span>level up</span>
            </div>
            <div>
                <span>your body </span>
                <span className='stroke-text'>with us</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter Your Email' />
                <button className="btn btn-j"> Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join