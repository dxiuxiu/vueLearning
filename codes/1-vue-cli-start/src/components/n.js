/** @desc 自定义指令 */
import Vue from 'vue'
Vue.directive('n',{
    bind:function(el,binding){
        el.textContent = Math.pow(binding.value,2)
    },
    update:function(el,binding){
        el.textContent = Math.pow(binding.value,2)
    }
})