<template>
    <li class="done-container" id="">
        <Checkbox v-model="single" @click.native="$emit('unCheck',id)">
            {{text}}
            <!-- {{id}} -->
        </Checkbox>
        
         <span class ="icon" @click = "$emit('deleteById', id)">
            <Icon type="md-backspace" />
        </span>
    </li>
</template>
<script>
export default {
   props: ['text','id'],
   data() {
      return {
          single: true
      }
   },
}
</script>

<style scoped>
/* css */
.done-container{
    border-radius: 2px;
    border-left: 5px solid #999;
    padding: 0px 4px;
    margin:4px 0px;

    list-style: none;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
}
.icon{
    float: right;
}
.icon:hover{
    cursor: pointer;
    color: #2d8cf0;
}
</style>