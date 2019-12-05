<template>
    <div class="" id="">
        pageA {{$store.state.money.money}}

        <button @click = "add">money 增加</button>
        <button @click = "reduce">money 减少</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods: mapActions('money',['add','reduce']),
   data() {
      return {
      }
   },
   activated() {
   }
}
</script>

<style scoped>
/* css */
</style>