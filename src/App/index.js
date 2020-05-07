import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Products from '../pages/Product';
import Users from '../pages/Users';

const Index = () => (
    <Fragment>
        <Router>
            <Header/>
            <main>
                <div>
                    <Switch>
                        <Route path="/products" component={Products}/>
                        <Route path="/users" component={Users}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </main>
            <Footer/>
        </Router>
    </Fragment>
);

export default Index;