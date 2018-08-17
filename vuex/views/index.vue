<template>
    <div>
        <h1>首页</h1>
        {{count}}
        <button @click="handleIncrement">+</button>
        <button @click="handleDecrease">-1</button>
    <router-link to="./about">跳转到ABOUT</router-link>
    </div>
</template>
<script>
    export default {
  //注意此处通过VUEX的功能调用store里state的count
  computed:{
      count(){
          return this.$store.state.count;
      }
  },
  methods:{
      handleIncrement(){
          this.$store.commit({type:'increment',
             count:10
          });
      },
      handleDecrease(){
          this.$store.commit('decrease');
      }
  }
    }
</script>