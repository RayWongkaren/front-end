import React, {Component} from 'react';

class Header extends Component{
    render() {
        return (
            <div class="p-5 bg-primary text-white text-center rounded">
                <h1>Welcome to you, Ray !!!</h1>
                <p>A chatbot is a software or computer program that simulates
                 human conversation through text or voice interactions.</p>
                 <button class="btn btn-info btn-sm">Read More</button>
            </div>
        );
    }
}
export default Header;