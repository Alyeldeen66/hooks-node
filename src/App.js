import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

import MovieList from './Components/MovieList';

class App extends React.Component{
  constructor(props){
    super(props)
    this.props={
   
    }
  }
 
  render(){
    
    return(
      <div className="App">
        <MovieList></MovieList>
      </div>
    );
  }
}

export default App;
