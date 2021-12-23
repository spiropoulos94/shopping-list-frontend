<template>
  <div style="background: red">
    <h1>Hello World</h1>
    <el-button @click="logOut">Log Out</el-button>
    <router-link to="/brokenlink">Broken link</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {};
  },
  methods: {
    logOut() {
      this.$store.commit("logout");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  */
</style>
