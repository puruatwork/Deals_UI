import React, { Component } from 'react';
import Axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
            data: null,
            isSearchSelected: false,
            isLocationRetrieved: this.props.isLocationRetrieved,
            location: this.props.location
        }
    }

    componentDidMount() {
        Axios.get('http://192.168.1.101:8080/api/products').then((response) => {
            let data = response.data;
            if (data) {
                this.category = data;
                this.setState({
                    data: data,
                });
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            isSearchSelected: newProps.routerLocation.pathname === '/categories/search',
            isLocationRetrieved: newProps.isLocationRetrieved,
            location: newProps.location
        });
    }

    changeEvent(event) {
        event.preventDefault();
        let val = event.currentTarget.value;
        let result = {};
        if (val !== '') {
            this.state.data.forEach((key) => key.list.find((entry) => {

                if (entry.name.toLowerCase().includes(val)) {
                    if (result[key.type] === undefined) {
                        result[key.type] = [];
                    }
                    result[key.type].push(entry);
                }
            })
            );
        }
        this.props.onChangeSearch(result);
        this.setState({ val: event.currentTarget.value });
    }

    render() {
        let view = () => {
            if (this.state.isSearchSelected) {
                return (<div className="input-group md-form form-sm form-2 pl-0">
                    <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search" onChange={(e) => this.changeEvent(e)} />
                    <div className="input-group-append">
                        <span className="input-group-text red lighten-3" id="basic-text1"><i className="fa fa-search text-grey"
                            aria-hidden="true"></i></span>
                    </div>
                </div>
                );
            } else {
                if(this.state.isLocationRetrieved){
                return (
                    <div className="locationButton">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <span>{this.state.location}</span>
                    </div>
                );
                }
            }
        }
        return (
            <div className="searchForm">
                {view()}
            </div>
        );
    }
}
export default Search;