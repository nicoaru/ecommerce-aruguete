import React from 'react'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ItemListContainer } from "./pages/itemListContainer/itemListContainer"
import { ItemDetailContainer } from './pages/itemDetailContainer/itemDetailContainer'
import { PageNotFound} from './pages/pageNotFound/pageNotFound'
import { Cart } from './pages/cart/cart'

function Routes() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer/>
          </Route> 
          <Route path='/category/:categoryId'>
            <ItemListContainer/>
          </Route>
          <Route path='/item/:itemId'>
            <ItemDetailContainer/>
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <Route path='*'>
            <PageNotFound/>
          </Route>
        </Switch>
      </Router>
  );
}

export { Routes };
