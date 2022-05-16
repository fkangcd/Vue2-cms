<template>
  <div class="home">
    <el-container>
      <el-aside
        width="auto"
        :style="{ 'background-color': $store.state.themeColor }"
      >
        <nav-menu ref="navMenuRef"></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header @collapseClick="handleCollapse"></nav-header>
        </el-header>

        <el-main>
          <common-tags class="common-tags"></common-tags>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from '@/components/nav-menu/nav-menu'
import navHeader from '@/components/nav-header/nav-header'
import commonTags from '@/components/common-tags/common-tags'

export default {
  components: {
    navMenu,
    navHeader,
    commonTags
  },
  methods: {
    handleCollapse() {
      this.$refs.navMenuRef.isCollapse = !this.$refs.navMenuRef.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #545c64;
}
.el-header {
  background-color: #333;
}
.common-tags {
  margin-bottom: 20px;
}
</style>
