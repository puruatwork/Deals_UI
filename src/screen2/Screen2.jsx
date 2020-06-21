import React, { Component } from 'react';
import Details from './details';
class Screen2 extends Component {

   constructor(props){
       super(props);
   }
    
    
    render(){
        let option = {
            pic: 'https://cdn.shopify.com/s/files/1/1188/2592/articles/New_Ingredients_onion_copy_900x.jpg?v=1579595580',
            name: 'onions'
        };
        return(
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
                <div className="main-bar">
                <Details {... option}/>
                </div>
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
}
export default Screen2;