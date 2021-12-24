<template>
  <div class="create-list-wrapper">
    <el-button type="primary" icon="el-icon-plus">Create new List</el-button>
  </div>
</template>

<script>
export default {
  name: "CreateList",
  props: {},
  data() {
    return {
      formData: {
        listName: "",
        listItems: [],
      },
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  */
</style>
