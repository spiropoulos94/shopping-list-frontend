<template>
  <div class="auth-form">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h1>Login</h1>
    <el-form ref="loginForm" :model="loginData" :rules="rules">
      <el-form-item prop="email" label="Email">
        <el-input
          v-model="loginData.email"
          class="input-field"
          placeholder="Email"
          clearable
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password" label="Password">
        <el-input
          v-model="loginData.password"
          class="input-field"
          placeholder="Password"
          clearable
          type="password"
        >
        </el-input>
      </el-form-item>
      <span class="link-wrapper">
        <router-link class="signup-link" to="/signup">
          <p class="signup-msg">Don't have an account? Sign up here</p>
        </router-link>
      </span>
      <div class="authSubmitWrapper">
        <el-button type="primary" @click="submit"> Login </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import api from "@/mixins/api";

export default {
  name: "Login",
  props: {},
  mixins: [api],
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Enter your email",
            trigger: "blur",
          },
          {
            required: true,
            pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            message: "Please enter a valid email",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Enter your password",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          this.login(this.loginData);
        } else {
          return;
        }
      });
    },
  },
  mounted() {
    // console.log("Login mounted");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
