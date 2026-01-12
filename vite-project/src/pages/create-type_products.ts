import { TypeProduct } from "../models/TypeProduct";
import { toTypeProductsPage } from "../router";
import { postTypeProductRequest } from "../services/productTypeServices";

export const postTypeProductsPage = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <h1 class="title">Crear Tipo de Producto</h1>
  `;
  container.appendChild(typeProductForm());
  return container;
}
const typeProductForm = () => {
  const form = document.createElement('form');
  form.innerHTML = `
    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <input class="input" type="text" placeholder="Descripción del tipo de producto">
      </div>
    </div>
    <button type="submit" class="button is-primary">Crear Tipo de Producto</button>
  `;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const descriptionInput = form.querySelector('input[placeholder="Descripción del tipo de producto"]') as HTMLInputElement;
    const newTypeProduct = {
      description: descriptionInput.value,
    } as TypeProduct;
    try {
      // Aquí deberías llamar a la función del servicio para crear el tipo de producto
      await postTypeProductRequest(newTypeProduct);
      alert('Tipo de producto creado exitosamente');
      await toTypeProductsPage();
      // Redirigir a la página de tipos de productos después de la creación
    } catch (error) {
        alert('Error al crear el tipo de producto');
    }
    });
    return form;
}