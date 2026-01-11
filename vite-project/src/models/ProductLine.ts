import { Products } from "./Products";

export class ProductLine {
	id: number = 0;
	productId: number = 0;
	stock: number = 0;
	price: number = 0;
	ExpiryDate: Date | string = new Date();
	product: Products | null = null;
}
