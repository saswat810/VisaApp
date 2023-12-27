// App.js

import React from 'react';
import WishPage from './WishPage';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Congrats from './Congrats'
const App = () => {
  return (
    <Router>
    <Routes>
    <Route path='/'  element={<WishPage />} exact />
          <Route path='/congrats' element={<Congrats />} exact />
        </Routes>
        </Router>
    // <div>
    //   <WishPage />
    // </div>
  );
};

export default App;
