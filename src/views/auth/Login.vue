<template>
  <div class="auth-form">
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
      <div class="loginFormSubmitWrapper">
        <el-button type="primary" @click="submit"> Login </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
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
          console.log("submit ok!");
          console.log(this.loginData);
        } else {
          return;
        }
      });
    },
  },
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

.loginFormSubmitWrapper button {
  width: 100%;
}

.signup-msg {
  /* background-color: red; */
  text-align: end;
  font-size: 0.75em;
}

.link-wrapper a {
  text-decoration: none;
}
.link-wrapper a:hover {
  text-decoration: underline;
}
</style>
