import React, { Component } from "react";
import './App.css';
import Table from './components/Table'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">

      <header>
        <h2>Employee Directory</h2>
        <br></br>
        <button type="button" className="btn btn-primary">Sort by Last Name A-Z</button>
      </header>
      <br></br>

      <Table />

    </div>
  );
}

export default App;