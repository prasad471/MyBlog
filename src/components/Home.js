import React from 'react';
import logo_html from '../images/logo_html.png'
import logo_css from '../images/logo_css.png'
import logo_brush from '../images/logo_brush.png'
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


        {/* <section id="newsletter">
        <div className="container">
            <h1>Subscribe To Our Newsletter</h1>
            <form>
                <input type="email" placeholder="Enter Email"/>
                <button type="submit" className="button_1">Subscribe</button>
            </form>
        </div>
    </section> */}

    <section id="boxes">
        <div className="container">
            <div className="box">
                <img alt='html' src={logo_html}/>
                <h3>HTML5 Markup</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="box">
                <img alt='css' src={logo_css}/>
                <h3>CSS3 Styling</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="box">
                <img alt='brush' src={logo_brush}/>
                <h3>Graphic Design</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s</p>
            </div>
        </div>
    </section>
       
        </div>
     
        
        )
    }
}

export default Home