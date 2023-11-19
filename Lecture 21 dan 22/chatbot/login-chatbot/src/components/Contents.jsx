import React, {Component} from 'react';

class LoginForm extends Component{
    render () {
        return(
            <form>
                <div className="form-group"> <label>Username</label>
                    <input type="email" className="form-control" placeholder="Input Username !!!" required />
                </div>
                <div className="form-group"> <label>Password</label>
                    <input type="password" className="form-control" placeholder="Input Password !!!" />
                </div>
                <div class="form-check">
                    <input type="checkbox" className="form-check-input"/>
                    <label className="form-check-label">Remember me.</label>
                </div>
                    <button type="submit" class="btn btn-primary btn-lg btn-block">Login Page</button>
            </form>
        );
    }
}

class Content extends Component{
    render() {
        return(
            <div class="col-sm-9 pt-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div class="card">
                                <div class="card-header text-center">Login Sistem</div>
                                <div class="card-body">
                                    <LoginForm />
                                </div>
                                <div class="card-footer text-center">Universitas Klabat</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;