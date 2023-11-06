import React, { useEffect, useState } from 'react';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import deleteFunction from './Components/deleteFunction';
import loadAddedProducts from './Components/loadAddedProducts';
function App() {
  
  const [electronicItems , setElectronicItems] = useState([]);
  const [foodItems , setFoodItems] = useState([]);
  const [skincareItems , setSkincareItems] = useState([]);

  useEffect(() =>{
    //function for showing products from local storage on reloading the screen
    const products = loadAddedProducts();
    console.log(products);
    setElectronicItems(products.electronics);
    setFoodItems(products.food);
    setSkincareItems(products.skincare);
  },[])
  const addProductHandler = (product) =>{
    if(product.category==="electronics"){
      const updatedProducts = [...electronicItems , product];
      setElectronicItems(updatedProducts);
    }
    else if(product.category==="food"){
      const updatedProducts = [...foodItems , product];
      setFoodItems(updatedProducts);
    }
    else{
      const updatedProducts = [...skincareItems , product];
      setSkincareItems(updatedProducts);
    }
    
  }
  const deleteHandler = (e) =>{
    const li = e.target.parentElement;
    const productId = li.id;
    const category = li.textContent.split('-')[1].trim();
    if(category==="electronics"){
      const updatedProducts = deleteFunction(productId, electronicItems);
      setElectronicItems(updatedProducts);
    }
    else if(category==="food"){
      const updatedProducts = deleteFunction(productId , foodItems);
      setFoodItems(updatedProducts);
    }
    else{
      const updatedProducts = deleteFunction(productId,skincareItems);
      setSkincareItems(updatedProducts);
    }
  }
  return (
    <div className="App">
      <AddProduct onAddProduct ={addProductHandler}/>
      <h2 className='text-center text-decoration-underline mb-1'>Products:</h2>
      <h3>Electronics Items</h3>
      {electronicItems.map((element) => {
        return <ProductList key={element.id} productId={element.id} price = {element.price} category ={element.category} 
       name= {element.name} delete={deleteHandler}></ProductList>
      })}
      <h3>Food Items</h3>
      {foodItems.map((element) => {
        return <ProductList key={element.id} productId={element.id} price = {element.price} category ={element.category} 
       name= {element.name} delete={deleteHandler}></ProductList>
      })}
      <h3>Skincare Items</h3>
      {skincareItems.map((element) => {
        return <ProductList  key={element.id} productId={element.id} price = {element.price} category ={element.category} 
       name= {element.name} delete={deleteHandler}></ProductList>
      })}
    </div>
  );
}

export default App;
