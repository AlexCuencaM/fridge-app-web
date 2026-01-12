import { BACKEND_URL, post } from "../lib/utils";
import { ProductLine } from "../models/ProductLine";
export const getProductToExpireRequest = async () =>{
    const response = (await fetch(`${BACKEND_URL}product-lines/next-to-expire`)).json();
    return response as Promise<ProductLine[]>;
}
export const postProductLineRequest = async (productLine: Omit<ProductLine, "id">) =>{
    productLine.ExpiryDate = new Date(productLine.ExpiryDate);
    const response = await post(`${BACKEND_URL}product-lines`, productLine)
    return response;
}