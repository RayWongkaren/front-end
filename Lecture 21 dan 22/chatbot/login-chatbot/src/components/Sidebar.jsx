import React, {Component} from 'react';
import logo from '../logo.svg';
class Sidebar extends Component{
    render () {
        return (
            <div class="col-sm-3 pt-5">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Sidebar;