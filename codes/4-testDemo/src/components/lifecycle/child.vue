<template>
  <div class id>
    我是子组件
    <section>
        从父组件中传递过来的值 {{num}}
        <button @click = "$emit('changeParentNum', 2)">
            修改父组件中的 num 值
        </button>
    </section>
  </div>
</template>
<script>
export default {
  props: ["num"],
  data() {
    return {};
  },
  methods: {
      changeParentNum : function(){

      }
  },
  beforeCreate() {
    window.console.log("child beforeCreate");
  },
  created() {
    window.console.log("child created");
  },
  beforeMount() {
    window.console.log("child beforeMount");
  },
  mounted() {
    window.console.log("child mounted");
  },
  beforeUpdate() {
    window.console.log("child beforeUpdate");
  },
  updated() {
    window.console.log("child updated");
  },
  beforeDestroy() {
    window.console.log("child beforeDestroy");
  },
  destroyed() {
    window.console.log("child destroyed");
  }
};
</script>

<style scoped>
/* css */
</style>