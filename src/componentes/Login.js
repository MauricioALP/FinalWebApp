import React from "react";

import './estilos/login.css';
import ReactDOM from 'react-dom';

import Main from '../componentes/Mainsc';

import logo from './imagenes/login/logo.png';


class Login extends React.Component{

    ms (e){
        ReactDOM.render(<Main/>, document.getElementById('root'));
    };
    

    render(){
        return(
            <div className="container">
                <div className="login1">
                    <div id="logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div id="label">
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
    
                <div className="login-box">
                    <form>
                        <input type="text" placeholder="Enter Username"/>
                        <input type="password" placeholder="Enter Password"/>
                        <input type="submit" value="Log In" onClick={this.ms}/>
                    </form>
                </div>
    
                <div className="links">
                    <a id="lost" href="#">Lost your Password?</a>
                    <a id="account" href="#">Don't have An account?</a>
                </div>
            </div>
        )
    }
}

export default Login;