// css global
import "./assets/css/style.css";
// arquivos js
import "./assets/js/navbar.js";
import "./theme/darkMode.js";

import { createdcard } from "./components/cards.js";
import { getProducts } from "./services/products.js";


async function filterProducts() {
  const {products} = await getProducts();
  const masterContainer = [...document.querySelectorAll('.container')];

  masterContainer.forEach((block) =>{
    const containerList = block.querySelector('.productList');
    const categoryTitle = [...block.querySelectorAll('.category-Title')];

    categoryTitle.forEach((catEl) => {
    const categoryName = catEl.textContent.trim();

    const matchingProducts = products.filter((pdt) => pdt.category === categoryName);

    matchingProducts.forEach((prod) => {
      const card = createdcard(prod);
      containerList.appendChild(card);
    })

   });
  })
  return masterContainer
}

filterProducts();
