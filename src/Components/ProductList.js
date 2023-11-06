const ProductList = (props) =>{
    // console.log(props)
    return (
        <li id={props.productId} className="m-2">
            {props.price} - {props.category} - 
        {props.name} <button onClick={props.delete} className='btn btn-danger'>Delete</button>
        </li>
    )
}
export default ProductList;