<template>
  <div>
    <div>
    <div id="preloader"></div>
    <div class="site-logo-mobile">
      <a href="#" class="sticky-logo-Dark">
        <img :src="logoSrc" alt="Site Logo">
      </a>
    </div>
  </div>
    <b-navbar class="oculto-impresion" style="border: 2px solid #ffe08a">
      <template #brand>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ name: 'Recetario' }"
          ><b-icon icon="chef-hat"></b-icon>&nbsp;Recetario</b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ name: 'NuevaReceta' }"
          ><b-icon icon="plus" class="mr-1"></b-icon>Nueva receta</b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ name: 'Recetas' }"
          ><b-icon icon="book-open-page-variant"></b-icon>&nbsp;Gestionar recetas
          </b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ name: 'AcercaDe' }"
          ><b-icon icon="information"></b-icon>&nbsp;Acerca de Nosotros</b-navbar-item
        >
      </template>
      <template #end>
        <b-navbar-item tag="div">
        </b-navbar-item>
      </template>
    </b-navbar>
    <section class="section sin-espacios-al-imprimir">
      <router-view></router-view>
    </section>
    <footer class="footer oculto-impresion">
      <div class="content has-text-centered">
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoSrc: "recetas/src/assets/img/Whack-Dark.png", // Ruta de la imagen de tu logotipo
      styles: [
        "src/assets/css/normalize.css",
        "src/assets/css/main.css",
        "src/assets/css/bootstrap.min.css",
        "src/assets/css/animate.min.css",
        "src/assets/css/fontawesome-all.min.css",
        "src/assets/fonts/flaticon.css",
        "src/assets/css/owl.carousel.min.css",
        "src/assets/css/owl.theme.default.min.css",
        "src/assets/style.css",
      ],
    };
  },
}
</script>

<style >
@media print {
  .oculto-impresion,
  .oculto-impresion * {
    display: none !important;
  }
  .section.sin-espacios-al-imprimir {
    margin: 5px !important;
    padding: 7px !important;
  }
}
</style>
