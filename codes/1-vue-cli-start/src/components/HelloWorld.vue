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


    <div>
      <!-- 表达式实现 -->
      <!-- 我借你{{money}},你还我{{a}},还剩{{money-a}} -->

      <!-- 计算属性实现 -->
      我借你{{money}},你还我{{a}},还剩{{b}}
    </div>

    <!-- vue 类与样式 -->
    <div :class ="[a1,a2]">
      vue 类与样式测试 1
    </div>
    <div :class ="{'test-1':a3}">
      vue 类与样式测试 2
    </div>
    
    <!-- div[:class="obj"] -->
    <div :class="obj">
      vue 类与样式测试 3
    </div>

    <!-- for 循环 -->
    <ul>
      <!-- <li v-for="item in list" :key="item">
        {{item}}
      </li> -->
      <li v-for="(item,index) in list" :key="item">
        item = {{item}},
        index = {{index}}
      </li>

      <!-- ul>li 分组-->
      <ul>
        <template v-for="(item) in list">
          hello <li :key="item">{{item}}</li>
        </template>
      </ul>
    </ul>

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
      seen:false,
      money:100,
      a:1,
      a1:"test1",
      a2:"test2",
      a3:false,
      obj:{
        "test-1":true
      },
      list:['a','b','c','d']
    };
  },
  computed: {
    b:function(){
      return this.money-this.a
    }
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
