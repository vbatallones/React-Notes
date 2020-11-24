
import React from 'react';

import Header from './components/header/header';
import Form from './components/form/form';
import Footer from './components/footer/footer';
import Result from './components/results/results';
import History from './components/history/history';
import './design/design.scss'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            list: [],
            routeMethod: '',
            url: '',
            body: '',
            response: null
        }
    }

    handleList = (res) => {
        console.log(res)
        this.setState({
            response: res,
            list: [...this.state.list, { routeMethod: this.state.routeMethod, url: this.state.url, response: res }]
        })
        console.log(this.state)
    }

    handleRoute = (e) => {
        this.setState({ routeMethod: e.target.value })
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleHistory = (options) => {
        console.log(options);
        this.setState({
            url: options.url ? options.url : '',
            method: options.method ? options.method : '',
            response: options.response ? options.response : '',
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Form
                    handleRoute={this.handleRoute}
                    handleList={this.handleList}
                    handleChange={this.handleChange}
                    url={this.state.url}
                    method={this.state.routeMethod}
                    body={this.state.body}
                />
                <History handleHistory={this.handleHistory} history={this.state.list}/>
                <Result res={this.state.response}/>
                
                <Footer />
            </div>
        )
    }
}

export default App