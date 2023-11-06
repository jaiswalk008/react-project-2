const Input = (props) =>{
    return(
        <>
        <label  className='form-label' htmlFor={props.id}>{props.label}</label>
        <input onChange={props.change} value={props.value} className='form-control' type={props.type} id={props.id} required/>
        </>
    )
}
export default Input;