import 'bulma/css/bulma.css';
import { getNavbar } from './components/navbar';
import { toHomePage } from './router';

async function main(){
    const navbarElement = getNavbar();
    document.getElementById("app")!.appendChild(navbarElement);
    await toHomePage();
}
await main();
