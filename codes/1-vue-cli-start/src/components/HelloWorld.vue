<template>
  <div class="hello">
    <!-- 文本 -->
    <h1>{{ msg }}</h1>
    <!-- <h1>{{ name }}</h1> -->

    <!-- html && v-bind 添加 id 属性-->
    <!-- <div v-html ="msg1" id = {{id}}></div> -->
    <div v-html="msg1" v-bind:id="id"></div>
    <!-- <div v-html ="msg1" :id = "id"></div> -->

    <!-- 表达式 -->
    <div>{{ num1 + 1 }}</div>

    <!-- v-if -->
    <p v-if ="seen">现在你看到我了</p>
    <p v-else>失败了</p>

    <!-- 自定义指令 -->
    <p v-n ="3"></p>

  </div>
</template>

<script>
export default {
  // component name
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      msg1: '<span style = "color:red">Hello World!</span>',
      id: "id",
      num1: 0,
      seen:false
    };
  }
  // data:{
  //   msg:1
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
