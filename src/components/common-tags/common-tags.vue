<template>
  <div>
    <el-tag
      size="small"
      :closable="item.name !== 'home' ? true : false"
      @close="handleTagClose(item, index)"
      @click="handleTagClick(item)"
      :effect="$route.name === item.name ? 'dark' : 'light'"
      v-for="(item, index) in tagsList"
      :key="item.name"
      >{{ item.label }}</el-tag
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'commonTags',
  computed: {
    ...mapState({
      tagsList: (state) => state.tagsList
    })
  },
  methods: {
    handleTagClick(item) {
      this.$router.push(item.url)
    },
    handleTagClose(item, index) {
      const lastIndex = this.tagsList.length - 1
      this.$store.commit('removeTag', item)
      if (this.$route.name !== item.name) {
        return
      }
      if (lastIndex === index) {
        this.$router.push(this.tagsList[index - 1].url)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-tag {
  margin-right: 10px;
  cursor: pointer;
}
</style>
