import React, { Component } from 'react';
import Input from './input';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            password: '',
            isValidUser: false,
            isLoginFailed: false
        }
        
    }

    setUname(value) {
        this.setState({ uname: value });
    }

    setPassword(value) {
        this.setState({ password: value });
    }

    shouldComponentUpdate(nextprops, nextstate){
        return true;
    }

    submit(event) {
        event.preventDefault();
        let validUsers = [{
            userName: 'admin@admin.com',
            password: 'admin'
        }];
        console.log(this.state);
        let validUser = validUsers.find((entry) => {
            if (entry.userName === this.state.uname) {
                return entry;
            }
            return null;
        });

        if ((validUser !== undefined && validUser !== null) && validUser.password === this.state.password) {
            this.setState({ isValidUser: true });
        } else {
            this.setState({isLoginFailed: true});
        }
    }

    onClickAction() {
        this.setState({ isValidUser: true });
    }

    render() {
        let msg = this.state.isLoginFailed ? "Invalid Credentials please try again" : "To continue, log in to Local deals.";
        if (this.state.isValidUser) {
            return <Redirect to="/categories" />;
        }
        return (
            <div className="content">
                <div className="col-xs-12 text-center">
                    <span id="login-to-continue" className="h5p row">{msg}</span>
                </div>
                <form onSubmit={(event)=> this.submit(event)}>
                    <div>
                        <Input name='UserName' type='textbox' onChange={(val)=>this.setUname(val)} />
                    </div>
                    <div>
                        <Input name='password' type='password' onChange={(val)=>this.setPassword(val)} />
                    </div>
                    <div className="row row-submit">
                        <div className="col-xs-12 col-sm-6">
                            <input type='submit' className="btn-green" id="login-button" value="Log In"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;