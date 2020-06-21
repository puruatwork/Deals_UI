import React, { Component } from 'react';
import QuoteBox from './quotebox';
import Axios from 'axios';
import Input from '../security/input'
class Details extends Component {

    constructor(props) {
        super(props);
        // this.props = this.props.location.state;
        console.log(this.props);
        this.state = {
            name: this.props.name,
            requestedQuote: false,
            quoteDetails: [],
            loadingQuotes: false,
            needQuantity:false,
            quantity:0
        }
    }

    sendRequest(e) {
        e.preventDefault();
        this.setState({
            loadingQuotes: true
        });
        Axios.get(`http://localhost:8080/api/quote?productId=${this.props.id}`).then((response) => {
            let data = response.data;
            if (Object.keys(data).length !== 0) {
                setTimeout(() => {
                    this.setState({
                        requestedQuote: true,
                        quoteDetails: data
                    });
                }, 2000);
            } else {
                setTimeout(() => {
                    this.setState({
                        loadingQuotes: false,
                        requestedQuote: false
                    });
                }, 500);

            }
        }).catch((error) => {
            console.log(error);
        });



        // setTimeout(() => {
        //     this.setState({
        //         requestedQuote: true,
        //         quoteDetails: [
        //             {
        //                 shop: "sri Venkateshawara kiranam",
        //                 price: "150/kg"
        //             },
        //             {
        //                 shop: "Reliance Fresh",
        //                 price: "110/kg"
        //             }, {
        //                 shop: "Heritage Fresh",
        //                 price: "90/kg"
        //             }
        //         ]
        //     });
        // }, 1000);
    }


    render() {
        let view = () => {
            if (!this.state.needQuantity) {
               return( <button type="button" class="btn btn-outline-primary btn-lg" onClick={() => this.setState({needQuantity:true})}>Request Quote</button>);
            } else {
                return(
                <form onSubmit={(event) => this.sendRequest(event)}>
                    <div>
                        <Input name='Quantity' type='textbox' value={this.state.quantity} onChange={(val) => this.setState({quantity:val})} />
                    </div>

                    <div className="row row-submit">
                        <div className="col-xs-12 col-sm-6">
                            <input type='submit' className="btn-green" id="login-button" value="send request" />
                        </div>
                    </div>
                </form>
                );
            }
        }

        return (
            <div class="ContainerDetails">
                <div className="imgsec">
                    <div className="DetilsText">
                        <div>
                            <h1> {this.props.name}</h1>
                        </div>
                    </div>
                    <div className="DetailsImg">
                        <img loading="lazy" src={this.props.pic} alt={this.props.name} width="500" height="500" />
                    </div>
                </div>
                <div className="requestButtonSec">
                    <div className="requestbuttonDiv">
                    {view()}
                    </div>
                </div>
                <div className="requestedDetails" >
                    <QuoteBox hasQuotes={this.state.requestedQuote} quotes={this.state.quoteDetails} loading={this.state.loadingQuotes} addToCart={() => this.props.addToCart()} />
                </div>
            </div>
        );
    }
}

export default Details; 