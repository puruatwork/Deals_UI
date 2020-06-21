import React, { Component } from 'react';
import Quote from './quote';
import Loading from '../utils/loading'
class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasQuotes: this.props.hasQuotes,
            quotes: this.props.quotes,
            loader:false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            hasQuotes: nextProps.hasQuotes,
            quotes: nextProps.quotes,
            loader:nextProps.loading
        });
    }

    render() {
        if (this.state.hasQuotes) {
            let view = this.state.quotes.map(quote => {
                return (<Quote shopName={quote.shopName} price={quote.cost} addToCart={()=>this.props.addToCart()}/>);
            })
            return (
            <div className="QuoteBox">
                <ul class="w3-ul w3-card-4">
                {view}
                </ul>
            </div>);
        }

        if(this.state.loader){
           return(<Loading/>);
        }
        else {
            return (<div className="QuoteBox">
                <h3>no quotes available</h3>
            </div>)
        }
    }
}
export default QuoteBox;