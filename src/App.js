import React from 'react';
import{Route, Switch, Redirect} from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import './App.css';
import './bootstrap.css';


class App extends React.Component{
  state={

  }
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    )
  }
  
}



export default App;
