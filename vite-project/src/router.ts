import { setContainerPageInnerHtml } from "./components/container";
import { getProductsToExpirePage } from "./pages/product-to-expire";
import { getProductsPage } from "./pages/products";
import { getProductsRequest } from "./services/productServices";
import { getProductToExpireRequest } from "./services/productLineServices";
import { postProductsPage } from "./pages/create-products";

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
    // const createProductsPage = postcre();
    const productPage = postProductsPage();
    const containerElement = setContainerPageInnerHtml({ page: productPage });
    document.getElementById("app")!.appendChild(containerElement);
}