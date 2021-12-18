var app = new Vue({
  el: '#app', // it makes our data connect with an element that has id 'app' and we can use the data there
  data: {
    product: 'Socks',
    description: 'Our favorite and best-seller socks special for Vue developers.'
  }
}); // It's the root of a Vue app. It makes a new Vue instance and passes some information in the form of an options object with a variety of optional properties to store data and perform actions.