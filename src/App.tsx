import React from 'react';
import './App.css';
import Header from "./components/Header";
import Cart from "./components/Cart";
import Corzina from "./components/Corzina";
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path={'/'}>
      <Cart/>
            </Route>
            <Route path={'/corzina'}>
      <Corzina/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
