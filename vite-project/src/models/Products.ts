import { ProductLine } from "./ProductLine";
import { TypeProduct } from "./TypeProduct";

export class Products {
	id: number = 0;
	name: string = '';
	productLine: ProductLine[] = [];
	typeProductId?: number;
	typeProduct?: TypeProduct;
    // constructor(id: number = 0, name: string = '') {
    //     this.id = id;
    //     this.name = name;
    // }
}