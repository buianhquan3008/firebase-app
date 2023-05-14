import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Authentication from './routers/authentication/authentication.component';
import Home from './routers/home/home.component';
import Navigation from './routers/navigation/navigation.component';
import Shop from './routers/shop/shop.component';
import { checkUserSession } from './store/user/user.action';
import { addCollectionAndDocuments } from './utils/firebase.util';
import SHOP_DATA from './shop-data';
import Checkout from './routers/checkout/checkout.component';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // addCollectionAndDocuments('test', SHOP_DATA);
    dispatch(checkUserSession());
  }, []);
  console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY, 'process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY')
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
