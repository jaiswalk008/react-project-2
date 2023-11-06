import { useReducer } from 'react';
import './AddProduct.css'
import Input from './Input';
const reducer = (state,action) =>{
    if(action.type==="ID_INPUT"){
        return {id:action.val , price:state.price , name:state.name , category:state.category};
    }
    if(action.type==="PRICE_INPUT"){
        return {id:state.id, price:action.val , name:state.name , category:state.category};
    }
    if(action.type==="NAME_INPUT"){
        return {id:state.id, price:state.price , name:action.val , category:state.category};
    }
    if(action.type==="CATEGORY_INPUT"){
        return {id:state.id, price:state.price , name:state.name , category:action.val};
    }

    return {id:"" , price:"" , name:"",category:"electronics" };
}
const AddProduct = (props) =>{

    const [state , dispatch] = useReducer(reducer , 
        {id:"" , price:"" , name:"",category:"electronics" })
    const idChange= (e)=>{
        dispatch({type:'ID_INPUT' , val:e.target.value})
    }
    const priceChange= (e)=>{
        dispatch({type:'PRICE_INPUT' , val:e.target.value})
    }
    const nameChange= (e)=>{
        dispatch({type:'NAME_INPUT' , val:e.target.value})
    }
    const categoryChange= (e)=>{
        dispatch({type:'CATEGORY_INPUT' , val:e.target.value})
    }
    
    const submitHandler= (e) =>{
        e.preventDefault();
        // console.log(state)
        const productDetails={
            id:state.id,
            price:state.price,
            name:state.name,
            category:state.category
        }
        // console.log(productDetails)
        props.onAddProduct(productDetails);
        localStorage.setItem(state.id , JSON.stringify(productDetails));
    }
    return(
        <div className='container d-flex justify-content-center'>
            <form onSubmit={submitHandler}>
                <Input change={idChange} value={state.id} type='number' id='id' label={"Product Id"}></Input>
                <Input change={priceChange} value={state.price} type='number' id='price' label={"Product Price"}></Input>
                <Input change={nameChange} value={state.name} type='text' id='name' label={"Product Name"}></Input>
                <label className='form-label'>Choose a category:</label>
                <select onChange={categoryChange} className='mt-3'> 
                    <option   value="electronics">Electronics</option>
                    <option value="food">Food</option>
                    <option value="skincare">Skincare</option>
                </select><br></br>
                <button className='btn w-100 mb-2 btn-dark'>Add Product</button>
            </form>
        </div>
    )
}
export default AddProduct;