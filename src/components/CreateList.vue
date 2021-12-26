<template>
  <div class="create-list-wrapper">
    <el-button @click="dialogVisible = true" type="primary" icon="el-icon-plus"
      >Create new List</el-button
    >
    <el-dialog
      class="create-list-dialog"
      width="90%"
      title="Create new shopping list"
      :visible.sync="dialogVisible"
    >
      <el-form :model="formData">
        <el-form-item label="List Name">
          <el-input v-model="formData.listName" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="List Items">
          <div class="items-list">
            <span
              v-for="(item, iindex) in formData.listItems"
              v-bind:key="iindex"
              >{{ item.name }}</span
            >
          </div>
        </el-form-item> -->
        <h2>Items</h2>
        <div class="items-list">
          <span
            class="list-item"
            v-for="(item, iindex) in formData.listItems"
            v-bind:key="iindex"
          >
            {{ item.name }}
          </span>
        </div>
        <el-form-item label="Add Item">
          <el-input v-model="formData.newItem"> </el-input>
          <el-button
            class="add-item-button"
            @click="addItemToList"
            type="primary"
            >Add</el-button
          >
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Save</el-button
        >
      </span>
      <!-- <pre>{{ formData }}</pre> -->
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
    };
  },
  methods: {
    addItemToList() {
      this.formData.listItems.push({
        name: this.formData.newItem,
      });

      this.formData.newItem = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  */
.add-item-button {
  margin-top: 10px;
  width: 100%;
}

.items-list {
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  display: flex;
}

.list-item {
  /* border: 1px solid red; */
  padding: 10px;
  text-align: end;
  width: 100%;
  margin-bottom: 10px;
  font-size: 1.2em;
}
</style>

<style>
.create-list-wrapper .el-dialog {
  max-width: 700px;
}
</style>
