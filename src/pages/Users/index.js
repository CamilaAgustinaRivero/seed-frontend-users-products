import React from 'react';
import {Route, Switch} from 'react-router-dom';
import List from './List';
import Edit from './Edit';

const Users = ({match: {path}}) => (
    <Switch>
        <Route path = {`${path}/new`} strict component={Edit}/>
        <Route path = {`${path}/:id`} strict component={Edit}/>
        <Route path = {`${path}`} exact component={List}/>
    </Switch>
);

export default Users;