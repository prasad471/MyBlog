import React from 'react';
class Services extends React.Component {

    render(){
        return (
            <div>
         <section id="newsletter">
        <div className="container">
            <h1>Subscribe To Our Newsletter</h1>
            <form>
                <input type="email" placeholder="Enter Email"/>
                <button type="submit" className="button_1">Subscribe</button>
            </form>
        </div>
    </section>
    <section id="main">
        <div className="container">
          <article id="main-col">
             <h1 className="page-title">
                Services
             </h1>
             <ul id="services">
                 <li>
                   <h3>Website Design</h3>
                   <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit sapien ut leo posuere, eu dictum eros accumsan. Mauris et scelerisque libero, sed eleifend metus. Donec ac mi justo. Vivamus consequat ornare justo, hendrerit luctus arcu vestibulum et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum a ligula et felis sollicitudin suscipit a vestibulum nisi. Donec eget aliquam nibh. Donec congue cursus elit vitae sagittis. Sed nec auctor enim. Vestibulum at metus a lorem imperdiet ultrices eget non ipsum. Nunc porttitor faucibus elit nec dapibus. Sed porta urna et augue accumsan ornare. Integer metus felis, luctus id ornare a, tristique vel velit. Fusce tincidunt lorem elementum, hendrerit augue ut, feugiat leo.
                 </p>
                 <p>Pricing: $1,000 - $3,000</p>
                 </li>
                 <li>
                    <h3>Website Maintainence</h3>
                    <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit sapien ut leo posuere, eu dictum eros accumsan. Mauris et scelerisque libero, sed eleifend metus. Donec ac mi justo. Vivamus consequat ornare justo, hendrerit luctus arcu vestibulum et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum a ligula et felis sollicitudin suscipit a vestibulum nisi. Donec eget aliquam nibh. Donec congue cursus elit vitae sagittis. Sed nec auctor enim. Vestibulum at metus a lorem imperdiet ultrices eget non ipsum. Nunc porttitor faucibus elit nec dapibus. Sed porta urna et augue accumsan ornare. Integer metus felis, luctus id ornare a, tristique vel velit. Fusce tincidunt lorem elementum, hendrerit augue ut, feugiat leo.
                  </p>
                  <p>Pricing: $250 per month</p>
                  </li>
                  <li>
                    <h3>Website Hosting</h3>
                    <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit sapien ut leo posuere, eu dictum eros accumsan. Mauris et scelerisque libero, sed eleifend metus. Donec ac mi justo. Vivamus consequat ornare justo, hendrerit luctus arcu vestibulum et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum a ligula et felis sollicitudin suscipit a vestibulum nisi. Donec eget aliquam nibh. Donec congue cursus elit vitae sagittis. Sed nec auctor enim. Vestibulum at metus a lorem imperdiet ultrices eget non ipsum. Nunc porttitor faucibus elit nec dapibus. Sed porta urna et augue accumsan ornare. Integer metus felis, luctus id ornare a, tristique vel velit. Fusce tincidunt lorem elementum, hendrerit augue ut, feugiat leo.
                  </p>
                  <p>Pricing: $25 per month</p>
                  </li>
             </ul>
           
             <p className="dark">
                Donec luctus enim justo, eu ornare risus fermentum sed. Sed libero justo, molestie eget semper quis, tempor eget magna. Aenean vestibulum efficitur neque eu feugiat. Aliquam augue enim, vestibulum et risus eget, viverra maximus leo. Nullam maximus, neque sit amet vestibulum tincidunt, turpis nisl varius sapien, mattis suscipit sem mauris ut nisi. Etiam consectetur porta facilisis. Etiam eleifend nibh sit amet nulla consectetur tincidunt.
             </p>
          </article>
          <aside id="sidebar">
              <div className="dark">
                <h3>Get A Quote</h3>
               <form className="quote">
                   <div>
                       <label>Name</label><br/>
                       <input type="text" placeholder="Name"/>
                   </div>
                   <div>
                    <label>Email</label><br/>
                    <input type="email" placeholder="Email Address"/>
                   </div>
                   <div>
                    <label>Message</label><br/>
                  <textarea placeholder="Message"></textarea>
                   </div>
                   <button className="button_1" type="submit">Send</button>
               

               </form>
              </div>
          </aside>
        </div>
    </section>
            </div>
        )
    }
}

export default Services