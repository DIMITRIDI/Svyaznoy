import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Header, Footer } from "./components";

import { Home, Cart, Contact, Login, ProductDetails, Register, Reset, Shop } from "./pages";

import './App.scss';

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={ <Navigate to="home" /> } />
               <Route path="home" element={ <Home /> } />
               <Route path="shop" element={ <Shop /> } />
               <Route path="shop/:id" element={ <ProductDetails /> } />
               <Route path="favorite" element={ <Cart /> } />
               <Route path="cart" element={ <Cart /> } />
               <Route path="contact" element={ <Contact /> } />
               <Route path="login" element={ <Login /> } />
               <Route path="register" element={ <Register /> } />
               <Route path="reset" element={ <Reset /> } />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App;
