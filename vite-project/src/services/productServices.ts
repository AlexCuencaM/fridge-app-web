import { BACKEND_URL, post } from "../lib/utils";
import type { Products } from "../models/Products";
export const getProductsRequest = async () =>{
    const response = (await fetch(`${BACKEND_URL}products`)).json();
    return response as Promise<Products[]>;
}
export const postProductsRequest = async (data: Omit<Products, 'id'>) =>{
    const response = await post(`${BACKEND_URL}products`, data);
    return response;
}