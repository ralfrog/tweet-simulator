<template>
  <div class="tweet-form container" :class="{ open: showForm }">
    <!-- Cuando showForm sea true le añadimos a la clase open -->
    <form @submit.prevent="sentTweet">
      <input class="form-control" placeholder="Tu nombre" v-model="username" />
      <textarea
        class="form-control"
        rows="3"
        placeholder="Escribe tu tweet"
        v-model="tweet"
      ></textarea>
      <button type="submit" class="btn btn-primary">Enviar Tweet</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { saveTweetApi } from "../api/tweet";

export default {
  props: {
    showForm: Boolean, //importamos el hooks mediante props
  },

  setup() {
    let username = ref("");
    let tweet = ref("");

    const sentTweet = () => {
      //Funcion para almacenar los datos del formulario
      saveTweetApi(tweet.value, username.value);
    };

    return {
      sentTweet,
      username,
      tweet,
    };
  },
};
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  height: 0px;
  overflow: hidden;

  &.open {
    // es equivalente a poner .tweet-form.open
    height: auto;
  }

  form {
    margin-bottom: 50px;

    input {
      margin-bottom: 10px;
    }

    button {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
