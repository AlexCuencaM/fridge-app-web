import { toCreateProductsPage, toHomePage, toProductsPage } from "../router";

export const getNavbar = () => {
  const navbar = document.createElement('div');
  navbar.innerHTML = `
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand" id="home-view">
        <a class="navbar-item">FridgeApp</a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                Productos
                </a>

                <div class="navbar-dropdown">
                    <a class="navbar-item" id ="create_products-view">
                        Crear
                    </a>
                    <a class="navbar-item" id = "products-view">
                        Ver
                    </a>
                </div>
            </div>
            <a class="navbar-item">
                Linea Producto
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                Tipo de Productos
                </a>

                <div class="navbar-dropdown">
                    <a class="navbar-item">
                        Crear
                    </a>
                    <a class="navbar-item">
                        Ver
                    </a>
                </div>
            </div>
        </div>
    </div>
    </nav>
  `;
  navbar.querySelector("#home-view")!.addEventListener("click", () => {
    toHomePage().then();
  });
  navbar.querySelector("#products-view")!.addEventListener("click", () => {
    toProductsPage().then();
  });
  navbar.querySelector("#create_products-view")!.addEventListener("click", () => {
    toCreateProductsPage().then();
  });
// 
  return navbar.firstElementChild as HTMLElement;
}