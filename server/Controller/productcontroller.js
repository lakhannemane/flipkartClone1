import products from "../Module/productschema.js";



export const getProducts = async (request, response) => {
    try {
        const Product = await products.find({});
        response.json(Product);
    }catch (error) {

    }
}



export const getProductById = async (request, response) => {
    try {
        const Product = await products.findOne({ 'id': request.params.id });
        console.log(request.params.id);
        console.log(Product);
        console.log('id');
        // console.log(products);
        response.json(Product);
        
    }catch (error) {
        console.log('error' , error.message)
    }
}