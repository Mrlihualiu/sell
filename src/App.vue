<template>
  <div id="app">
    <v-header :seller="seller"></v-header>

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

  const ERR_OK = 0

  export default {
    data:function(){
      return{
        seller: {}
      }
    },
    created: function(){
      this.$http.get('/api/seller').then((response) => {
        console.log(response.body)

        if(response.body.erron === ERR_OK){
        	this.seller = response.body.data
        }
      });
    },
    components: {
      'v-header': header
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
  color: #2c3e50;
}
.tab{
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
}
.tab-item{
  width: 33.3333%;
  font-size: 14px;
  text-align: center;
}
.tab-item a{
  color: #4d555d;
  display: block;
}
.tab-item a.router-link-active{
  color: #f01414;
}
</style>
