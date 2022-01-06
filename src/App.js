import { Routes ,Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home.jsx';
import Confirmation from './components/Confirmation/Confirmation.jsx';
import Success from './components/Success/Success.jsx';

function App() {
  return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </main>
    )
}

export default App;
