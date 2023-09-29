import React from 'react'
import "./works.css"
import GameOOP from "../../assets/GamePOO.png"
import PFortuna from "../../assets/PFortuna.png"
import ChatBot from "../../assets/chatbot.png"
import Graphs from '../../assets/graphs.png'


function Works() {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I'm always learning new stuff, making few proyects. Here's a variety of the few proyects with different programming languages.</span>
        <div className='worksImgs'>
          <div className='wrapper'>
            <img src={GameOOP} alt='' className='worksImg'/>
            <div className='contentImg'>
              <h1>GAME</h1>
              <p>Build in java with design patterns</p>
            </div>
          </div>
          <div className='wrapper'>
            <img src={PFortuna} alt='' className='worksImg'/>
            <div className='contentImg'>
              <h1>My first web page</h1>
              <p>A page for a restaurant I live near Html Css</p>
            </div>
          </div>
          <div className='wrapper'>
            <img src={ChatBot} alt='' className='worksImg'/>
            <div className='contentImg'>
              <h1>ChatBot</h1>
              <p>A bot made with python that can be trained with more inf</p>
            </div>
          </div> 
          <div className='wrapper'>
            <img src={Graphs} alt='' className='worksImg'/>
            <div className='contentImg'>
              <h1>Graphs Page</h1>
              <p>This is a page using google API and graphs theory</p>
            </div>
          </div>    
        </div>
        <button className='worksButton'>See More</button>
    </section>
  )
}

export default Works