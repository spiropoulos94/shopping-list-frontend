<template>
  <div class="auth-form">
    <h1>Login</h1>
    <el-input class="input-field" placeholder="Email" v-model="email" clearable>
    </el-input>
    <el-input
      class="input-field"
      placeholder="Password"
      v-model="email"
      clearable
    >
    </el-input>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      email: "",
    };
  },
  methods: {},
  mounted() {
    console.log("Login mounted");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.auth-form {
  /* background-color: red; */
  max-width: 600px;
  margin: auto;
}

.input-field {
  margin-bottom: 20px;
}
</style>
