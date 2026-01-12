import { Products } from "../models/Products";

interface getProductProps {
    data: Products[];
}
export const getProductsPage = (props: getProductProps) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <h1 class="title">Productos</h1>
  `;
  container.appendChild(productsTable(props.data));
  return container;
}

const productsTable = (data: Products[]): HTMLTableElement => {
    const table = document.createElement('table');
    table.className = "table is-fullwidth is-striped is-hoverable";
    const results = data.map(product => `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                </tr>
            `).join('');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
            </tr>
        </tfoot>
        <tbody>
            ${results}
        </tbody>    
    `;
    return table;
}