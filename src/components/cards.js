export function createdcard(product) {
  const newCard = document.createElement('div');
  newCard.classList.add('card-container');
  newCard.innerHTML = `
        <div class="card-image-wrapper">
            <img
              src="https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"
              alt="Produto"
              class="card-image"
            >
          </div>
          <h3 class="card-title">Título do Produto</h3>
          <p class="card-price">R$ 99,90</p>
          <button class="card-btn">Adicionar ao carrinho</button>
        </div>
    `;
    return newCard;
}
