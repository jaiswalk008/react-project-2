const deleteFunction = (productId, products) =>{
    const updatedProducts = products.filter((element => element.id!==productId))
    localStorage.removeItem(productId);
    return updatedProducts;
}
export default deleteFunction;