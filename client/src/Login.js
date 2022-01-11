import React, { Component } from 'react';
import './styles/Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {user: "", passwrd: ""};

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState({user: event.target.value});
    }

    handleChange2(event) {
        this.setState({passwrd: event.target.value});
    }

    handleSubmit(event) {
        alert("A username has been submitted" + this.state.user + this.state.passwrd);
    }

    render() {
        return (
            <div id = "LoginForm">
                <form onSubmit = {this.handleSubmit}>
                    Username:
                    <input type = "text" name = "userName" value = {this.state.user} onChange =
                        {this.handleChange1}></input>
                
                    <br></br>

                    Password:
                    <input type = "password" name = "passWord" value = {this.state.passwrd} onChange = 
                        {this.handleChange2}></input>

                    <br></br>

                    <input id = "submitForm" type = "submit" />
                </form>
            </div>
        );
    }
}

export default Login;