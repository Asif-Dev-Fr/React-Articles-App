import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Navbar } from './Components/Navbar';
import Articles from './Components/Articles';
import Article from './Components/Article';

function App() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    const retrieveData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setResults(data);
    }
    retrieveData();
  }, [])

  return (
    <Router>
      <div className="App container-fluid p-0">
          <Navbar />
          <Switch>
            <Route exact path='/' 
              render={() => <Articles results={results} />}
            />
            <Route path='/article/:id' component={Article} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
