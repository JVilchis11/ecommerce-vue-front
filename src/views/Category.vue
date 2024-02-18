<template>
  <BasicLayout>
    <div class="encabezado">
      <img src="../assets/logo_definitivo.png" alt="" class="centered-image" />
      <hr class="custom-hr"/>
    </div>
    
    <h2>{{ nombreDelProducto }}</h2>
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
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BasicLayout from "../layouts/BasicLayout";
import Product from "../components/Product";
import { getProductsCategory } from "../api/product";

export default {
  name: "Category",
  components: {
    BasicLayout,
    Product,
  },
  watch: {
    $route(to, from) {
      this.getProduts(to.params.category);
    },
  },
  setup() {
    let products = ref(null);
    let nombreDelProducto = ref(null);
    const { params } = useRoute();

    onMounted(() => {
      getProduts(params.category);
    });

    const getProduts = async (category) => {
      const response = await getProductsCategory(category);
      products.value = response.data;
      //nombreDelProducto.value = products;
      if (products.value && products.value.length > 0) {
        nombreDelProducto.value = "Estos son los "+ products.value[0].attributes.category.data.attributes.title +" que Bubu y Dudu tienen para ti";
      } else {
        // Si no hay productos, asigna un mensaje o valor por defecto
        nombreDelProducto.value = "Bubu y Dudu no tienen productos disponibles por el momento en esta categoria.";
      }
    };

    return {
      getProduts,
      products,
      nombreDelProducto,
    };
  },
};
</script>

<style>
.encabezado {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  height: 200px; /* Ajusta la altura según tus necesidades */
  margin-bottom: 1px;
}

.centered-image {
  /* max-width: 100%; /* Ajusta el ancho máximo de la imagen */
  max-height: 74%; /* Ajusta la altura máxima de la imagen */
  
}

.custom-hr {
    height: 1px; /* Altura de la línea */
    width: 40%; /* Ancho de la línea */
    background-color: #615447; /* Color de la línea */
    border: none; /* No queremos bordes para el hr */
}
</style>