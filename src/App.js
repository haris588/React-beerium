import React from 'react'
import { Switch, Route } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import { Store } from './pages/store'
import { Cart } from './pages/cart'
import { ContextProvider } from './context/context'

export default function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Store />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

