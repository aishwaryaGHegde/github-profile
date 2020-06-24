import React from 'react';
import './App.css';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

function App() {
  return (
    <div className="App">
      <div className="header1">
        <div className="nav overview">Overview</div>
        <div className="nav rep">Repositories</div>
        <div className="nav proj">Projects</div>
      </div>
      <div className="body">
        <LeftPane/>
        <RightPane/>
      </div>
    </div>
  );
}

export default App;
