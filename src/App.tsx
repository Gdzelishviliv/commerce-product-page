import { useState } from "react";
import "./App.css"
import Header from "./components/header/Header";
import MainPage from "./pages/mainPage/MainPage";


const App = () => {
  const [cartItems,setCartItems]:any=useState([]);
  
  console.log(cartItems)
  
  const addToCart=(item: any)=>{
    setCartItems([...cartItems,item]);
  }
  const removeFromCart = (index:any) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };
  return (
    <>
      <Header cartItems={cartItems} removeFromCart={removeFromCart} />
      <MainPage addToCart={addToCart}/>
    </>
  );
};

export default App;
