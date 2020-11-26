import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
      <div className="app">
          <Header/>
          <div className="app-body">
              <Sidebar/>
              {/*Feed*/}
              {/*Widgets*/}
          </div>
      </div>
  );
}

export default App;
