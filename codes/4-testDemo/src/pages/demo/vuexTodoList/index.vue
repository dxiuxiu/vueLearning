<template>
  <div id>
    <defaultLayout>
      <div class="todolist-container">
        <section>
          <h2>添加</h2>
          <Input v-model="value" placeholder="请输入..." style="width: 300px" @keyup.enter.native="add"/>
        </section>
        <section>
          <h2>待办项</h2>
          <ul>
              <todo
              v-for = "item in willTodolist" 
              :key = "item.id" 
              :id = "item.id" 
              :text = "item.text" 
              @checked="checked"
              @deleteById = "deleteById"/>
          </ul>
        </section>
        <section>
          <h2>已完成</h2>
          <ul>
              <done 
              v-for = "item in donelist" 
              v-bind:key = "item.id" 
              v-bind:id = "item.id" 
              v-bind:text = "item.text"
              @unCheck="unCheck"
              @deleteById = "deleteById"/>
          </ul>
        </section>
      </div>
    </defaultLayout>
  </div>
</template>
<script>
import defaultLayout from "../../../layouts/default";
import todo from "./todo";
import done from "./done";
export default {
  components: {
    defaultLayout,
    todo,
    done
  },
  data() {
    return {
      value: "",
      todolist:[
          {
            text:'待办项测试1',
            state:'todo',
            id:0.4056509919422904
          },
          {
            text:'待办项测试2',
            state:'todo',
            id:0.39016219607191616
          },
          {
            text:'已完成项测试1',
            state:'done',
            id:0.8675064692602146
          },
          {
            text:'已完成项测试2',
            state:'done',
            id:0.24906101332528485
          }
      ]
    };
  },
  methods: {
    add: function() {
        // window.console.log(this.value)
        // window.console.log(this.todolist)
        this.todolist.push({
            text:this.value,
            state:'todo',
            id:Math.random()
        })
    },
    checked:function(id){
        // window.console.log(id)
        for(const item of this.todolist){
            if(item.id === id){
                item.state = 'done'
                return
            }
        }
    },
    unCheck:function(id){
        // window.console.log(id)
        for(const item of this.todolist){
            if(item.id === id){
                item.state = 'todo'
                return
            }
        }
    },
    deleteById:function(id){
        window.console.log(id)
        this.todolist = this.todolist.filter(item => item.id !== id)
    }
  },
   computed: {
      willTodolist: function(){
          return this.todolist.filter(item => item.state === 'todo')
      },
      donelist: function(){
          return this.todolist.filter(item => item.state === 'done')
      }
  },
}
</script>

<style scoped>
/* css */
.todolist-container {
  padding: 8px;
  margin: 0 auto;
  width: 500px;
}
</style>