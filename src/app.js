
import React from 'react';

import Header from './components/header/header';
import Form from './components/form/form';
import Footer from './components/footer/footer';
import Result from './components/results/results';
import './design/design.scss'

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    handleList = (payload) => {
        this.setState({list: payload})
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Header />
                <Form handleList={this.handleList}/>
                <Result list={this.state.list}/>
                <Footer />
            </div>
        )
    }
}

export default App