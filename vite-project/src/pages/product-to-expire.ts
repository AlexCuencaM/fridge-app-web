import type { ProductLine } from "../models/ProductLine";

interface getProductsToExpirePageProps{
    data: ProductLine[];
}
export const getProductsToExpirePage = (props: getProductsToExpirePageProps) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <h1 class="title">Productos próximos a vencer</h1>
  `;
  container.appendChild(productsTable(props.data));
  return container as HTMLElement;
}

const productsTable = (data: ProductLine[]): HTMLTableElement => {
    const table = document.createElement('table');
    table.className = "table is-fullwidth is-striped is-hoverable";
    const results = data.map(productLine => `
                <tr>
                    <td>${productLine.product?.name ?? 'N/A'}</td>
                    <td>${productLine.stock}</td>
                    <td>${new Date(productLine.ExpiryDate).toLocaleDateString()}</td>
                    <td>${productLine.price.toFixed(2) ?? 'N/A'}</td>
                </tr>
            `).join('');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th><abbr title="Fecha de expiración">Expira</abbr></th>
                <th><abbr title="Precio">Precio</abbr></th>
            </tr>
        </thead>
        <tfoot>
            <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th><abbr title="Fecha de expiración">Expira</abbr></th>
            <th><abbr title="Precio">Precio</abbr></th>
            </tr>
        </tfoot>
        <tbody>
            ${results}
        </tbody>    
    `;
    return table;
}