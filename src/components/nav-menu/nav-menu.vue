<template>
  <div class="nav-menu">
    <el-menu
      class="el-menu-vertical"
      :default-active="$route.path"
      :background-color="$store.state.themeColor"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <h3 class="title" v-show="!isCollapse">通用管理后台</h3>
      <template v-for="item in menuList">
        <el-submenu index v-if="item.children" :key="item.name">
          <template slot="title">
            <i :class="'el-icon-' + item.icon"></i>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="subItem.url"
              v-for="subItem in item.children"
              :key="subItem.name"
              @click="clickMenu(subItem)"
              >{{ subItem.label }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item
          :index="item.url"
          v-else
          :key="item.name"
          @click="clickMenu(item)"
        >
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navMenu',
  data() {
    return {
      isCollapse: false,
      menuList: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: '/main/home'
        },
        {
          path: '/goods',
          name: 'goods',
          label: '商品管理',
          icon: 'video-play',
          url: '/main/goods'
        },
        {
          path: '/users',
          name: 'users',
          label: '用户管理',
          icon: 'user',
          url: '/main/users'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '其他1',
              icon: 'setting',
              url: '/main/page1'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '其他2',
              icon: 'setting',
              url: '/main/page2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    clickMenu(item) {
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border: none;
  height: 100%;
  .title {
    text-align: center;
    color: #fff;
  }
}
</style>
