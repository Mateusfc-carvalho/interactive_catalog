
import { getProducts } from '../../services/products.js';

export async function filterProducts() {
  // seleciona todos os blocos de categoria
  const blocks = [...document.querySelectorAll('.container')];
  const { products } = await getProducts();

  // mapeia cada bloco para um "section object" que o moreProducts consumirá
  return blocks.map(block => {
    const containerList    = block.querySelector('.productList');
    const btnLoadMore      = block.querySelector('.btnMoreProducts');
    const categoryTitleEl  = block.querySelector('.category-Title');
    const categoryName     = categoryTitleEl.textContent.trim();
    const matchingProducts = products.filter(p => p.category === categoryName);

    return {
      containerList,
      btnLoadMore,
      matchingProducts,
      page: 1
    };
  });
}
