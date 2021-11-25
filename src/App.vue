<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about" tag="button">About</router-link> -->
      <router-link to="/about">About</router-link> |
      <router-link to="/book">BookList</router-link> |
      <router-link to="/item/1">Item</router-link> |
      <router-link to="/user/profile">User</router-link>
    </div>
    <div class="blue-b">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <router-view name="sub" />
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

.blue-b {
  border: 1px blue solid;
}

.fade {
  &-enter {
    transform: translate(-100px, 0);
    opacity: 0;
    &-to {
      opacity: 1;
    }
    &-active {
      transition: all 1s 0s ease;
    }
  }
  &-leave {
    transform: translate(0, 0);
    opacity: 1;
    &-to {
      transform: translate(100px, 0);
      opacity: 0;
    }
    &-active {
      transition: all 0.5s 0s ease;
    }
  }
}
</style>
