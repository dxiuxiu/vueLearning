<template>
    <div class="com" id="">
        <slot name = "header"></slot>

        child component {{name}} {{age}}

        <!-- @click="$emit('patch')" 点击 button 触发父组件的 patch 事件 -->
        <!-- <button @click="$emit('patch')">发送数据到父组件</button> -->
        <button @click="$emit('patch',34)">发送数据到父组件</button>
        <slot name = "footer"></slot>
    </div>
</template>
<script>
export default {
   props:['age'],
   data() {
      return {
          name:'com'
      }
   },
   activated() {
   }
}
</script>

<style scoped>
/* css */
.com{
    background-color: black;
    color: white;
}
</style>