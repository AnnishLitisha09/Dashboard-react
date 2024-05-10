import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;