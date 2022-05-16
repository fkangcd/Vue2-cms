<template>
  <div class="home">
    <el-col :span="8">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <img src="" alt="" />
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped></style>
