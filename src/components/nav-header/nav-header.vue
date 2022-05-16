<template>
  <div class="nav-header">
    <div class="arrow">
      <i
        class="fold-menu"
        :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        @click="handleFoldClick"
      ></i>
    </div>
    <div class="block">
      <el-color-picker
        @change="handleColorChange"
        v-model="themeColor"
      ></el-color-picker>
    </div>
    <div user-info>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar size="medium" :src="circleUrl"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'navHeader',
  data() {
    return {
      isFold: false
    }
  },
  computed: {
    ...mapState({
      themeColor: (state) => state.themeColor
    })
  },
  methods: {
    handleFoldClick() {
      this.isFold = !this.isFold
      this.$emit('collapseClick')
    },
    handleColorChange(val) {
      this.$store.commit('changeThemeColor', val)
    }
  }
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  .arrow {
    cursor: pointer;
    color: #fff;
  }
}
</style>
