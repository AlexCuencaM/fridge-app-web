import { TypeProduct } from "../models/TypeProduct";

interface getTypeProductProps {
    data: TypeProduct[];
}
export const getTypeProductsPage = (props: getTypeProductProps) => {
    const container = document.createElement('div');
    container.innerHTML = `
        <h1 class="title">Tipos de Productos</h1>
    `;
    container.appendChild(typeProductsTable(props.data));
    return container;
}
const typeProductsTable = (data: TypeProduct[]) => {
    const table = document.createElement('table');
    table.className = "table is-fullwidth is-striped is-hoverable";
    const results = data.map(typeProduct => `
                <tr>
                    <td>${typeProduct.id}</td>
                       <td>${typeProduct.description}</td>
                </tr>
            `).join('');
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Descripción</th>
            </tr>
        </thead>
        <tbody>${results}</tbody>
    `;
    return table;
}