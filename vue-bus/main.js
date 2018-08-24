import Vue from 'vue';
import VueBus from './vue-bus';
import VueRouter from 'vue-router';
import App from './app.vue';
import Vuex from 'vuex';
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueBus);
const store=new Vuex.Store({
//数据保存在VUEX选项的state字段内如：
state:{
    count:0,
    //在任何组件内可通过$store.state.count读取count数据
    //修改INDEX.VUE代码
    
   
 },//mutations是VUEX的第二个选项，用来修改共享数据的值
  mutations:{
      //函数接受二个参数,参数可以是对象
   increment:function(state,params){
    //此处params是一个对象,修改index内容
     state.count +=params.count;
   },
   decrease(state){
    state.count --;
   }
   }
   //在组件内通过this.$store.commit('/*mutations内部的方法名*/')来操作mutations改变数据

});
// 路由配置
const Routers = [
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        meta: {
            title: '关于'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '/user/:id',
        meta: {
            title: '个人主页'
        },
        component: (resolve) => require(['./views/user.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
];
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    //使用VUEx,Vue的使用是为了跨组件共享数据
    store:store,
    render: h => {
        return h(App)
    }
});