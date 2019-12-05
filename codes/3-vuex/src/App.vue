<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Hello World!"/> -->
    <HelloWorld/>
    <!-- 简单 vuex 演示 -->
    <!-- <p>vuex 使用演示</p>
    <vuexx/> -->

    <!-- vuex 进阶演示 -->
    <pagea/>
    <pageb/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import vuexx from './components/vuex'

import pagea from './components/a'
import pageb from './components/b'
export default {
  name: 'app',
  components: {
    HelloWorld,
    // vuexx,
    pagea,
    pageb
  },
  data () {
    return {
      parentAge : 19
    }
  },
  methods: {
    msg:function(p){
      this.parentAge++
      window.console.log(p)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header,footer{
  background-color: #407ceb;
  /* height: 30px; */
}
</style>
