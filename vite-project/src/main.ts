import 'bulma/css/bulma.css';
import { getNavbar } from './components/navbar';
import { setContainerPageInnerHtml } from './components/container';
import { getProductsToExpirePage } from './components/product-to-expire';
import { getProductToExpireRequest } from './services/getProductToExpire';

async function main(){
    const navbarElement = getNavbar();
    const productsToExpireData = await getProductToExpireRequest();
    const productToExpire = getProductsToExpirePage({ data: productsToExpireData });
    const containerElement = setContainerPageInnerHtml({ page: productToExpire });

    document.getElementById("app")!.appendChild(navbarElement);
    document.getElementById("app")!.appendChild(containerElement);
}
await main();
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
