<template>
  <div>
    <div class="navbar">
      <span class="logo">Shopping List</span>
      <el-button
        @click="centerDialogVisible = true"
        type="primary"
        icon="fas fa-sign-out-alt"
        circle
      ></el-button>
    </div>
    <el-dialog :visible.sync="centerDialogVisible" width="40%" center>
      <span>Are you sure you want to exit?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="logOut">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      centerDialogVisible: false,
    };
  },
  methods: {
    logOut() {
      this.centerDialogVisible = false;
      this.$store.commit("logout");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  /* background: red; */
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
