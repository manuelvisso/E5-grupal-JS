const products = document.querySelector("#product-menu");
const categoryContainer = document.querySelector(".category-card-container");
const categorias = document.querySelectorAll(".categoria");

const renderProduct = (product) => {
  const { nombre, descripcion, precio, img } = product;

  return `
  <article class="filter-results-card">
    <div class="filter-img-container">
      <img
        src="${img}"
        alt=""
        srcset=""
      />
    </div>
    <div class="filter-card-text">
      <div>
        <p class="card-title">${nombre}</p>
        <p class="card-subtitle">${descripcion}</p>
        <p class="card-price">$ ${precio}</p>
      </div>
      <div class="filter-btn-container">
        <button type="button" class="agregar-btn">Agregar</button>
      </div>
    </div>
  </article>`;
};

//PARA FILTRAR LOS OBJETOS QUE CUMPLAN CON LA CATEGORIA
const filtrarProductos = (categoria) => {
  const filterProducts = stockProductos.filter(
    (el) => el.categoria === categoria
  );
  products.innerHTML = filterProducts.map(renderProduct).join("");
};

//PARA PASARLE EL PARAMETRO A LA FUNCION ANTERIOR Y RENDERIZAR
const filteredProducts = (e) => {
  filtrarProductos(e.target.dataset.categoria);
};

// cambiar el estilo del boton seleccionado
const changeState = (selectedBtn) => {
  const categ = [...categorias];
  categ.forEach((btn) => {
    if (btn.dataset.categoria !== selectedBtn) {
      btn.classList.remove("active");
      return;
    }
    btn.classList.add("active");
  });
};

const changeFilter = (e) => {
  const selectedBtn = e.target.dataset.categoria;
  changeState(selectedBtn);
};

// ejecuta el filtrado y cambio de estilo del botón
const applyFilter = (e) => {
  filteredProducts(e);
  changeFilter(e);
};

const init = () => {
  initialRender();
  categoryContainer.addEventListener("click", applyFilter);
  categoryContainer.addEventListener("click", renderPopularProducts);
};

init();
