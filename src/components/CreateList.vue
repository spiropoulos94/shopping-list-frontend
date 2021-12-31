<template>
  <div class="create-list-wrapper">
    <el-button @click="enableCreate" type="primary" icon="el-icon-plus"
      >Create new List</el-button
    >
    <el-button
      v-if="!listDeleteEnabled"
      type="danger"
      icon="el-icon-delete"
      @click="listDeleteEnabled = true"
    ></el-button>
    <el-button
      v-if="listDeleteEnabled"
      type="danger"
      icon="el-icon-close"
      @click="listDeleteEnabled = false"
    ></el-button>
    <el-dialog
      class="create-list-dialog"
      width="90%"
      :title="isEdit ? 'Edit list' : 'Create new shopping list'"
      :visible.sync="dialogVisible"
      destroy-on-close
    >
      <el-form :model="formData">
        <el-form-item label="List Name">
          <el-input v-model="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="List Items">
          <div class="items-list">
            <span
              v-for="(item, iindex) in formData.items"
              v-bind:key="iindex"
              >{{ item.name }}</span
            >
          </div>
        </el-form-item> -->
        <div class="list-bar">
          <h2>Items</h2>
          <el-button
            @click="deleteEnabled = true"
            v-if="!deleteEnabled"
            type="primary"
            icon="el-icon-edit"
            circle
          ></el-button>
          <el-button
            @click="deleteEnabled = false"
            v-if="deleteEnabled && formData.items.length"
            type="primary"
            icon="el-icon-close"
            circle
          ></el-button>
        </div>
        <div class="items-list">
          <div
            class="list-item-wrapper"
            v-for="(item, iindex) in formData.items"
            v-bind:key="iindex"
          >
            <span class="list-item">
              {{ item }}
            </span>
            <el-button
              @click="deleteItem(iindex)"
              v-if="deleteEnabled"
              type="danger"
              icon="el-icon-delete"
              size="small"
              circle
            ></el-button>
          </div>
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
        <el-button type="primary" @click="submit">Save</el-button>
      </span>
      <!-- <pre>{{ formData }}</pre> -->
    </el-dialog>
  </div>
</template>

<script>
import api from "@/mixins/api";
export default {
  name: "CreateList",
  props: {},
  mixins: [api],
  data() {
    return {
      formData: {
        newItem: "",
        name: "",
        items: [],
      },
      dialogVisible: false,
      deleteEnabled: false,
      listDeleteEnabled: false,
      isEdit: true,
    };
  },
  watch: {
    listDeleteEnabled: {
      handler(value) {
        if (value === true) {
          this.$emit("listDeleteStatusChanged", true);
        } else {
          this.$emit("listDeleteStatusChanged", false);
        }
      },
    },
    isEdit: {
      handler(isEdit) {
        console.log("isEdit watcher", isEdit);
        if (!isEdit) {
          this.formData = {
            newItem: "",
            name: "",
            items: [],
          };
        }
      },
    },
  },
  methods: {
    enableCreate() {
      this.isEdit = false;
      this.dialogVisible = true;
    },
    async submit() {
      if (this.formData.items.length && this.formData.name.trim() !== "") {
        if (!this.isEdit) {
          await this.createList({
            name: this.formData.name,
            notes: this.formData.notes || "",
            items: this.formData.items,
          });
        } else {
          await this.updateList(this.formData);
        }
        this.dialogVisible = false;
        await this.getLists();
      }
    },
    deleteItem(itemIndex) {
      this.formData.items.splice(itemIndex, 1);
      if (!this.formData.items.length) {
        this.deleteEnabled = false;
      }
    },
    addItemToList() {
      if (this.formData.newItem.trim() !== "") {
        this.formData.items.push(this.formData.newItem);

        this.formData.newItem = "";
      }
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

.list-item-wrapper {
  display: flex;
  flex-direction: row;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}

.list-item {
  /* border: 1px solid red; */
  padding: 10px;
  text-align: end;
  width: 100%;
  font-size: 1.6em;
}

.list-bar {
  display: flex;
  justify-content: space-between;
}
</style>

<style>
.create-list-wrapper .el-dialog {
  max-width: 700px;
}
</style>
