// assets/js/moreProducts.js
import { createdcard } from '../../components/cards.js';

/**
 * Injeta um lote de produtos no DOM usando DocumentFragment.
 */
function renderBatch(containerList, products, page, limit) {
  const start = (page - 1) * limit;
  const end   = page * limit;
  const slice = products.slice(start, end);

  const frag = document.createDocumentFragment();
  slice.forEach(prod => {
    frag.appendChild(createdcard(prod));
  });
  containerList.appendChild(frag);
}

/**
 * Para cada "section" retorna por filterProducts, renderiza o primeiro
 * lote e associa o botão de carregar mais para renderizar os próximos.
 *
 * @param {Array} sections — array de objetos com containerList, btnLoadMore, matchingProducts e page
 * @param {number} limit — quantos itens exibir por clique (padrão 10)
 */
export function moreProducts(sections, limit = 4) {
  sections.forEach(section => {
    const { containerList, btnLoadMore, matchingProducts } = section;

    renderBatch(containerList, matchingProducts, section.page, limit);

    btnLoadMore.addEventListener('click', () => {
      section.page++;
      renderBatch(containerList, matchingProducts, section.page, limit);

      if (section.page * limit >= matchingProducts.length) {
        btnLoadMore.style.display = 'none';
      }
    });
  });
}
