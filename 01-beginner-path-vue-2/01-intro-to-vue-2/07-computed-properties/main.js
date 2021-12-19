var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    selectedVariant: 0,
    onSale: true,
    details: ['80% cotton', '20% polyster', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green-onWhite.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if(this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale!';
      } else {
        return this.brand + ' ' + this.product + ' are not on sale.';
      }
    }
  }
});


/* NOTE:
1. Since computed properties calculate a value rather than store a value, we add the 'computed' option to our instance and create a computed property called 'title'. When 'title' is called, it will concatenate 'brand' and 'product' into a new string and return that string. So, now we put {{ title }} inside the 'h1' on HTML file instead of {{ product }}.
[pretty simple but not entirely practical example].

SEE MORE ON >>> https://www.notion.so/VueJS-1ed318cc47ff47a7941a312316696567
*/