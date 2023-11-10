<template>
  <div>
    <b-navbar class="oculto-impresion" style=" background: linear-gradient(to right, #EA7E5E, #eba691);">
      <template #brand>
        <b-navbar-item tag="a" target="_blank" :href="logo">
          <img :src="logo" style="min-height: 85px" />
        </b-navbar-item>
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
    <footer class="footer oculto-impresion" style="background-color: #f0f0f0; padding: 20px;">
      <div class="content has-text-centered">
        <div class="copyright">© Todos los derechos reservados 2023</div>
      </div>
    </footer>
  </div>
</template>

<script src="js/bootstrap.min.js"></script>
<script>
import Logo from "./assets/img/Whack-Dark.png";
export default {
  name: "app",
  data: () => ({
    logo: Logo,
  }),
  methods: {},
};
</script>

<style scoped>
/* Estilos específicos del componente */
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
