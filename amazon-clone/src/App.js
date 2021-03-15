import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from "./Checkout"; 
import Login from "./Login"
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51IVIZnAoT0ZB2BYbgdhp1oWNKAeNEw4sqDqwyNGMbHDDZdAb8s6ej6WnZJO8fhQ57xwNlo5mwBhl0dv0C9KD15IO00fhIpejmC');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=> {
    //will only run the app component loads, it works like an if statment.
    auth.onAuthStateChanged(authUser => {
      console.log('the user is -->', authUser);

      if (authUser) {
        //the user just logged in or the user was logged in dispatch the user info into the database
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        //the user is logged out. 
        dispatch ({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    <Router>
    <div className="app">

      <Switch>
      <Route path="/login">   
      <Login />        
        </Route>
        <Route path="/checkout">
        <Header />     
          <Checkout />        
        </Route>
        <Route path="/payment">
        <Header />  
        <Elements stripe={promise}>
        <Payment /> 
        </Elements>   
     
        </Route>
        <Route path="/">
        <Header />
           <Home />
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
