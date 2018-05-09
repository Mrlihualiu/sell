<template>
  <div id="app">
    <v-header></v-header>  

    <div class="tab">
      <div class="tab-item"> 
          <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <div class="content">
      <!-- 路由出口 -->
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import Vue from 'vue'
  import router from './router'

  export default {
    data(){
      return{
        seller: {}
      }
    },
    components: {
      'v-header':header,
    }
  }

  const app = new Vue({
    router
  }).$mount('#app')

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab{
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
}
.tab-item{
  width: 33.3333%;
  font-size: 18px;
  text-align: center;
}
.tab-item a{
  color: #4ABCCD;
  display: block;
}
.tab-item a.router-link-active{
  color:#C53535;
  background-color: #D8E0DD;
}
</style>
