import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.name,
            value: '',
            type: this.props.type,
        }
    }

    onChange(event) {
        event.preventDefault();
        this.props.onChange(event.target.value);
        this.setState({ value: event.target.value })
    }

    render() {
        return (<div className="row">
            <div className="col-xs-12">
                <input className="formControl" placeholder={this.state.key} value={this.state.value} type={this.state.type} onChange={(event) => this.onChange(event)} />
            </div>
        </div>);
    }
}
export default Input;