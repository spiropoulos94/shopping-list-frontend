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
    >
      <span>Are you sure you want to exit?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="logOut">Confirm</el-button>
      </span>
    </el-dialog>
    <h3 class="welcome-msg">Welcome back, {{ userFirstName }}!</h3>
    <!-- <div class="create-list-wrapper">
      <el-button type="primary" icon="el-icon-plus">Create new List</el-button>
    </div> -->
    <CreateList @listDeleteStatusChanged="setDeleteStatus" />
    <div class="lists-wrapper">
      <div
        @click="editList"
        class="list"
        v-for="list in $store.getters.lists"
        :key="list._id"
      >
        <el-card shadow="hover">
          <h5 class="list-title">{{ list.name }}</h5>
          <div class="truncate">
            <span class="item-name" v-for="item in list.items" :key="item">
              {{ item }},
            </span>
          </div>
          <!-- <el-button
          @click="editList"
          class="card-button"
          type="primary"
          icon="el-icon-plus"
          circle
        ></el-button> -->
          <div class="button-wrapper">
            <el-button
              v-if="listDeleteStatus"
              @click="deleteList"
              :class="windowWidth < 500 ? 'isMobileButton' : 'isDesktopButton'"
              type="danger"
              icon="el-icon-delete"
              circle
            ></el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/mixins/api";
import CreateList from "@/components/CreateList";
export default {
  name: "HelloWorld",
  props: {},
  mixins: [api],
  components: { CreateList },
  data() {
    return {
      centerDialogVisible: false,
      windowWidth: window.innerWidth,
      listDeleteStatus: false,
    };
  },
  methods: {
    setDeleteStatus(value) {
      this.listDeleteStatus = value;
    },
    logOut() {
      this.centerDialogVisible = false;
      this.$store.commit("logout");
    },
    deleteList(event) {
      console.log("deleteList click");
      event.stopPropagation();
    },
    editList() {
      // console.log("editList click");
    },
  },
  mounted() {
    this.getLists();
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

.navbar .logo {
  font-size: 1.5em;
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
  margin: 0px 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list,
.list .el-card {
  padding: 10px;
  cursor: pointer;
  width: 300px;
  margin: 10px auto;
  /* height: 130px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

.create-list-wrapper {
  text-align: end;
  margin-right: 40px;
  margin-top: 50px;
}

.truncate {
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: auto;
}

.card-button {
  /* padding: 10px; */
  margin: 10px 0;
  cursor: pointer;
}

.button-wrapper {
  width: 250px;
  text-align: end;
}

.isDesktopButton {
  padding: 10px;
}
.isMobileButton {
  padding: 15px;
  font-size: 1.3em;
}
</style>
