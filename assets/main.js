const products = document.querySelector("#product-menu");
const categoryContainer = document.querySelector(".category-card-container");
const categorias = document.querySelectorAll(".categoria");
const resultsTitle = document.querySelector(".results-title");

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

const renderTitle = (categoria) => {
  if (categoria === "popular") {
    resultsTitle.innerHTML = `Los más populares`;
  } else {
    resultsTitle.innerHTML = `${categoria}`;
  }
};

//PARA FILTRAR LOS OBJETOS QUE CUMPLAN CON LA CATEGORIA
const filtrarProductos = (categoria) => {
  const filterProducts = stockProductos.filter(
    (el) => el.categoria === categoria
  );

  if (filterProducts.length > 0) {
    products.innerHTML = filterProducts.map(renderProduct).join("");
  } else {
    renderError();
  }
};

//PARA PASARLE EL PARAMETRO A LA FUNCION ANTERIOR Y RENDERIZAR EL TITULO
const filteredProducts = (e) => {
  filtrarProductos(e.target.dataset.categoria);
  renderTitle(e.target.dataset.categoria);
};

//MENSAJE DE ERROR POR FALTA DE STOCK
const renderError = () => {
  products.innerHTML = `          <p class="error-msg">
  Lo sentimos, en este momento no disponemos stock de estos productos.
</p>`;
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
