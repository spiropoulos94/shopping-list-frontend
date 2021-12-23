// define a mixin object
let api = {
  created() {
    this.mixinTest();
  },
  methods: {
    mixinTest() {
      console.log("hello from mixin");
      console.log(this.$store);
    },
    async signUp(data) {
      console.log("data pou pane gia signup", data);
      await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
    },
    async login(data) {
      console.log("data pou pane gia login", data);
      await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
    },
  },
};

export default api;
