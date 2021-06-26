import React from 'react'
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { ItemListContainer } from "./pages/itemListContainer/itemListContainer"
import { ItemDetailContainer } from './pages/itemDetailContainer/itemDetailContainer'
import { PageNotFound} from './pages/pageNotFound/pageNotFound'
function Routes() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer/>
          </Route>
          <Route path='/category/:id'>
            <ItemListContainer/>
          </Route>
          <Route path='/item/:id'>
            <ItemDetailContainer/>
          </Route>
          <Route path='*'>
            <PageNotFound/>
          </Route>
        </Switch>
      </Router>
  );
}

export default Routes;
