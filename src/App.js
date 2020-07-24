import React, { useState } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import Form from './Form'
import Home from './Home'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  olives: false,
  pineapple: false,
  bacon: false,
  instructions: ''
}

const initialFormErrors = {
  name: '',
  size: ''
}

const initialOrders = []

const App = () => {

  //State//
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const confirmOrder = order => {

    setFormValues(initialFormValues)
  }

  return (
    <div>
      <header>
        <Link to='/'>
          <h1>Lambda Eats</h1>
        </Link>
      </header>
      <Switch>
        <Route path='/pizza'>
          <Form />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>

  );
};
export default App;
