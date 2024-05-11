import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Checkout } from './containers/Checkout/Checkout';
import { NotFound } from './components/NotFound/NotFound';
import { ContactData } from './containers/ContactData/ContactData';
import { Layout } from './components/Layout/Layout';
import { Orders } from './containers/Orders/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<BurgerBuilder/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/checkout' element={<Checkout/>}>
            <Route path='contactData' element={<ContactData/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
