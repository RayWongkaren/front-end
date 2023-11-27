import React, {Component} from 'react';
import logo from '../LogoFilkom.png';

class Sidebar extends Component{
    render () {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Sidebar;