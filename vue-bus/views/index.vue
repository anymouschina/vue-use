<template>
    <div>
        随机增加：
      <Counter :number="number"></Counter>

    </div>
</template>
<script>
import Counter from './counter.vue';
    export default {
  //注意此处通过VUEX的功能调用store里state的count
    components:{
        Counter
    },
    data(){
        return{
            number:0
        }
    },
    created(){
        this.$bus.on('add',num=>{
            this.number+=num
        });
    }
 
    }
</script>