<template>
  <BasicLayout>
    
    <!-- Logotipo del ecommerce -->

    <div class="encabezado">
      <img src="../assets/logo_definitivo.png" alt="" class="centered-image" />
      <hr class="custom-hr"/>
    </div>

<!-- Novedades del ecommerce -->

    <h1>Nuestras últimas novedades:</h1>
    <br />
    <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
        <Product :product="product" />
      </div>
    </div>
    
    <!-- Slider de productos -->
  
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import BasicLayout from "../layouts/BasicLayout";
import { getProducts } from "../api/product";
import Product from "../components/Product";


export default {
  name: "Home",
  components: {
    BasicLayout,
    Product,
  },
  setup() {
    let products = ref(null);

    onMounted(async () => {
      const response = await getProducts(8);
      products.value = response.data;
    });

    return {
      products,
    };
  },
};
</script>

<style lang="scss" scoped>
.encabezado {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  height: 200px; /* Ajusta la altura según tus necesidades */
  margin-bottom: 1px;
}

.centered-image {
  //max-width: 100%; /* Ajusta el ancho máximo de la imagen */
  max-height: 74%; /* Ajusta la altura máxima de la imagen */
  
}

.custom-hr {
    height: 1px; /* Altura de la línea */
    width: 40%; /* Ancho de la línea */
    background-color: #615447; /* Color de la línea */
    border: none; /* No queremos bordes para el hr */
}
</style>
