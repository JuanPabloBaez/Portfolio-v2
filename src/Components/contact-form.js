import React from 'react';
import emailjs from 'emailjs-com';

//import './ContactUs.css';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_psfwpap', 'contact_form', e.target, 'user_UQ4ajvyGl91jhvnTxqIut')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number"  />
      {/* <label>Name</label> */}
      <input type="text" name="from_name" placeholder="Name" required /><br/>
      {/* <label>Email</label> */}
      <input type="email" name="from_email" placeholder="Email" required /><br/>
      {/* <label>Message</label><br/> */}
      <textarea  name="message" placeholder="Write your message..." required /><br/>
      <input type="submit" value="Send" id="submit-button" />
    </form>
  );
}
