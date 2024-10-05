// const product = [
//     {
//       id: 1,
//       name: 'Army Green Active Short Sleeve',
//       price: '$19.95',
//       originalPrice: '$49.95',
//       imageUrl: '/image/img (1).jpeg', // Replace with actual image
//     },
//     {
//       id: 2,
//       name: 'Army Green Active Short Sleeve',
//       price: '$19.95',
//       originalPrice: '$49.95',
//       imageUrl: '/image/img (10).jpeg',
//     },
//     {
//       id: 3,
//       name: 'Army Green Active Short Sleeve',
//       price: '$19.95',
//       originalPrice: '$49.95',
//       imageUrl: '/image/img (2).jpeg',
//     },
//     {
//       id: 4,
//       name: 'Army Green Active Short Sleeve',
//       price: '$19.95',
//       originalPrice: '$49.95',
//       imageUrl: '/image/img (11).jpeg',
//     },
//     {
//       id: 4,
//       name: 'Army Green Active Short Sleeve',
//       price: '$19.95',
//       originalPrice: '$49.95',
//       imageUrl: '/image/img (11).jpeg',
//     }
//   ];
  
//   const productGrid = document.querySelector('.product-grid');
  
//   product.forEach(product => {
//     const productCard = document.createElement('div');
//     productCard.classList.add('product-card');
  
//     productCard.innerHTML = `
//       <img src="${product.imageUrl}" alt="${product.name}">
//       <h3>${product.name}</h3>
//       <p>
//         <span class="price">${product.price}</span>
//         <span class="original-price">${product.originalPrice}</span>
//       </p>
//     `;
  
//     productGrid.appendChild(productCard);
//   });
    // Simple "Buy 1 Get 1 Free" logic
    const products = document.querySelectorAll('.product');
    let selectedCount = 0;

    products.forEach(product => {
        product.addEventListener('click', () => {
            product.style.outline = product.style.outline ? '' : '2px solid #007bff';
            selectedCount = product.style.outline ? selectedCount + 1 : selectedCount - 1;

            if (selectedCount === 2) {
                alert('Buy 1 Get 1 Free applied! The second item is free.');
                selectedCount = 0;
                products.forEach(p => p.style.outline = '');
            }
        });
    });