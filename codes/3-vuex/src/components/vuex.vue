<template>
    <div class="" id="">
        vuex <span>{{$store.state.count}}</span>
        <button @click = "increment">+</button>
        <button @click = "decrement">-</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
   data() {
      return {
      }
   },
//    分发 store 中的 actions
   methods: mapActions([
       'increment',
       'decrement'
   ]),
   activated() {
   }
}
</script>

<style scoped>
/* css */
</style>