import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class CategoryTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    click() {
        this.setState({redirect:true});
        this.props.onTileSelect({pic:this.props.pic, name:this.props.name, id:this.props.id});

    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to="/categories/details" />
            );          
        }
        else {
            return (
                <div className="CategoryTileOuter">
                    <div className="categoryTileInner" >
                        <div className="CategoryTileImg" >
                            <img loading="lazy" src={this.props.pic} alt={this.props.name} width="132" height="132" onClick={()=>this.click()} />
                        </div>
                        <div className="CategoryText">
                            <div>
                                <a href="/categories/details" >{this.props.name}</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default CategoryTile;