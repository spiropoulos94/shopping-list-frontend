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
        <el-form-item label="Item" :label-width="formLabelWidth">
          <!-- <el-select
            v-model="formData.listItems"
            placeholder="Please select a zone"
          >
            <el-option label="Zone No.1" value="shanghai"></el-option>
            <el-option label="Zone No.2" value="beijing"></el-option>
          </el-select> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Save</el-button
        >
      </span>
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
        listName: "",
        listItems: [
          {
            name: "",
          },
        ],
      },
      dialogVisible: false,
      formLabelWidth: "120px",
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  */
</style>
