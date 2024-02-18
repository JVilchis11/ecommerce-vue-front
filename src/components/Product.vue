<template>
  <div class="ui card product">
    <div class="image">
      <img
        :src="API_URL + product.attributes.image.data.attributes.url"
        :alt="product.attributes.name"
      />
    </div>
    <div class="content">
      <div class="header">{{ product.attributes.name }}</div>
      <div class="description"><b>$</b> {{ product.attributes.price }} MXN</div>
    </div>
    <div
      class="ui button primary"
      :class="{ loading }"
      @click="addProductCart(product.id)"
    >
      {{ textoDelBoton }}
    </div>
  </div>
</template>

<script>
import { API_URL } from "../utils/constants";
import { addProductCartApi } from "../api/cart";
import { ref, onMounted } from "vue";
import { getTokenApi } from "../api/token";
import { useRouter } from "vue-router";

export default {
  name: "Product",
  props: {
    product: Object,
  },
  setup(props) {
    let textoDelBoton = ref("¡ Lo quiero !");
    const router = useRouter();
    let loading = ref(false);

    onMounted(async () => {
      const token = getTokenApi();

      if (token != null) {
        textoDelBoton.value = "Comprar";
      }
    });

    const addProductCart = (idProduct) => {
      if (textoDelBoton.value == "¡ Lo quiero !") {
        router.push("/login");
      } else {
        loading.value = true;
        addProductCartApi(idProduct);
        setTimeout(() => {
          loading.value = false;
          textoDelBoton.value = "✅ Agregado al carrito";
          // Después de 2 segundos, cambia el texto del botón de "Listo" a "Comprar"
          setTimeout(() => {
            textoDelBoton.value = "Comprar";
          }, 1000); // 2000 milisegundos = 2 segundos
        }, 400);
      }
    };

    return {
      API_URL,
      addProductCart,
      textoDelBoton,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.product {
  &:hover {
    .ui.button {
      min-height: 36px;
      background-color: #ebeae6;
    }
  }

  .ui.button {
    max-height: 0;
    min-height: 0;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: min-height 0.6s ease;
    background-color: #ebeae6;
    color: #615447;
  }
}
</style>
