<template>
  <div class id>
    我是父组件
    <hr />
    <section>
      <button @click="changeNum">changeNum</button>
      <span>{{num}}</span>
    </section>
    <section>
      <button @click="changeArr(Math.random())">changeArr</button>

      <ul>
        <li v-for="item in arr" :key="item">{{item}}</li>
      </ul>
    </section>
    <section>
      <button @click="changeObj">changeObj</button>
      <span>{{obj.num}}</span>
    </section>

    <section>
      我是子组件 child
      <child v-bind:num="num" @changeParentNum="changeParentNum" />
    </section>
  </div>
</template>
<script>
import child from "./child";
export default {
  components: {
    child
  },
  data() {
    return {
      num: 0,
      arr: ["item1", "item2"],
      obj: {
        a: "a",
        num: 0
      }
    };
  },
  methods: {
    changeNum: function() {
      this.num++;
    },
    changeArr: function(item) {
      this.arr.push(item);
    },
    changeObj: function() {
      this.obj.num++;
    },
    changeParentNum: function(val) {
      this.num = this.num + val;
    }
  },
  beforeCreate() {
    window.console.log("parent beforeCreate");
  },
  created() {
    window.console.log("parent created");
  },
  beforeMount() {
    window.console.log("parent beforeMount");
  },
  mounted() {
    window.console.log("parent mounted");
  },
  beforeUpdate() {
    window.console.log("parent beforeUpdate");
  },
  updated() {
    window.console.log("parent updated");
  },
  beforeDestroy() {
    window.console.log("parent beforeDestroy");
  },
  destroyed() {
    window.console.log("parent destroyed");
  }
};
</script>

<style scoped>
/* css */
</style>