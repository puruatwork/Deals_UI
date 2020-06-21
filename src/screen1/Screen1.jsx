import React, { Component } from 'react';
import Location from './Location';
import Search from './Search';
import Categories from './Category';
import {
    Route, Switch, BrowserRouter as Router
} from 'react-router-dom';
import Screen2 from '../screen2/details';
import Profile from './profile';
import CategoryBoxView from './CategoryBox';
import Axios from 'axios';

class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCategorySelected: false,
            cart: 0,
            searchData: null,
            isLocationRetrieved: false,
            location: ''
        }
        this.category = null;
        this.profile = this.props.profile;
    }

    componentDidMount() {
         let success = (position) =>{
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            Axios.get(`https://api.opencagedata.com/geocode/v1/json?key=d20004cbf9d24ff78aa8efb8ea4e94a0&q=${latitude},${longitude}`).then((response) => {
                let data = response.data;
                if (data) {
                    this.setState({
                        isLocationRetrieved: true,
                        location: `${data.results[0].components.state_district} -${data.results[0].components.state}-${data.results[0].components.country}`
                    });
                }
            }).catch((error) => {
                console.log(error);
            });
        }

        let  error=()=> {
            console.log('Unable to retrieve your location');
        }

        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
        } else {
            console.log('Locating…');
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    onCategorySelect = (category) => {
        this.setState({ isCategorySelected: true });
        this.category = {
            pic: category.pic,
            name: category.name,
            id: category.id,
        };
    }

    addToCart() {
        this.setState({ cart: this.state.cart + 1 });
    }

    onSearch(data) {
        this.setState({ searchData: data });
    }

    render() {
        let homecss = 'list-group-item';
        let searchcss = 'list-group-item';

        if (this.props.location.pathname === '/categories') {
            homecss = homecss + ' active';
        }

        if (this.props.location.pathname === '/categories/search') {
            searchcss = searchcss + ' active';
        }
        let cart = () => {
            return <div class="_2CgXb">
                <a class="_1T-E4" href="/checkout">
                    <div class="_3yZyp">
                        <span class="_2vS77">{this.state.cart}</span>
                        <span>Cart</span>
                    </div>

                </a>
            </div>
        }
        return (
            <div className="main-container">
                <div className="headerCat">
                    <div className="top-bar">
                        <Search routerLocation={this.props.location} isLocationRetrieved={this.state.isLocationRetrieved} location={this.state.location} onChangeSearch={(res) => this.onSearch(res)} />
                        {cart()}
                        <Profile />
                    </div>
                </div>
                <div className="side">
                    <div className="side-bar">
                        <img loading="eager" src="localdeals_crop.png" alt="localdeals" width="210" height="130" />
                        <ul className="list-group">
                            <li className={homecss} aria-label="Home" onClick={() => this.props.history.push('/categories')}>
                                <i className="fa fa-home fa-fw" aria-hidden="true" />
                                <span className="ellipsis-one-line" as="span">Home</span>
                            </li>
                            <li className={searchcss} aria-label="Search" onClick={() => this.props.history.push('/categories/search')}>
                                <i className="fa fa-search" aria-hidden="true"></i>
                                <span className="ellipsis-one-line" as="span">Search</span></li>
                        </ul>
                    </div>

                    <div>
                    </div>
                </div>
                <div class="main">
                    <div className="main-bar">
                        <Switch>
                            <Route path={this.props.match.path + "/details"} render={(rp) => <Screen2 {...rp} {...this.category} addToCart={() => this.addToCart()} />} />
                            <Route exact path={this.props.match.path} render={(props) => <Categories {...props} onCategorySelect={(tile) => this.onCategorySelect(tile)} />} />
                            <Route exact path={this.props.match.path + "/search"} render={(props) => {
                                if (this.state.searchData === null || Object.keys(this.state.searchData).length === 0) {
                                    return (<div>
                                        <h2>No Products found </h2>
                                    </div>);
                                }
                                let view = Object.keys(this.state.searchData).map(key => {
                                    return (
                                        <CategoryBoxView key={key} category={key} categoryList={this.state.searchData[key]} onCategorySelect={(tile) => this.onCategorySelect(tile)} />
                                    );
                                });
                                return (
                                    <div>
                                        {view}
                                    </div>
                                );
                            }} />
                        </Switch>
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
export default Screen1;