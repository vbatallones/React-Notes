
import React from 'react';

import Header from './components/header/header';
import Form from './components/form/form';
import Footer from './components/footer/footer';
import './design/design.scss'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Form />
                <Footer />
            </div>
        )
    }
}

export default App