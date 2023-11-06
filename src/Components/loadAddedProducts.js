const loadAddedProducts = () =>{
    const totalProducts = Object.values(localStorage);
    const products ={
        electronics : [],
        food:[],
        skincare:[]
    }
    totalProducts.forEach(element => {
        element = JSON.parse(element)
        // console.log(element.category);
        if(element.category==="electronics") products.electronics.push(element);
        else if(element.category==="food") products.food.push(element);
        else products.skincare.push(element);
    });
    return products;
}
export default loadAddedProducts;