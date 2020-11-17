import React from 'react';
import './form.scss';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            route: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRoute = this.handleRoute.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({value: event.target.url.value});
    }

    handleRoute (event) {
        event.preventDefault();
        console.log(this.state.route)
        this.setState({route: event.target.value});
    }
    
    render() {
        let result
        if (this.state.value) {
            result = this.state.route + " " + this.state.value
        }
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div className="url-form">
                    <label>HTTP:</label>
                    <input type="text"  name="url"/>
                    <input type="submit"  value="Route Me"/>
                </div>
                    <div className="route-form">
                        <input type="button" onClick={this.handleRoute} value="GET"/>
                        <input type="button" onClick={this.handleRoute} value="POST"/>
                        <input type="button" onClick={this.handleRoute} value="PUT"/>
                        <input type="button" onClick={this.handleRoute} value="DELETE"/>
                    </div>
                    <textarea className="result-area" rows="25" cols="50" value={result}></textarea>
            </form>
        )
    }
}

export default Form