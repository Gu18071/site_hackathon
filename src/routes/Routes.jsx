import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Categoria from '../pages/Categoria'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path={['/api/produtosCategoria','/api/produtosCategoria/:id']}  exact component={Categoria}/>
        </Switch>
    )
}

export default Routes

