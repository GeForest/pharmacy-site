import React from "react";
import { Routes,Route } from "react-router-dom";

import './styles/global.css'
import Header from "./components/Header/Header";
import PageShop from "./components/Pages/PageShop/PageShop"
import PageShopCart from "./components/Pages/PageShopCart/PageShopCart"
import { AppProvider } from "./context/AppContext"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
          <AppProvider>
          <Routes>
            <Route path='/' element={<PageShop />}></Route>
            <Route path='cart' element={<PageShopCart />}></Route>
          </Routes>
          </AppProvider>
      </div>
    </div>
  );
}

export default App;
