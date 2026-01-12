import { setContainerPageInnerHtml } from "./components/container";
import { getProductsToExpirePage } from "./pages/product-to-expire";
import { getProductsPage } from "./pages/products";
import { getProductsRequest } from "./services/productServices";
import { getProductToExpireRequest } from "./services/productLineServices";
import { postProductsPage } from "./pages/create-products";
import { createProductLinePage } from "./pages/product-line";
import { getTypeProductsPage } from "./pages/type-products";
import { getTypeProductsRequest } from "./services/productTypeServices";
import { postTypeProductsPage } from "./pages/create-type_products";

export const toHomePage = async () => {
    const productsToExpireData = await getProductToExpireRequest();
    const productToExpire = getProductsToExpirePage({ data: productsToExpireData });
    const containerElement = setContainerPageInnerHtml({ page: productToExpire });
    document.getElementById("app")!.appendChild(containerElement);
}

export const toProductsPage = async () => {
    const products = await getProductsRequest();
    const productsPage = getProductsPage({ data: products });
    const containerElement = setContainerPageInnerHtml({ page: productsPage });
    document.getElementById("app")!.appendChild(containerElement);
}

export const toCreateProductsPage = async () => {
    const productPage = postProductsPage();
    const containerElement = setContainerPageInnerHtml({ page: productPage });
    document.getElementById("app")!.appendChild(containerElement);
}

export const toCreateProductLinePage = async () => {
    const productLinePage = createProductLinePage();
    const containerElement = setContainerPageInnerHtml({ page: productLinePage });
    document.getElementById("app")!.appendChild(containerElement);
}

export const toTypeProductsPage = async () => {
    const results = await getTypeProductsRequest();
    const createTypeProductPage = getTypeProductsPage({ data: results });
    const containerElement = setContainerPageInnerHtml({ page: createTypeProductPage });
    document.getElementById("app")!.appendChild(containerElement);
}

export const toCreateTypeProductPage = async () =>{
    const typeProductPage = postTypeProductsPage();
    const containerElement = setContainerPageInnerHtml({ page: typeProductPage });
    document.getElementById("app")!.appendChild(containerElement);
}