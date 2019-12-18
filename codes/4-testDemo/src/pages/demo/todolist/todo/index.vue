<template>
    <li class="todo-container" id="">
        <Checkbox v-model="single" @click.native="$emit('checked',id)">
            {{text}}
            <!-- {{id}} -->
        </Checkbox>
        <span class ="icon" @click = "$emit('deleteById', id)">
            <Icon type="md-backspace" size = "14px"/>
        </span>
    </li>
</template>
<script>
export default {
   props: ['text','id'],
   data() {
      return {
          single: false
      }
   },
}
</script>

<style scoped>
/* css */
.todo-container{
    border-radius: 2px;
    border-left: 5px solid #629A9C;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    padding: 0px 4px;
    margin:4px 0px;
    list-style: none;
}
.icon{
    float: right;
}
.icon:hover{
    cursor: pointer;
    color: #2d8cf0;
}
</style>