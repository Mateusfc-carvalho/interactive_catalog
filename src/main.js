// css global
import "./assets/css/style.css";
// arquivos js
import "./assets/js/navbar.js";
import "./theme/darkMode.js";

import { createdcard } from "./components/cards.js";
import { getProducts } from "./services/products.js";


async function filterProducts() {
  const data = await getProducts();
  console.log(data);

 const containerList = document.querySelector('#productList');
 const card = createdcard();
 console.log(card);
 containerList.appendChild(card);

}

filterProducts();
