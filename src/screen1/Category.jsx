import React, { Component } from 'react';
import Loader from '../utils/loading';
import CategoryBoxView from './CategoryBox';
import Axios from 'axios';
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isCategoriesLoaded: false
        };
    }

    componentDidMount() {
        Axios.get('http://192.168.1.101:8080/api/products').then((response) => {
            let data = response.data;
            if (data) {
                this.category = data;
                this.setState({
                    data: data,
                    isCategoriesLoaded: true
                });
            }
        }).catch((error) => {
            console.log(error);
        });
        // let data = {
        //     vegetables: [
        //         {   id: 1,
        //             pic: 'https://cdn.shopify.com/s/files/1/1188/2592/articles/New_Ingredients_onion_copy_900x.jpg?v=1579595580',
        //             name: 'onions'
        //         }, {
        //             id: 2,		System.out.println("CORS Filter");

        //             pic: 'https://c.ndtvimg.com/p5qg74v8_potato_625x300_01_August_18.jpg',
        //             name: 'potatoes'
        //         }
        //     ],
        //     grocerry: [
        //         {   id: 3,
        //             pic: 'https://5.imimg.com/data5/LB/TX/MY-40035975/02-500x500.jpg',
        //             name: 'lalmirchpowder'
        //         }, {
        //             id: 4,
        //             pic: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-eggs-1296x728-feature.jpg?w=1155&h=1528',
        //             name: 'eggs'
        //         }
        //     ],
            
        // }
        // setTimeout(() => {
        //     this.setState({
        //         isCategoriesLoaded: true,
        //         data: data
        //     });
        // }, 500);
        
    }

    fetchCategory() {
        let fetch = false;
        if (fetch) {
            this.setState({
                isCategoriesLoaded: true
            });
        }
    }



    render() {

        if (this.state.isCategoriesLoaded) {
            let view = this.state.data.map(key => {
                return (
                    <CategoryBoxView key={key} category={key.type} categoryList={key.list} onCategorySelect={(tile)=>this.props.onCategorySelect(tile)}/>
                );
            });
            return (
                <div>
                    {view}
                </div>
            );
        } else {
            return (
                <Loader />
            );
        }
    }
}

export default Category;