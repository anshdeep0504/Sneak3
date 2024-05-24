// App.js
import React from 'react';
import Login from './Login'; // Corrected component name
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter> // Corrected component usage
  );
}

export default App;
