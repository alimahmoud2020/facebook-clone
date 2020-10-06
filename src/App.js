import React from 'react';
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Feed from './Component/Feed';
import Widget from './Component/Widget';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;