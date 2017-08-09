<template>
    <div style="height: 100%">
      <!-- <router-link to='/orderList'>aaaa</router-link>
      <router-link to='/three'>one</router-link>
      <router-link to='/four'>two</router-link> -->
      <el-row class="tac" style="height: 100%">
        <el-col :span="4" style="height: 100%">
          <el-menu theme="dark" default-active="2" class="el-menu-vertical-demo menu" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title"><i class="iconfont icon-kernel"></i>商品管理</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3"><router-link to='/supply'></router-link><i class="iconfont icon-jiaoseguanli"></i>供应商管理</el-menu-item>
            <el-menu-item index="4"><i class="iconfont icon-backup"></i>库存管理</el-menu-item>
            <el-submenu index="2">
              <template slot="title"><i class="iconfont icon-yewuliebiao"></i>统计管理</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="5"><i class="iconfont icon-ruanchongqi"></i>耗损管理</el-menu-item>
          </el-menu>
        </el-col>
        <div>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </el-row>
    </div>
</template>

<script>
    export default {
      computed: {
        defaultActive: function () {
          return this.$route.path.replace('/', '')
        }
      },
      methods: {
        handleOpen (key, keyPath) {
          console.log(key, keyPath)
        },
        handleClose (key, keyPath) {
          console.log(key, keyPath)
        }
      }
    }

</script>

<style>
  .menu {
    height: 100%;
    text-align: left
  }
  .iconfont {
    font-size: 28px;
    margin-right: 5px;
    vertical-align: sub;
  }
  .el-menu li {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .el-menu li a {
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
