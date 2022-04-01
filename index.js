import { render } from "react-dom";
import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Checkout from "./pages/checkout";
import Login from "./pages/login";
import Products from "./pages/products"
import Register from "./pages/register"
import Announcements from "./components/Announcements"
import Product from "./components/product"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Announcements />
  <Routes>
    <Route path = "/" element = {<App />}>
     <Route path = "/checkout" element = {<Checkout />} />
     <Route path = "/login" element = {<Login />} />
     <Route path = "/register" element = {<Register />} />
     <Route path = "/products" element = {<Products />} />
     <Route path = "/products/:id" element ={<Product />}/>
     <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
  </Routes>
  </BrowserRouter>,
  rootElement
);
