var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    // inStock: false, // try to update status of stock with boolean
    inventory: 10, // update status of stock based on number of items left,
    onSale: true
  }
});