import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            logout:false
        }
    }

    click(e) {
        this.setState({ toggle: !this.state.toggle });
    }

    render() {
        if (this.state.logout) {
            return (
                <Redirect to="/login" />
            );
        }
        let dropDownCss = this.state.toggle ? "dropdown-content show" : "dropdown-content";
        return (<div className="top-bar-profile">
            <div className="dropdown">
                <button onClick={(e) => this.click(e)} className="dropbtn">
                    <div className="dropdownNameSec">
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                        <span>Sam</span>
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                </button>
                <ul className={dropDownCss}>
                    <li href="#Profile">
                        <button>Profile</button></li>
                    <li href="#Account"><button>Account</button></li>
                    <li className="dropDownline"></li>
                    <li href="#Log out"><button onClick={() => this.setState({ logout: true })}>Log out</button></li>
                </ul>
            </div>
        </div>);
    }
}

export default Profile;