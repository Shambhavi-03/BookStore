// function addToCart(bookId, title, price) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const existingItem = cart.find(item => item.id === bookId);

//     if (existingItem) {
//         existingItem.quantity++;
//     } else {
//         cart.push({
//             id: bookId,
//             title: title,
//             price: price,
//             quantity: 1,
//         });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert('Item added to cart!');
// }