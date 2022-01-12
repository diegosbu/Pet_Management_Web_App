import React, { Component } from 'react';
import './styles/Login.css';
const axios = require("axios");

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {user: "", passwrd: ""};

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.tryLogin = this.tryLogin.bind(this);
        this.tryRegister = this.tryRegister.bind(this);
    }

    handleChange1(event) {
        this.setState({user: event.target.value});
    }

    handleChange2(event) {
        this.setState({passwrd: event.target.value});
    }

    tryRegister() {
        axios.post("/register", {
            username: this.state.user,
            password: this.state.passwrd        
        })
    }

    tryLogin() {
        axios.post("/login", {
            username: this.state.user,
            password: this.state.passwrd        
        });
    }

    render() {
        return (
            <div id = "LoginForm">
                <form>
                    Username:
                    <input type = "text" name = "userName" value = {this.state.user} onChange =
                        {this.handleChange1}></input>
                
                    <br></br>

                    Password:
                    <input type = "password" name = "passWord" value = {this.state.passwrd} onChange = 
                        {this.handleChange2}></input>

                    <br></br>

                    <button id = "submitForm" onClick = {this.tryRegister}> Register </button>
                    <button id = "loginButton" onClick = {this.tryLogin}> Login </button>
                </form>
            </div>
        );
    }
}

export default Login;