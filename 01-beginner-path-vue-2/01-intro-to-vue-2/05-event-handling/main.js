var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    inStock: true,
    details: ['80% cotton', '20% polyster', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue-onWhite.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1; // 'this' refers to the data of the instance we're currently in. Our function is adding 1 to the value of cart, because this.cart is the cart inside our data property. If we just said cart += 1 here, we’d get an error letting us know that “cart is not defined”, so we use this.cart to refer to the cart from this instance’s data.
    },
    removeFromCart() {
      (this.cart === 0) ? this.cart = 0 : this.cart -= 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});


/* NOTE:
- Instead of writing an anonymous function like
  updateProduct: function(variantImage) {}, we can use the ES6 shorthand and just say updateProduct(variantImage) {}. These are equivalent ways of saying the same thing.
*/