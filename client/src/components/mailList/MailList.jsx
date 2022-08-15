import { useRef } from "react";
import "./mailList.css"
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'

        
const MailList = () => {

  const form = useRef()
      
        const sendEmail = (e) => {
            e.preventDefault();
    
        emailjs.sendForm('service_esevb8d', 'template_rxpa0ii', form.current, 'qjsY-yeWyRsdAtFX8')
          .then((result) => {
            swal({
                title: "Thank you!",
                text: "You submitted a message!",
                icon: "success",
                button: "Close",
                width: 200,
              });
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

  return (
    <div className="mail text-center p-3 rounded-md shadow-md border border-black">
        <div>
          <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Email and we'll send the best deals to you</span>
        </div>
        <form ref={form}
            onSubmit= {sendEmail}
            className=' text-white flex flex-col justify-start items-start gap-y-2 '>
            
            <input type="text" name='from_name' placeholder='Your Name' className='border border-black rounded-md w-full p-2 text-black' required/>
            <input type="email" name='user_email' placeholder='Email Here' className='border border-black rounded-md w-full p-2 text-black' required/>
            <input type="text" name='user_phone' placeholder='Contact Number' className='border border-black rounded-md w-full p-2 text-black' required/>
            <textarea name="message" rows="4" placeholder='How I can help you?' className='border border-black rounded-md w-full p-2 text-black'></textarea>
            <button type='submit' className='rounded-md bg-violet-700 hover:bg-violet-500 focus:ring-green-300 focus:outline-none hover:-translate-y-0.5 transform transition p-2 w-20 self-center'>Submit</button>
        </form>
    </div>
  )
}

export default MailList