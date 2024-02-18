<template>
  <div class="basic-layout">
    <Menu />

    <div class="ui container main-content">
      <slot />
    </div>

    <footer>
      <p>
        <b
          >Desarrollado por Jesus Vilchis (2024) ©
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</b
        >
        <a
          href="https://jvilchis11.github.io/Portafolio/"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            src="../assets/webpage.png"
            class="imgPie"
            alt="icono Instagram"
        /></a>
        &nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/in/jes%C3%BAs-vilchis-hernandez-1a0991209/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            src="../assets/linkedin.png"
            class="imgPie"
            alt="icono Linkedin"
        /></a>
        &nbsp;&nbsp;
        <a
          href="https://github.com/JVilchis11"
          target="_blank"
          rel="noopener noreferrer"
          ><img src="../assets/github.png" class="imgPie" alt="icono GitHub"
        /></a>
        &nbsp;&nbsp;
        <a
          href="https://www.instagram.com/jvilchis11/"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            src="../assets/instagram.png"
            class="imgPie"
            alt="icono Instagram"
        /></a>
      </p>
    </footer>
    <Cart />
  </div>

</template>

<script>
import Menu from "@/components/Menu.vue";
import Cart from "../components/Cart/Cart";

export default {
  name: "BasicLayout",
  components: {
    Menu,
    Cart,
  },
};
</script>

<style scoped>
footer {
  background-color: #615447;
  color: #ebeae6;
  padding: 4px;
  text-align: center;
  position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}

.main-content {
  margin-bottom: 100px; /* Ajusta el valor según la altura de tu pie de página */
}

.imgPie {
  width: 15px;
}

</style>
