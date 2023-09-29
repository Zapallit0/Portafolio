import React, { useRef } from 'react'
import './contact.css'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import GithubIcon from '../../assets/gitlogon.png'
import emailjs from '@emailjs/browser';
import HtmlCssLogo from '../../assets/html-css.png';
import JavaLogo from '../../assets/java.png';
import PythonLogo from '../../assets/python.png';
import JSLogo from '../../assets/js.png';



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
                <h1 className='contactPageTitle'> My Technologies</h1>
                <p className='clientDesc'>
                    Few technologies that I learn and work with to develop few applications
                </p>
                <div className='clientImgs'>
                    <img src={HtmlCssLogo}  alt="Client" className='clientImg' />
                    <img src={JSLogo}  alt="Client" className='clientImg' />
                    <img src={JavaLogo}  alt="Client" className='clientImg' />
                    <img src={PythonLogo} alt="Client"  className='clientImg' />
                </div>
            </div>
            <div className='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='from_name'></input>
                    <input type='email' className='email' placeholder='Your Email' name='from_email'></input>
                    <textarea className='msg' name='message' rows="5" placeholder='Your Message' ></textarea>
                    <input type='submit' value='Send' className='submitBtn'/>
                    
                    <div className='links'>
                        <a href='https://github.com/Zapallit0' target='_blank' /><img src={GithubIcon} alt="Github" className='link'/>
                        <a href='https://twitter.com/Zapallito4u' target='_blank'/><img src={TwitterIcon} alt="Twitter" className='link'/>
                        <a href='https://www.youtube.com/channel/UCDpZLvsVyuSE_h7q6Jkj_lg' target='_blank'/><img src={YoutubeIcon} alt="Youtube" className='link'/>
                        <a href='https://www.instagram.com/jhersvinvillodas/' target='_blank'/><img src={InstagramIcon} alt="Instagram" className='link'/>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default Contact