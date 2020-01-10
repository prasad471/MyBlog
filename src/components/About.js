import React from 'react';
class About extends React.Component {

    render() {
        return (
            <div>
                {/* <section id="newsletter">
                    <div className="container">
                        <h1>Subscribe To Our Newsletter</h1>
                        <form>
                            <input type="email" placeholder="Enter Email"/>
                                <button type="submit" className="button_1">Subscribe</button>
            </form>
        </div>
    </section> */}
                    <section id="main">
                        <div className="container"> 
                            <article id="main-col">
                                <h1 className="page-title">
                                    About Me
             </h1>
                                <p>
                                   <b>Software Developer </b> who loves to transform ideas into reality using code. I love to code using javascript frameworks like Angular,React,Node. Love to watch movies and eat chicken items.
                                </p>
                                <p className="dark">
                                    Donec luctus enim justo, eu ornare risus fermentum sed. Sed libero justo, molestie eget semper quis, tempor eget magna. Aenean vestibulum efficitur neque eu feugiat. Aliquam augue enim, vestibulum et risus eget, viverra maximus leo. Nullam maximus, neque sit amet vestibulum tincidunt, turpis nisl varius sapien, mattis suscipit sem mauris ut nisi. Etiam consectetur porta facilisis. Etiam eleifend nibh sit amet nulla consectetur tincidunt.
             </p>
                            </article>
                            <aside id="sidebar">
                                <div className="dark">
                                    <h3>What We Do</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit sapien ut leo posuere, eu dictum eros accumsan. Mauris et scelerisque libero, sed eleifend metus.
                </p>
                                </div>
                            </aside>
                        </div>
                    </section>
            </div>
                )
            }
        }
        
export default About