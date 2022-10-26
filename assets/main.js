const products = document.querySelector("#product-menu");
const categoryContainer = document.querySelector(".category-card-container");
const categorias = document.querySelectorAll(".categoria");
const resultsTitle = document.querySelector(".results-title");
const productsCart=document.querySelector(".cart-container");
const precioFinal=document.querySelector(".cart-total-amount");
const btnComprar=document.querySelector(".comprar-btn");
const cartBtn=document.querySelector(".cart-close-btn");
const btnDelete=document.querySelector(".delete-order");
const cartMenu=document.querySelector(".cart");
const successModal = document.querySelector(".add-modal");



let cart=JSON.parse(localStorage.getItem("cart"))||[];

const saveLocalStorage=(cartList)=>{

localStorage.setItem("cart",JSON.stringify(cartList));

}





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



//agregar al carrito

const renderCartProduct=(cartProduct)=>{

 const { id,nombre ,descripcion, precio, img ,cantidad,Total} = cartProduct;
return`
<div class="cart-items-container">
            <article class="cart-card">
              
                <img src${img} alt=" Producto en el carrito" />
              </div>
              <div class="product-info">
                <p class="card-title">${nombre}</p>
                <p class="card-subtitle">${descripcion}</p>
                <p class="card-price">${precio}</p>
              </div>
              <div class="cart-btn-container">
                <button type="button" class="restar-btn"data-id=${id} >-</button>
                <p>X</p>
                <button type="button" class="sumar-btn" data-id=${id}>+</button>
              <p class="cantidad">${cantidad}</p>

              </div>

              </article>
              <div class="cart-subtotal-container">
              <p>
                <span class="cart-subtotal-title">Subtotal:</span>
                <span class="cart-subtotal-amount">$4.890</span>
              </p>
              <p>
                <span class="cart-subtotal-title">Envío:</span>
                <span class="cart-subtotal-amount">Gratis</span>
              </p>
            </div>
            <div class="cart-linea"></div>
            <div class="cart-subtotal-container">
              <p>
                <span class="cart-total-title">Total:</span>
                <span class="cart-total-amount">${Total}</span>
              </p>
            </div>
            <div class="cart-comprar-container">
              <button type="submit" class="comprar-btn">COMPRAR</button>
              <button type="submit" class="delete-order">CANCELAME</button>
              <a href="#vermas" class="ver-mas">Ver más productos</a>
            </div>
            

`

}

const renderCart=()=>{

if (!cart.length){
productsCart.innerHTML=`<p class="nada">No Hay Productos en el carrito.</p>`;
return;

}
productsCart.innerHTML=cart.map(renderCartProduct).join("")
}


const Total = () => {
  return cart.reduce(
    (acc, cur) => acc + Number(cur.precio) * Number(cur.cantidad),
    0
  );
};

const showTotal=()=>{

  Total.innerHTML=`${Total().toFixed(2)}`;

}

const disableBtn=(btn)=>{

if(!cart.length){

btn.classList.add("disabled")

return;
}
btn.classList.remove("disabled")

}


const addUnitToProduct=(product)=>{
  cart=cart.map((cartProduct)=>{
    return cartProduct.id===product.id
    ?{...cartProduct,cantidad:cartProduct.cantidad+1}  
:cartProduct
});
};

const createCartProduct=(product)=>{
cart=[...cart,{...product,cantidad:1}];

};


const existe=(product)=>{
return cart.find((item)=>item.id===product.id)

};

const crearData=(id,nombre ,descripcion, precio, img ,cantidad)=>{
return{id,nombre ,descripcion, precio, img ,cantidad}

};

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disableBtn(btnComprar);
  disableBtn(btnDelete);
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};


const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const {id,nombre ,descripcion, precio, img ,cantidad } = e.target.dataset;

  const product = crearData(id,nombre ,descripcion, precio, img ,cantidad);

  if (existe(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad ");
  } else {
   createCartProduct(product);
    showSuccessModal("El producto se ha agregado al carrito");
  }
  checkCartState();
};

const extraerProduct=(existe)=>{

cart=cart.map((cartProduct)=>{

return cartProduct.id===existe.id
? { ...cartProduct, cantidad: cartProduct.cantidad - 1 }
      : cartProduct;
  });
};


const removeProductFromCart = (existe) => {
  cart = cart.filter((product) => product.id !== existe.id);
  checkCartState();
};

const sacarProducto = (id) => {
  const existe= cart.find((item) => item.id === id);


  if (existe.cantidad === 1) {
    if (window.confirm("¿Desea Eliminar el producto del carrito?")) {
      removeProductFromCart(existe);
    }
    return;
  }
  extraerProduct(existe);
};

const sumarProducto = (id) => {
  const existe = cart.find((item) => item.id === id);
  addUnitToProduct(existe);
};

const cantidades = (e) => {
  if (e.target.classList.contains("down")) {
    sacarProducto(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    sumarProducto(e.target.dataset.id);
  }
  checkCartState();
};
const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completarCarrito = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

const completarCompra = () => {
  completarCarrito(
    "¿Desea completar su compra?",
    "La compra se ha realizado correctamente"
  );
};
const BorrarCarrito= () => {
  completarCarrito(
    "¿Está seguro de que desea vaciar el carrito?",
    "No hay productos en el carrito"
  );
};





  const init = () => {
  initialRender();
  categoryContainer.addEventListener("click", applyFilter);
  categoryContainer.addEventListener("click", renderPopularProducts)
 

  ;
};

init();
