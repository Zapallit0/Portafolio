import React from "react";
import './intro.css'
import bg from "../../assets/fotoyo.png"
import btnimg from "../../assets/hireme.png"
import {Link} from 'react-scroll'

const Intro =()=>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello"> Hello,</span>
                <span className="introText">I'm <span className="introName">Jhersvin</span><br/>Programmer</span>
                <p className="introPara"> I'm a hard-working, reliable programmer, <br/>looking to new opportunities</p>
                <Link> <button className="btn"><img src={btnimg} alt="" className="btnImg"/>Hire me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;