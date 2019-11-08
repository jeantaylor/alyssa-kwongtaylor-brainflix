import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Header from "./components/Header"; 
import MainContent from "./components/MainContent"; 


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainContent}/>
        <Route path="/videos/:id" render = {props =>{
          return (<MainContent {...props} />); 
        }}/>
      </Switch>
    </div>
  );
}

export default App;
