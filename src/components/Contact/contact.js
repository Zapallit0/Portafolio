import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';



function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2v26wty', 'template_p7y7d7f', form.current, '6TC6PB36N_gVD_kXr')
            .then((result) => {
                    console.log(result.text);
                    e.target.reset()
                    alert('Email Sent')
            }, (error) => {
                    console.log(error.text);
            });
    };
    return (  
        <section id='contactPage'>
            <div className='clients'>
                <h1 className='contactPageTitle'> My Clients</h1>
                <p className='clientDesc'>
                    lorem ipsum dolor sit amet, consectetur adip
                </p>
                <div className='clientImgs'>
                    <img src={Walmart}  alt="Client" className='clientImg' />
                    <img src={Adobe}  alt="Client" className='clientImg' />
                    <img src={Microsoft}  alt="Client" className='clientImg' />
                    <img src={Facebook} alt="Client"  className='clientImg' />
                </div>
            </div>
            <div className='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='from_name'></input>
                    <input type='email' className='email' placeholder='Your Email' name='from_email'></input>
                    <textarea className='msg' name='message' rows="5" placeholder='Your Message' ></textarea>
                    <input type='submit' value='Send' className='submitBtn'/>
                    
                    <div className='links'>
                        <img src={FacebookIcon} alt="Facebook" className='link'/>
                        <img src={TwitterIcon} alt="Twitter" className='link'/>
                        <img src={YoutubeIcon} alt="Youtube" className='link'/>
                        <img src={InstagramIcon} alt="Instagram" className='link'/>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default Contact