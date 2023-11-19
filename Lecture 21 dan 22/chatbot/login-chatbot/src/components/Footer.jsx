import React, {Component} from 'react';

class Footer extends Component{
    render() {
        return (
            <footer class="text-center text-lg-start fixed-bottom">
                <div class="text-center p-2" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                    <a class="text-reset fw-bold" href="https://www.unklab.ac.id/">Universitas Klabat</a> @ 2022
                </div>
            </footer>
        );
    }
}

export default Footer;