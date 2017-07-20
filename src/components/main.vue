<template>
    <div>
      <router-link to='/orderList'>aaaa</router-link>
      <router-link to='/three'>one</router-link>
      <router-link to='/four'>two</router-link>
      <div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
</template>

<script>
    export default {
      computed: {
        defaultActive: function () {
          return this.$route.path.replace('/', '')
        }
      }
    }
</script>

<style>

</style>
