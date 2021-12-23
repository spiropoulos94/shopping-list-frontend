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
          // hydrate store user and navigate to home page
        } else if (responseData.message) {
          this.$message.error(responseData.message);
          this.errorLog("Authentication", responseData.message);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
};

export default api;