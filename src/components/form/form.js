import React from 'react';
import './form.scss';

function Form (props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: '',
    //         // route: ''
    //     };

    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     // this.handleRoute = this.handleRoute.bind(this);
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = e.target.url.value;

        const response = await fetch(url);
        const data = await response.json()
        console.log(data)

        props.handleList(data)
    }
    
    const  handleRoute =(event) => {
        event.preventDefault();
        console.log(this.state.route)
        this.setState({route: event.target.value});
    }
        // let result
        // if (this.state.value) {
        //     result = this.state.route + " " + this.state.value
        // }
        
        return ( 
            <form onSubmit={handleSubmit}>
                <div className="url-form">
                    <label>HTTP:</label>
                    <input type="text"  name="url"/>
                    <input type="submit"  value="Route Me"/>
                </div>
                    <div className="route-form">
                        <input type="button" onClick={handleRoute} value="GET"/>
                        <input type="button" onClick={handleRoute} value="POST"/>
                        <input type="button" onClick={handleRoute} value="PUT"/>
                        <input type="button" onClick={handleRoute} value="DELETE"/>
                    </div>
            </form>
        )
    }


export default Form