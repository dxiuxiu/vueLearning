<template>
  <div class id>
    pageB {{$store.state.count.count}}
    <button @click="add(2)">count 增加</button>
    <button @click="reduce">count 减少</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("count", {
      add: "add", // 将 `this.add()` 映射为 `this.$store.dispatch('add')`
      reduce: "reduce" // 将 `this.reduce()` 映射为 `this.$store.dispatch('reduce')`
    })
  },
  data() {
    return {};
  },
  activated() {}
};
</script>

<style scoped>
/* css */
</style>