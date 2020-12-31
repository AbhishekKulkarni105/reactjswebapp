
import React from 'react';
import classes from '../LogIn/LogIn.module.css';
import Axios from 'axios';



class Login extends React.Component{

    onLoginClick = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value
        if(username !== password) {
            alert('Please Enter Valid Credentials' + " " + username + " " + password)
        } else {
            Axios.post('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login', {username: username, password: password})
            .then(res => {
                alert('Login Successful!')
                localStorage.setItem('loginStatus', true);
                this.props.onUserLoggedIn();
                
            })
            .catch(res => {
            });
        }
    }

    render()
{
    return(
        <div className={classes.MainPage}>
        <form className={classes.Login} onSubmit={this.onLoginClick}>
        <h1>Sign In</h1>

        <input className={classes.InputField} type="text" name="username" placeholder="Enter Username" />
        <input className={classes.InputField} type="password" name="password" placeholder="Enter Password" />
        <input className={classes.Button} type="submit" value="Login" />
        </form>       
        </div>


        );
}
}

export default Login;