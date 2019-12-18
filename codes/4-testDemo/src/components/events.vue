<template lang="html">
    <div class = "events">
        <button v-on:click="msg"> test </button>
        <button v-on:click="msg('s',$events)"> test </button>
        <!-- <button @click="msg"> test @ </button> -->
        <!-- 为什么这个 counter 不能实时刷新呢? -->
        <button @click="counter +1 "> {{counter}} </button>
    </div>
</template>

<script>
export default {
data () {
    return {
        counter:0
    }
},
methods: {
    // $events 表示当前 dom
    msg:function(a,b){
        window.console.log(Math.random(),a,b)
        // console.log(Math.random())
    }
}
}
</script>

<style scoped>

</style>
