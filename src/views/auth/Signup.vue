<template>
  <div class="auth-form">
    <h1>SignUp</h1>
    <el-input placeholder="Email" v-model="email" clearable> </el-input>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  props: {},
  data() {
    return {
      email: "",
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
