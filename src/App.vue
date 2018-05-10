<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <li>
          <router-link :to="{name: 'Home'}">
            <div><img src="../assets/images/home.svg"></div>
            <div>首页</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Categories'}">
            <div><img src="../assets/images/category.svg"></div>
            <div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'ShoppingCart'}">
            <div><img src="../assets/images/cart.svg"></div>
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Me'}">
            <div><img src="../assets/images/me.svg"></div>
            <div>我</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
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
</style>
