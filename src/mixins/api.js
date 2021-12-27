// define a mixin object
let api = {
  created() {
    // this.mixinTest();
  },
  methods: {
    errorLog(type = "Authentication", message) {
      throw { type: type, message: message };
    },
    async signUp(formData) {
      let res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
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
        let res = await fetch("http://localhost:3000/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
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
        let res = await fetch("http://localhost:3000/api/user", {
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
        let res = await fetch("http://localhost:3000/api/list", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        let { data } = await res.json();

        console.log(data);

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

      console.log(JSON.stringify(formData));
      try {
        let res = await fetch("http://localhost:3000/api/list", {
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
      let listToBeDeleted = list._id;

      try {
        let res = await fetch(
          `http://localhost:3000/api/list/${listToBeDeleted}`,
          {
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    },
  },
};

export default api;
