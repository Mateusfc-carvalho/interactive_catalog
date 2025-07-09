// css global
import "./assets/css/style.css";
// arquivos js
import "./assets/js/navbar.js";
import "./theme/darkMode.js";

import { filterProducts } from "./assets/js/filterProducts.js";
import { moreProducts } from './assets/js/moreProducts.js';

const sections = await filterProducts();
moreProducts(sections);
