<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link> | 
      <router-link to="/report">Report</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  margin-top: 60px
}
</style>
