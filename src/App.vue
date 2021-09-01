<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <TweetForm :showForm="showForm" />
  <!-- Para que el formulario tome el valor de la función del hook -->
</template>

<script>
import Menu from "./components/Menu";
import TweetForm from "./components/TweetForm.vue";
import useFormTweet from "./hooks/useFormTweet";

export default {
  name: "App",

  components: {
    Menu,
    TweetForm,
  },

  setup() {
    return {
      ...useFormTweet(), //para tener disponibles las dos funciones del ese archivo
    };
  },
};
</script>

<style lang="scss"></style>
