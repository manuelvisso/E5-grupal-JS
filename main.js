const stockProductos = [
    {id: 1, nombre: "Pizza de Anana", descripcion: "Nunca falta el raro", precio: 500, img: './assets/img-nuevas/pizza-anana.jpg'},
    {id: 2, nombre: "Pizza Comun", descripcion: "Nunca te falla", precio: 300, img: './assets/img-nuevas/pizza-comun.jpg'},
    {id: 3, nombre: "Pizza Napolitana", descripcion: "La Italiana", precio: 700, img: './assets/img-nuevas/pizza-napolitana.jpg'},
    {id: 4, nombre: "Pizza de Peperoni", descripcion: "La mas pedida", precio: 650, img: './assets/img-nuevas/pizza-peperoni.jpg'},
    {id: 5, nombre: "Tacos de Carne", descripcion: "Clasico de Mexico", precio: 1000, img: './assets/img-nuevas/tacos-carne.jpg'},
    {id: 6, nombre: "Tacos de Pollo", descripcion: "Los de chicken litte", precio: 1100, img: './assets/img-nuevas/tacos-pollo.jpg'},
    {id: 7, nombre: "Burga Especial", descripcion: "Clasica de siempre", precio: 550, img: './assets/img-nuevas/hamburguesa-especial.jpg'},
    {id: 8, nombre: "Burga Panceta", descripcion: "Pura panceta!", precio: 650, img: './assets/img-nuevas/hamburguesa-panceta.jpg'},
    {id: 9, nombre: "Burga de Pollo", descripcion: "Raaaaaroooooo", precio: 750, img: './assets/img-nuevas/hamburguesa-pollo.jpg'},
    {id: 10, nombre: "Burga Triple", descripcion: "Que mas queres?", precio: 850, img: './assets/img-nuevas/hamburguesa-triple.jpg'},
    {id: 11, nombre: "El de chocolate", descripcion: "Batido Clasico", precio: 250, img: './assets/img-nuevas/batido-chocolate.jpg'},
    {id: 12, nombre: "El de durazno", descripcion: "Batido Tropical", precio: 150, img: './assets/img-nuevas/batido-durazno.jpg'},
    {id: 13, nombre: "El de Frutilla", descripcion: "Batido Especial", precio: 300, img: './assets/img-nuevas/batido-frutilla.jpg'},
    ]


const productContainer = document.getElementById('product-stock');

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('filter-results-card')
    div.innerHTML = `
    <article class="filter-results-card">
            <div class="filter-img-container">
              <img
                src=${producto.img} alt=""
              />
            </div>
            <div class="filter-card-text">
              <div>
                <p class="card-title">${producto.nombre}</p>
                <p class="card-subtitle">${producto.descripcion}</p>
                <p class="card-price">$ ${producto.precio}</p>
              </div>
              <div class="filter-btn-container">
                <button type="button" class="agregar-btn" id=agregar${producto.id}>Agregar</button>
              </div>
            </div>
          </article>
    `
    productContainer.appendChild(div)
})