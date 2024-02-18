<template>
    <div class="cart-footer">
      <p>Total: $ {{ total }} MXN</p>
  
      <router-link to="/cart">
        <button class="ui button primary fluid btn-buy" @click="closeCart" style="background-color: #ebeae6; color: #615447;">
          Comprar
        </button>
      </router-link>
    </div>
  </template>
  
  <script>
  import { ref, watchEffect } from "vue";
  export default {
    name: "CartFooter",
    props: {
      products: Array,
      closeCart: Function,
    },
    setup(props) {
      let total = ref(0);
  
      watchEffect(() => {
      if (props.products && props.products.length > 0) {
        let totalTemp = 0;
        props.products.forEach((product) => {
          // Accede a la propiedad 'data' del producto y 'quantity'
          const price = product.data.attributes.price; // Suponiendo que 'price' está dentro de 'attributes'
          const quantity = product.quantity;
          totalTemp += price * quantity;
        });
        total.value = totalTemp.toFixed(2);
      }
    });
  


      return {
        total,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .cart-footer {
    padding: 10px;
  }

  </style>