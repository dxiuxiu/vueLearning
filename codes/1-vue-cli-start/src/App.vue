<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Hello World!"/> -->
    <HelloWorld msg='<span style = "color:red">Hello World!</span>'/>
    <ev/>
    <!-- <com age = "19"/> -->

    <!-- 向子组件传递数据 -->
    <com :age = "parentAge" @patch = "msg">
      <header slot ="header">头部</header>
      <footer slot ="footer">尾部</footer>
    </com>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n'
import ev from './components/events'
import com from './components/com'
export default {
  name: 'app',
  components: {
    HelloWorld,
    ev,
    com
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
