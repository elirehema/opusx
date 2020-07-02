<template>
  <form @submit.prevent="handleLogin">
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" />
    <button>Login</button>
  </form>
</template>
<script>
import { formMixin } from "../static/mixins/my-mixins";
export default {
  mixins: [formMixin],
   methods: {
    handleLogin: function() {
      console.log("email :", this.email);
      console.log("Password :", this.password);
    }
  }
  
}
</script>