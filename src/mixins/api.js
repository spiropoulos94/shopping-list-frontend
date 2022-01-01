// define a mixin object

let targetLocalhost = false;

let baseUrl = targetLocalhost
  ? "http://localhost:3000" //local express host
  : "https://kots-shopping-list.herokuapp.com"; // live heroku backend

let api = {
  created() {
    // this.mixinTest();
  },
  methods: {
    errorLog(type = "Authentication", message) {
      throw { type: type, message: message };
    },
    async signUp(formData) {
      let res = await fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // credentials: "include",
        body: JSON.stringify(formData),
      });

      let responseData = await res.json();

      if (responseData.token) {
        this.$store.commit("setToken", responseData.token);
        this.getUser();
        // hydrate store user and navigate to home page
      } else if (responseData.message) {
        this.$message.error(responseData.message);
        this.errorLog("Authentication", responseData.message);
      }
    },
    async login(formData) {
      try {
        let res = await fetch(`${baseUrl}/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // credentials: "include",
          body: JSON.stringify(formData),
        });

        let responseData = await res.json();

        if (responseData.token) {
          this.$store.commit("setToken", responseData.token);
          this.getUser();
          // hydrate store user and navigate to home page
        } else if (responseData.message) {
          this.$message.error(responseData.message);
          this.errorLog("Authentication", responseData.message);
        }
      } catch (e) {
        console.error(e);
      }
    },

    async getUser() {
      let token = this.$store.getters.token;
      if (!token) {
        console.log("no token");
        return;
      }
      try {
        let res = await fetch(`${baseUrl}/api/user`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        let { data } = await res.json();

        this.$store.commit("setUser", data);

        this.$router.replace("/");
      } catch (e) {
        console.error(e);
      }
    },
    async getLists() {
      let token = this.$store.getters.token;
      if (!token) {
        console.log("no token");
        return;
      }
      try {
        let res = await fetch(`${baseUrl}/api/list`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        let { data } = await res.json();

        console.log("getLists", data);

        this.$store.commit("setLists", data);
      } catch (e) {
        console.error(e);
      }
    },

    async createList(formData) {
      let token = this.$store.getters.token;
      if (!token) {
        console.log("no token");
        return;
      }

      try {
        let res = await fetch(`${baseUrl}/api/list`, {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        let { data } = await res.json();

        console.log(data);

        // this.$store.commit("addList", data);
      } catch (e) {
        console.error(e);
      }
    },

    async deleteList(list) {
      let token = this.$store.getters.token;

      try {
        let res = await fetch(`${baseUrl}/api/list/${list._id}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    },

    async updateList(list) {
      console.log("running in api mixin", list);
      let token = this.$store.getters.token;

      delete list.createdAt;
      delete list.createdBy;
      delete list.newItem;
      delete list.updatedAd;
      delete list.__v;

      try {
        let res = await fetch(`${baseUrl}/api/list/${list._id}`, {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(list),
        });

        console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export default api;
