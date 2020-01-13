import React from 'react';
import logo_html from '../images/logo_html.png'
import logo_css from '../images/logo_css.png'
import logo_react from '../images/logo_react.png'
import profilepic from '../images/profilepic.jpg';
class Home extends React.Component {

    render(){
        return (
            <div>

           
        <section id="showcase">
            <div className="container">
           
            <img src={profilepic} alt="Avatar" style={{width:'150px'}}></img>
            <h1>Hi, I am Durga Prasad Bobbili!</h1>
            <p>I am MEAN/MERN STACK developer from Hyderabad,India. Having over 4 years of experience, currently working as an Associate in Cognizant. My passion is creating, and I find happiness in being a better me today than the me yesterday.  </p>

           
                    </div>
        </section>

    <section id="boxes">
        <div className="container">
            <h2>This site is built using</h2>
            <div className="box">
                <img alt='html' src={logo_html}/>
                <h3>HTML5 Markup</h3>
            </div>
            <div className="box">
                <img alt='css' src={logo_css}/>
                <h3>CSS3 Styling</h3>
            </div>
            <div className="box">
                <img alt='brush' src={logo_react}/>
                <h3>ReactJS</h3>
            </div>
        </div>
    </section>
       
        </div>
     
        
        )
    }
}

export default Home