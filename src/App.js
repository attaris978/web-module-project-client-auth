import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Nav from './components/Nav';



function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={Login} />
      <Route path='/login' component={Login} />
      
    </div>
  );
}

export default App;
