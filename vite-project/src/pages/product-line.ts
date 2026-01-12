import { ProductLine } from "../models/ProductLine";
import { toHomePage } from "../router";
import { postProductLineRequest } from "../services/productLineServices";

export const createProductLinePage = () =>{
    const container = document.createElement('div');
    container.innerHTML = `
        <h1 class="title">Crear Línea de Producto</h1>
    `;
    container.appendChild(productLineForm());
    return container;
}
const productLineForm = () => {
    const form = document.createElement('form');
    form.innerHTML = `
        <div class="field">
            <label class="label">Producto id</label>
            <div class="control">
                <input class="input" type="number" placeholder="Producto id">
            </div>
        </div>
        <div class="field">
            <label class="label">Stock</label>
            <div class="control">
                <input class="input" type="number" placeholder="Stock">
            </div>
        </div>
        <div class="field">
            <label class="label">Precio</label>
            <div class="control">
                <input class="input" type="number" placeholder="Precio">
            </div>
        </div>

        <div class="field">
            <label class="label">Fecha de Vencimiento</label>
            <div class="control">
            <input class="input" type="date" placeholder="Fecha de vencimiento">
            </div>
        </div>
        <button type="submit" class="button is-primary">Crear Línea de Producto</button>
    `;
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const productId = form.querySelector('input[placeholder="Producto id"]') as HTMLInputElement;
        const stockInput = form.querySelector('input[placeholder="Stock"]') as HTMLInputElement;
        const priceInput = form.querySelector('input[placeholder="Precio"]') as HTMLInputElement;
        const expirationDateInput = form.querySelector('input[placeholder="Fecha de vencimiento"]') as HTMLInputElement;
        const newProductLine = {
            productId: Number(productId.value),
            stock: Number(stockInput.value),
            price: Number(priceInput.value),
            ExpiryDate: expirationDateInput.value,
        } as ProductLine;
        try{
            await postProductLineRequest(newProductLine);
            alert('Línea de Producto creada exitosamente');
            await toHomePage();

        } catch (error){
            alert('Error al crear la Línea de Producto');
        }

        // Lógica para manejar el envío del formulario

    });
    return form;
}