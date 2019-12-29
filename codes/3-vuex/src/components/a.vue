<template>
  <div class id>
    pageA {{$store.state.money.money}}
    <button @click="add">money 增加</button>
    <button @click="asyncAdd">money 异步增加</button>
    <button @click="reduce">money 减少</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  // methods: mapActions('money',['add','reduce','asyncAdd']),
  methods: {
    ...mapActions("money", [
        "add",  // 将 `this.add()` 映射为 `this.$store.dispatch('add')`
        "reduce", 
        "asyncAdd" // 将 `this.asyncAdd()` 映射为 `this.$store.dispatch('asyncAdd')`
        ]),
    msg: function() {
      console.log("msg");
    }
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