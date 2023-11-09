<template>
  <div>
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
          ><b-icon icon="book-open-page-variant"></b-icon>&nbsp;Gestionar
          recetas</b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ name: 'AcercaDe' }"
          ><b-icon icon="information"></b-icon>&nbsp;Acerca de</b-navbar-item
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
import Logo from "";
export default {
  name: "app",
  data: () => ({
    logo: Logo,
  }),
  methods: {},
};
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
