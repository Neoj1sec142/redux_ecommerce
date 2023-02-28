import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from './Homepage'
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App