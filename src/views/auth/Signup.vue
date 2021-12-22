<template>
  <div class="auth-form">
    <h1>Create an account</h1>
    <el-form ref="signUpForm" :model="signUpData" :rules="rules">
      <el-form-item prop="name" label="Name">
        <el-input
          v-model="signUpData.name"
          class="input-field"
          placeholder="Your name"
          clearable
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="email" label="Email">
        <el-input
          v-model="signUpData.email"
          class="input-field"
          placeholder="Email"
          clearable
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password" label="Password">
        <el-input
          v-model="signUpData.password"
          class="input-field"
          placeholder="Password"
          clearable
          type="password"
        >
        </el-input>
      </el-form-item>
      <span class="link-wrapper">
        <router-link class="signup-link" to="/login">
          <p class="signup-msg">Already have an account? Log in</p>
        </router-link>
      </span>
      <div class="authSubmitWrapper">
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
      signUpData: {
        name: "",
        email: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please enter your name",
            trigger: "blur",
          },
        ],
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
      this.$refs.signUpForm.validate(async (valid) => {
        if (valid) {
          console.log("submit ok!");
          console.log(this.signUpData);
        } else {
          return;
        }
      });
    },
  },
  mounted() {
    console.log("Sign up mounted");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
