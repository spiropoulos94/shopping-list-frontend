<template>
  <div>Hello World</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
    };
  },
  methods: {
    test() {
      console.log("test");
      return "fsafsadasa";
    },
    formatTooltip(val) {
      return val / 100;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
