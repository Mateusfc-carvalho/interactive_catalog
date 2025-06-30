export function createdcard(product) {
  const newCard = document.createElement("div");
  newCard.classList.add('card-container')
  newCard.innerHTML = `
    <div class="card-image-wrapper">
          <img src="${product.images[0]}" alt="${product.title}" class="card-image" >
        </div>
        <h3 class="card-title">${product.title}</h3>
        <p class="card-price">R$${product.price}</p>
        <button class="card-btn">Add to Cart</button>
    </div>
    `;
  return newCard;
}
