import { BACKEND_URL } from "../lib/utils";
import { ProductLine } from "../models/ProductLine";
export const getProductToExpireRequest = async () =>{
    const response = (await fetch(`${BACKEND_URL}product-lines/next-to-expire`)).json();
    return response as Promise<ProductLine[]>;
}