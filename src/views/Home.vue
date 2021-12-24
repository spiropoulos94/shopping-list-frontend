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
    <el-dialog
      :visible.sync="centerDialogVisible"
      :width="windowWidth < 600 ? '80%' : '40%'"
      center
    >
      <span>Are you sure you want to exit?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="logOut">Confirm</el-button>
      </span>
    </el-dialog>
    <h3 class="welcome-msg">Welcome back, {{ userFirstName }}!</h3>
    <div class="lists-wrapper">
      <el-card
        shadow="hover"
        v-for="list in shoppingLists"
        :key="list._id"
        class="list"
      >
        <!-- <div slot="header"> -->

        <h5 class="list-title">{{ list.name }}</h5>
        <!-- </div> -->
        <!-- <h5 class="list-title">{{ list.name }}</h5> -->
        <div class="truncate">
          <span class="item-name" v-for="item in list.items" :key="item">
            {{ item }},
          </span>
        </div>
        <el-button
          style="padding: 8px; margin-top: 20px"
          type="danger"
          icon="el-icon-delete"
          circle
        ></el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
import api from "@/mixins/api";
export default {
  name: "HelloWorld",
  props: {},
  mixins: [api],
  data() {
    return {
      centerDialogVisible: false,
      windowWidth: window.innerWidth,
      shoppingLists: [
        {
          name: "Supermarket List",
          items: ["Coffee", "Milk", "Sugar"],
        },
        {
          name: "Groceries List",
          items: ["Bananas", "Almonds", "Carrots"],
        },
        {
          name: "Supermarket List",
          items: ["Coffee", "Milk", "Sugar"],
        },
        {
          name: "Groceries List",
          items: ["Bananas", "Almonds", "Carrots"],
        },
        {
          name: "Supermarket List",
          items: ["Coffee", "Milk", "Sugar"],
        },
        {
          name: "Groceries List",
          items: ["Bananas", "Almonds", "Carrots"],
        },
      ],
    };
  },
  methods: {
    logOut() {
      this.centerDialogVisible = false;
      this.$store.commit("logout");
    },
  },
  mounted() {
    this.getItems();
    console.log(window.innerWidth);
  },
  computed: {
    userFirstName() {
      let fullName = this.$store.getters.userName;
      let firstName = fullName.split(" ")[0];
      return firstName;
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

.welcome-msg {
  /* background: green; */
  margin-top: 30px;
  margin-right: 20px;
  text-align: end;
}

.lists-wrapper {
  /* background: red; */
  margin-top: 50px;
  margin: 50px 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list {
  padding: 10px;

  width: 300px;
  margin: 10px auto;
  /* height: 130px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  color: #409eff;
  background-color: white;
}

.list-title {
  font-size: 1.35rem;
  /* background: red; */
  padding: 10px;
}

.item-name {
  font-size: 0.9em;
}

.truncate {
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: auto;
}
</style>
