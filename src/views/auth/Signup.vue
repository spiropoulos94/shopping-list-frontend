<template>
  <div class="auth-form">
    <img alt="Vue logo" src="@/assets/logo.png" />
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
      <el-form-item prop="passwordConfirm" label="Password confirm">
        <el-input
          v-model="signUpData.passwordConfirm"
          class="input-field"
          placeholder="Password confirm"
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
        <el-button type="primary" @click="submit"> Sign Up </el-button>
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
    var validatePassConfirm = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.signUpData.password) {
        callback(new Error("Passwords don't match!"));
      } else {
        callback();
      }
    };
    return {
      signUpData: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
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
        passwordConfirm: [
          { validator: validatePassConfirm, trigger: "blur" },
          {
            required: true,
            message: "Passwords don't match",
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
          this.signUp(this.signUpData);
        } else {
          return;
        }
      });
    },
  },
  mounted() {
    // console.log("Sign up mounted");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
