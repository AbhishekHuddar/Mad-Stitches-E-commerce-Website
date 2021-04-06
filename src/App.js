import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import { auth } from './firebase/firebase.utils.js';
import './App.css';



class App extends React.Component {
  constructor() {
    super();

    this.state={
      currentUser : null
    };
  }

  unsubscribeFromAuth= null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={ShopPage}/>
       <Route path='/signin' component={SignInSignUpPage}/>
       </Switch>
      </div>
    );
  }
}

export default App;