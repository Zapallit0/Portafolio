import React, {useState} from "react";
import './intro.css'
import bg from "../../assets/fotoyo.png"
import btnimg from "../../assets/hireme.png"
import btnplay from "../../assets/play.png";
import {Link} from 'react-scroll'
import { useSpeechSynthesis } from "react-speech-kit";

const Intro =()=>{ 
    const [text,setText]=useState('');
    const{speak}=useSpeechSynthesis();

    const handleOnClick = ()=>{
        speak({text:"Hello and Welcome to My Coding World, I'm Jhersvin Villodas"})
        speak({text:"Hey there! I'm a passionate software engineering student, deeply in love with the art of coding and problem-solving. My toolbox includes Java, JavaScript, and Python, languages I've used to craft a variety of projects."})
        speak({text:"I'm a version control enthusiast, ensuring my collaborative efforts are always in sync using Git. With a strong grip on object-oriented design, I create software solutions that blend creativity with precision."})
        speak({text:"Explore my portfolio and witness the fusion of my ambition and creativity in the world of programming. Excited to share my journey with you!"})
    }
    return( 
        <section id="intro">
            <div className="introContent">
                <span className="hello" > Hello,</span>
                <span className="introText">I'm <span className="introName">Jhersvin</span><br/>Programmer</span>
                <p className="introPara" id="text"> I'm a hard-working, reliable programmer, <br/>looking to new opportunities</p>
                <div>
                    <Link> <button className="btn"><img src={btnimg} alt="" className="btnImg"/>Hire me</button></Link>
                    <button className="btn" onClick={()=>{handleOnClick()}}><img src={btnplay} alt="" className="btnImg"/></button>
                    
                </div>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;