import { Products } from "../models/Products";
import { toProductsPage } from "../router";
import { postProductsRequest } from "../services/productServices";

export const postProductsPage = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <h1 class="title">Crear Producto</h1>
  `;
  container.appendChild(productForm());
  return container;
}
const productForm = () => {
  const form = document.createElement('form');
  form.innerHTML = `
    <div class="field">
      <label class="label">Nombre</label>
      <div class="control">
        <input class="input" type="text" placeholder="Nombre del producto">
      </div>
    </div>
    <div class="field">
      <label class="label">Tipo de Producto</label>
      <div class="control">
        <input class="input" type="number" placeholder="Tipo de producto">
      </div>
    </div>
    <button type="submit" class="button is-primary">Crear Producto</button>
  `;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameInput = form.querySelector('input[placeholder="Nombre del producto"]') as HTMLInputElement;
    const typeInput = form.querySelector('input[placeholder="Tipo de producto"]') as HTMLInputElement;
    const newProduct = {
      name: nameInput.value,
      typeProductId: Number(typeInput.value),
    } as Products;
    try {
      await postProductsRequest(newProduct);
      alert('Producto creado exitosamente');
      await toProductsPage();
    } catch (error) {
      alert('Error al crear el producto');
    }
  });
  return form;
}