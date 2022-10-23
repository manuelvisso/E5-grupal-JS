const stockProductos = [
  {
    id: 1,
    nombre: "La Mr. Pit",
    descripcion: "Sólo para expertos",
    precio: 350,
    categoria: "pizzas",
    popular: true,
    img: "./assets/img/pexels-eneida-nieves-905847.jpg",
  },
  {
    id: 2,
    nombre: "¡Q'Jamone!",
    descripcion: "c/jamón crudo",
    precio: 350,
    categoria: "pizzas",
    popular: true,
    img: "./assets/img/pexels-kristina-paukshtite-1146760.jpg",
  },
  {
    id: 3,
    nombre: "La Charly García",
    descripcion: "¡BASTA!",
    precio: 380,
    categoria: "pizzas",
    popular: true,
    img: "./assets/img/pexels-sean-m-166451.jpg",
  },
  {
    id: 4,
    nombre: "La Maradona",
    descripcion: "¡Eterna!",
    precio: 450,
    categoria: "pizzas",
    popular: true,
    img: "./assets/img/pexels-ana-madeleine-uribe-2762939.jpg",
  },
  {
    id: 5,
    nombre: "Picantovich",
    descripcion: "Pica 2 veces",
    precio: 750,
    categoria: "pizzas",
    popular: true,
    img: "./assets/img/pexels-engin-akyurt-2619970.jpg",
  },
  {
    id: 6,
    nombre: "La Hasbulla",
    descripcion: "En honor al 1",
    precio: 990,
    categoria: "pizzas",
    popular: true,
    img: "./assets/img/pexels-pixabay-280453.jpg",
  },
  {
    id: 7,
    nombre: "Leo Messi",
    descripcion: "De pié señores!",
    precio: 10,
    categoria: "pizzas",
    popular: true,
    img: "./assets/img/pexels-sydney-troxell-708587.jpg",
  },
  {
    id: 8,
    nombre: "Nick Gi",
    descripcion: "La que desaparece",
    precio: "Gratis",
    categoria: "pizzas",
    popular: true,
    img: "./assets/img/pexels-cats-coming-365459.jpg",
  },
  {
    id: 9,
    nombre: "Pizza de Anana",
    descripcion: "Nunca falta!",
    precio: 500,
    categoria: "pizzas",
    popular: false,
    img: "./assets/img-nuevas/pizza-anana.jpg",
  },
  {
    id: 10,
    nombre: "Pizza Comun",
    descripcion: "La clasica",
    precio: 300,
    categoria: "pizzas",
    popular: false,
    img: "./assets/img-nuevas/pizza-comun.jpg",
  },
  {
    id: 11,
    nombre: "Pizza Napolitana",
    descripcion: "Desde italia a tu mesa",
    precio: 700,
    categoria: "pizzas",
    popular: false,
    img: "./assets/img-nuevas/pizza-napolitana.jpg",
  },
  {
    id: 12,
    nombre: "Pizza de Peperoni",
    descripcion: "La mas pedida",
    precio: 650,
    categoria: "pizzas",
    popular: false,
    img: "./assets/img-nuevas/pizza-peperoni.jpg",
  },
{ 
id:13,
nombre:"Bennaziana",
descripcion:"La mas completa",
precio:3650,
categoria:"pizzas",
popular:false,
img:"./assets/img/pexels-ana-madeleine-uribe-2762939.jpg",
},
{ 
  id:14,
  nombre:"Tronco-pizza",
  descripcion:"Para todo el dia",
  precio:870,
  categoria:"pizzas",
  popular:false,
  img:"./assets/img/pexels-freestocksorg-391995.jpg",
  },
  

  { 
    id:15,
    nombre:"Papas-Provenzal",
    descripcion:"Van como piña",
    precio:360,
    categoria:"papas",
    popular:false,
    img:"./assets/img/pexels-valeria-boltneva-1893555.jpg",
    },

  {
    id: 16,
    nombre: "Tacos de Carne",
    descripcion: "Lo clasico de Mexico wey!",
    precio: 1000,
    categoria: "mexican",
    popular: false,
    img: "./assets/img-nuevas/tacos-carne.jpg",
  },
  {
    id: 17,
    nombre: "Tacos de Pollo",
    descripcion: "Como el clasico pero de Pollo",
    precio: 1100,
    categoria: "mexican",
    popular: false,
    img: "./assets/img-nuevas/tacos-pollo.jpg",
  },
  {
    id: 18,
    nombre: "Hamburguesa Especial",
    descripcion: "Una clasica de la casa",
    precio: 550,
    categoria: "hamburguesas",
    popular: false,
    img: "./assets/img-nuevas/hamburguesa-especial.jpg",
  },
  {
    id:19,
    nombre: "Hamburguesa de Panceta",
    descripcion: "Pura panceta como te gusta!",
    precio: 650,
    categoria: "hamburguesas",
    popular: false,
    img: "./assets/img-nuevas/hamburguesa-panceta.jpg",
  },
  {
    id: 20,
    nombre: "Hamburguesa de Pollo",
    descripcion: "Elegida por unos cuantos...",
    precio: 750,
    categoria: "hamburguesas",
    popular: false,
    img: "./assets/img-nuevas/hamburguesa-pollo.jpg",
  },
  {
    id: 21,
    nombre: "Hamburguesa Triple",
    descripcion: "Con esta no te quedas con hambre!",
    precio: 850,
    categoria: "hamburguesas",
    popular: false,
    img: "./assets/img-nuevas/hamburguesa-triple.jpg",
  },
  {
    id: 22,
    nombre: "Batido de chocolate",
    descripcion: "El clasico que se llevan todos!",
    precio: 250,
    categoria: "batidos",
    popular: false,
    img: "./assets/img-nuevas/batido-chocolate.jpg",
  },
  {
    id: 23,
    nombre: "Batido de durazno",
    descripcion: "El mas fresco de todos!",
    precio: 150,
    categoria: "batidos",
    popular: false,
    img: "./assets/img-nuevas/batido-durazno.jpg",
  },
  {
    id: 24,
    nombre: "Batido de Frutilla",
    descripcion: "Nuestra especialidad",
    precio: 300,
    categoria: "batidos",
    popular: false,
    img: "./assets/img-nuevas/batido-frutilla.jpg",
  },
];

//renderiza los items popular al cargar la página
const initialRender = () => {
  const popularProducts = stockProductos.filter((el) => el.popular === true);
  products.innerHTML = popularProducts.map(renderProduct).join("");
};

//renderiza los items populares al hacer click en popular
const renderPopularProducts = (e) => {
  if (e.target.dataset.categoria === "popular") {
    initialRender();
  }
};
