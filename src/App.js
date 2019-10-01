import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from "./Service/history"
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import combineReducers from "./store/reducers";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import RecipeList from "./components/RecipeList/RecipeList";
import AddRecipeView from "./components/AddRecipeView/AddRecipeView";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers, composeEnhancers(applyMiddleware(thunk)
    ));

function App() {
  return (
      <Provider store={store}>
          <Router history={history}>
            <Header/>

            <Route exact path="/" component={Home}/>
            <Route path="/all" component={RecipeList}/>
            <Route path="/add" component={AddRecipeView}/>
          </Router>
      </Provider>
  );
}

export default App;
