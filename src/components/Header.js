import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const menuItems = [{ 'name': 'home', 'url': '/','key':'a' },
{ 'name': 'about', 'url': '/about','key':'b' },
{ 'name': 'services', 'url': '/services','key':'c' }];
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: 'Home' };
    }

    componentDidMount(){
        let stateName = window.location.pathname.replace('/','');
        this.setState({name:stateName.length===0?'home':stateName });
    }

    _handleMenuClick = (menu) => {
        this.setState({ name: menu });
    }
    render() {
        return (
            <Router>
                <header>
                    <div className="container">
                        <div id="branding">
                            <h1>Durga Prasad</h1>
                            {/* <h1><span className="highlight">Prasad</span> web design</h1> */}
                        </div>

                        <nav>
                            <ul>
                                {menuItems.map(item => {
                                    return <li key={item.key} onClick={() => { this._handleMenuClick(item.name) }} className={this.state.name === item.name ? 'current' : ''}><Link to={item.url}>{item.name}</Link></li>
                                })}
                            </ul>
                        </nav>
                    </div>
                </header>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/services' component={Services} />
                </Switch>

            </Router>


        )
    }
}

export default Header