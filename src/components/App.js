import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import TabularView from './TabularView';
import ChartView from './ChartView';
import HomeView from './HomeView';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className="header">
            <div className="view-type">
              <Link className="view-type-item" to="/"> Home</Link>
              <Link className="view-type-item" to="/chart"> Charts View</Link>
              <Link className="view-type-item" to="/data"> Table View</Link>
            </div>
          </div>
          <div>
            <Route path="/" exact component={HomeView} />
            <Route path="/data" exact component={TabularView} />
            <Route path="/chart" exact component={ChartView} />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
