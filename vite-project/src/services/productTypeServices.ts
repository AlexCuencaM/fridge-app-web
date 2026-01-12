import { BACKEND_URL, post } from "../lib/utils";
import type { TypeProduct } from "../models/TypeProduct";
export const getTypeProductsRequest = async () =>{
    const response = (await fetch(`${BACKEND_URL}type-products`)).json();
    return response as Promise<TypeProduct[]>;
}
export const postTypeProductRequest = async (typeProduct: TypeProduct) =>{
    const response = await post(`${BACKEND_URL}type-products`, typeProduct);
    return response;
}