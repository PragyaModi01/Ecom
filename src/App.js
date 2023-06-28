import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Product from './components/Product';
import Front from './components/Front';
import Footer from './components/Footer';
import Login from './components/Login';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const [product, setProduct] = useState([
      {
        "id": "1",
        "img": "img05.jpg",
        "name": "Skin Care",
        "price":400
    },

    {
        "id": "2",
        "img": "img06.webp",
        "name": "Beauty Tools",
        "price":800
    },

    {
        "id": "1",
        "img": "img07.jpg",
        "name": "Nail Paint",
        "price":650
    },

    {
      "id": "1",
      "img": "img8.webp",
      "name": "Eye Brush",
      "price":650
  },

  {
    "id": "1",
    "img": "img08.jpg",
    "name": "Eye Shades",
    "price":650
},

{
  "id": "1",
  "img": "img09.jpg",
  "name": "Lipstick",
  "price":650
},

])

  const [cart, setCart] = useState([])
  console.log(cart);

  const remove = (id) =>{
    setCart([...cart].filter((value,index) => {
      return id !== index;
    }))
  }

  const removeAll = (id) =>{
    setCart([...cart].filter((value,index) => {
      return id !== index;
    }))
  }

  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    console.log(data);
    setCart([...cart, {...data, quantity:1} ])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }
  return (
    <div className="App">
      
      <Router>
      <Header count={cart.length} handleShow={handleShow}/>
      <Front/>
        <Routes>
          <Route path="/" element={
        showCart ?
        <Product cart={cart} handleShow={handleShow} remove={remove} removeAll={removeAll}/>:
        <Cards product={product} addToCart={addToCart}/>
      }/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
