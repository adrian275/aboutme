import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

class Main extends Component {

    render() {
        return (
            <div className="background-darkgrey" height="100vh">
                <div className="container">
                    <Header />
            
                    <Home />
             
                 <Footer />
                </div>
            </div>
        );  
    };       
}

export default Main;