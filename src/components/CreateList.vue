<template>
  <div class="create-list-wrapper">
    <el-button @click="dialogVisible = true" type="primary" icon="el-icon-plus"
      >Create new List</el-button
    >
    <el-dialog
      width="90%"
      title="Create new shopping list"
      :visible.sync="dialogVisible"
    >
      <el-form :model="formData">
        <el-form-item label="List Name" :label-width="formLabelWidth">
          <el-input v-model="formData.listName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="List Items" :label-width="formLabelWidth">
          <div>we are the list items</div>
        </el-form-item>
        <el-form-item label="Add Item" :label-width="formLabelWidth">
          <el-input v-model="formData.newItem"> </el-input>
          <el-button class="add-item-button" type="primary">Add</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Save</el-button
        >
      </span>
      <pre>{{ formData }}</pre>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "CreateList",
  props: {},
  data() {
    return {
      formData: {
        newItem: "",
        listName: "",
        listItems: [
          {
            name: "random item",
          },
          {
            name: "another item",
          },
        ],
      },
      dialogVisible: true, // check
      formLabelWidth: "120px",
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  */
.add-item-button {
  margin-top: 10px;
  width: 100%;
}
</style>
