<template>
  <form @submit.prevent="handleSignup">
    <input v-model="fullName" placeholder="Full Name" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" />
    <input v-model="repassword" placeholder="Re enter password" />
    <button>SignUp</button>
  </form>
</template>

<script>
import { formMixin } from "../static/mixins/my-mixins";
export default {
  mixins: [formMixin],
  data: function() {
    return {
      fullName: "",
      repassword: ""
    };
  },
  methods: {
    handleSignup: function() {
      console.log("hello from signup");
      console.log("email :", this.email);
      console.log("Password :", this.password);
    }
  }
};
</script>