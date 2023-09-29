import React from 'react'
import './skills.css'
import ProgrammingLanguages from '../../assets/programminglanguages.png'
import VCS from '../../assets/git.png'
import OOP from '../../assets/oop.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I'm a passionate, ambitious, and creative software engineering student with a strong passion for coding and problem solving. I'm eager to contribute my skills and learn .</span>
        <div className='skillsBars'>
            <div className='skillBar'>
                <img src={ProgrammingLanguages} alt='ProgrammilnLanguages' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Languages</h2>
                    <p>I've developed projects utilizing Java, JavaScript, and Python</p>
                </div>    
            </div>
            <div className='skillBar'>
                <img src={VCS} alt='VCS' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Version Control</h2>
                    <p>I effectively managed version control using Git tracking my code and project along with my collaborators.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={OOP} alt='OOP' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Object Oriented Design</h2>
                    <p>Solid understanding of object-oriented programming and proficiency in designing software solutions using various design patterns.</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Skills