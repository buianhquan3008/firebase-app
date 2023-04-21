// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Authentication from './routers/authentication/authentication';
import Home from './routers/home/home.component';
import Navigation from './routers/navigation/navigation.component';
import Shop from './routers/shop/shop.component';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
      </Route>
    </Routes>
  );
}

export default App;
