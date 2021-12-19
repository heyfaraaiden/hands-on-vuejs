Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      reqiured: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `,
});

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">
    <div class="product-image">
      <img v-bind:src="image">
    </div>
    
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else :class="{ outOfStock : !inStock }">Out of Stock</p>
      <p>Shipping: {{ shipping }}</p>

      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
      
      <div class="color-box"
          v-for="(variant, index) in variants"
          :key="variant.variantId"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)">
      </div>
      
      <button v-on:click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
          >Add to Cart
      </button>

      <div class="cart">
        <p>Cart({{cart}})</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
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
    }
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
    shipping() {
      if(this.premium) {
        return 'Free';
      }
      return 2.99;
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
  }
});


/* NOTE:
SEE MORE ON:
1. https://www.notion.so/VueJS-1ed318cc47ff47a7941a312316696567
2. https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d
*/