import React from 'react';
import SignupLoginNavbar from '../Navbar/loginSignupNavbar';

const SignupForm = () => {
    return (
        <React.Fragment>
            <SignupLoginNavbar/>
            <div className="container-form">
                <div className="login-form">
                    <div className="panel">
                        <span className="login-title">Create an account</span>
                    </div>
                    <form id="Login" className="main-div">
                        <div className="wrap-input">
                            <input type="username" className="input" id="inputUname" placeholder="Email Username" />
                        </div>
                        <div className="wrap-input">
                            <input type="email" className="input" id="inputEmail" placeholder="Email Address" />
                        </div>
                        <div className="wrap-input">
                            <input type="password" className="input" id="inputPassword" placeholder="Password" />
                        </div>
                        <div className="wrap-input">
                            <input type="password" className="input" id="inputConfirmpass" placeholder="Confirm Password" />
                        </div>
                        <div className="forgot">
                            <small>Already a hacker? <a href="/login">Login here</a></small>
                        </div>
                        <button type="submit" className="btn btn-pri">Sign Up</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignupForm;
