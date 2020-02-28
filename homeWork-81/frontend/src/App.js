import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import MainPage from "./Containers/MainPage/MainPage";

function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/" exact component={MainPage}/>
     </Switch>
    </div>
  );
}

export default App;
