<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar navbar-brand">Simulador de Tweets</span>
      <button
        class="btn pl-4 pr-4"
        :class="{ 'btn-success': !showForm, 'btn-danger': showForm }"
        @click="openCloseForm"
      >
        {{ !showForm ? "Nuevo Tweet" : "Cerrar Tweet" }}
      </button>
      <!-- en boron será verde si showForm es falso y rojo si es verdadero -->
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    showForm: Boolean,
    openCloseForm: Function,
  },
};
</script>

<style></style>
