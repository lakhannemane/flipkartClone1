import { products } from "./constants/Data.js";
import product from "./Module/productschema.js";

const DefaultData = async () => {
    try {
        await product.deleteMany({});
        await product.insertMany(products);
        console.log("data base imported succesfullly");
    } catch (error) {
        console.log('error ', error.message)
    }
}

export default DefaultData;