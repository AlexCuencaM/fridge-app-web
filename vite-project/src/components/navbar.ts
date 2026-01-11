export const getNavbar = () => {
  const navbar = document.createElement('div');
  navbar.innerHTML = `
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <p class="navbar-item">FridgeApp</p>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        <a class="navbar-item">
            Producto
        </a>

        <a class="navbar-item">
            Tipo Producto
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
            Linea de Productos
            </a>

            <div class="navbar-dropdown">
            <a class="navbar-item">
                About
            </a>
            <a class="navbar-item is-selected">
                Jobs
            </a>
            <a class="navbar-item">
                Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
                Report an issue
            </a>
            </div>
        </div>
        </div>
    </div>
    </nav>
  `;
  return navbar.firstElementChild as HTMLElement;
}