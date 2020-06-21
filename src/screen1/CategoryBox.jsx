import React, { Component } from 'react';
import Tile from './CategoryTile';
class CategoryBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.category
        }
    }

    render() {
        let categoryList = this.props.categoryList.map((step) => {
            return (
                <Tile key={step.id} pic={step.imageUrl} name={step.name} id={step.id} onTileSelect = {(tile)=>this.props.onCategorySelect(tile)}/>
            );
        });

        return (
            <section className="CategoryBoxSection" aria-label={this.state.name}>
                <div className="CategoryBox">
                    <div className="CategoryBoxName">
                        <h2>{this.state.name}</h2>
                    </div>
                    {categoryList}
                </div>
            </section>
        );
    }
}

export default CategoryBox;