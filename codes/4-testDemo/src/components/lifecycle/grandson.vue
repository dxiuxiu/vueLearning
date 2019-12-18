<template>
  <div class id></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    window.console.log("grandson beforeCreate");
  },
  created() {
    window.console.log("grandson created");
  },
  beforeMount() {
    window.console.log("grandson beforeMount");
  },
  mounted() {
    window.console.log("grandson mounted");
  },
  beforeUpdate() {
    window.console.log("grandson beforeUpdate");
  },
  updated() {
    window.console.log("grandson updated");
  },
  beforeDestroy() {
    window.console.log("grandson beforeDestroy");
  },
  destroyed() {
    window.console.log("grandson destroyed");
  }
};
</script>

<style scoped>
/* css */
</style>