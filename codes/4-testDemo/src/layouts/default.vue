<template>
    <div class="default-layout" id="">
        <myHeader/>
        <slot></slot>
        <div class="footer-container">
            <myFooter/>
        </div>
    </div>
</template>
<script>
import myHeader from '../components/header'
import myFooter from '../components/footer'

export default {
    components: {
        myHeader,
        myFooter
    },
   data() {
      return {
      }
   }
}
</script>

<style scoped>
/* css */
.default-layout{
}
.footer-container{
    width: 100%;
    position: fixed;
    bottom: 0px;
}
</style>