<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about" tag="button">About</router-link> -->
      <router-link to="/about">About</router-link> |
      <router-link to="/book">BookList</router-link> |
      <router-link to="/item/1">Item</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    /* 表示されているページとパスが完全一致している場合につく */
    &.router-link-exact-active {
      color: #42b983;
    }

    /* 表示されているページにパスが含まれる場合につく */
    /* &.router-link-active {
      color: red;
    } */
  }
}
</style>
