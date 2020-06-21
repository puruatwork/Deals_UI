import React, { Component } from 'react';
import Screen1 from './screen1/Screen1';
import Screen2 from './screen2/Screen2';
import Login from './security/login';
import Notfound from './security/notFound';
import { NavLink, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

class Banner extends Component {
    constructor(props){
        super(props);
    }

    login(props) {
        return (
            <div class="rootContainer">
                <div className="banner">
                    <img loading="eager" src="localdeals_crop.png" alt="localdeals" width="210" height="130" />
                    {/* https://s3.us-east-2.amazonaws.com/sbloyalty/resellers/6895848/logo/sq-LocalDeals-Logo.png */}

                </div>
                <div className="container-fluid">
                    <div className="body">
                        <Login {... props}/>
                    </div>
                </div>
                <div class="footer">
                    <div class="divider"></div>
                    <p class="text-muted disclaimer text-center ng-binding" ng-bind-html="'loginTermsOfService' | localize:termsAndConditionsUrl:privacyPolicyUrl">© 2020 LocalDeals. All Rights Reserved.</p>
                </div>
            </div>
        );
    }

    notFound() {
        return (
            <div class="rootContainer">
                <div className="banner">
                    <img loading="eager" src="localdeals_crop.png" alt="localdeals" width="210" height="130" />
                    {/* https://s3.us-east-2.amazonaws.com/sbloyalty/resellers/6895848/logo/sq-LocalDeals-Logo.png */}

                </div>
                <div className="container-fluid">
                    <div className="body">
                        <Notfound />
                    </div>
                </div>
                <div class="footer">
                    <div class="divider"></div>
                    <p class="text-muted disclaimer text-center ng-binding" ng-bind-html="'loginTermsOfService' | localize:termsAndConditionsUrl:privacyPolicyUrl">© 2020 LocalDeals. All Rights Reserved.</p>
                </div>
            </div>);
    }

    fullScreen() {
        return (
            <div className="main-container">
                <div className="headerCat">
                    <div className="top-bar">

                    </div>
                </div>
                <div className="side">
                    <div className="side-bar">
                        <img loading="eager" src="localdeals_crop.png" alt="localdeals" width="210" height="130" />
                        <ul class="navBarUl">
                            <li class="navBar-item">
                                <a class="navBar-link" aria-label="Home" href="/home">
                                    <span class="ellipsis-one-line" as="span">Home</span>
                                </a></li>

                            <li class="navBar-item">
                                <a class="navBar-link" aria-label="Search" href="/search">
                                    <span class="ellipsis-one-line" as="span">Search</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="main">
                    <div className="main-bar"></div>
                    
                </div>
                <div className="footerCat">
                    <div class="footer">
                        <div class="divider"></div>
                        <p class="text-muted disclaimer text-center ng-binding" ng-bind-html="'loginTermsOfService' | localize:termsAndConditionsUrl:privacyPolicyUrl">© 2020 LocalDeals. All Rights Reserved.</p>
                    </div>
                </div>
            </div>

        );
    }


    render() {
        let option = {
            pic: 'https://cdn.shopify.com/s/files/1/1188/2592/articles/New_Ingredients_onion_copy_900x.jpg?v=1579595580',
            name: 'onions'
        };


        return (
            <Router>
                <Switch>
                    <Route exact path="/login" render={(routerProps)=>{ return this.login(routerProps)}}/>
                    <Route path="/categories" render={(routeProps)=><Screen1 {... routeProps}/>}/>
                    <Route>
                        {this.notFound()}
                    </Route>
                </Switch>
            </Router>
        );
    }
}
export default Banner;