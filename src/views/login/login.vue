<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title">后台管理系统</div>
      <el-form
        :model="loginForm"
        status-icon
        :rules="loginFormrules"
        ref="loginFormRef"
        label-width="100px"
        class="loginForm"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="loginForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLoginClick('loginFormRef')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { accountLoginRequest } from '@/service/login/login'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        name: 'coderwhy',
        password: '123456'
      },
      loginFormrules: {
        name: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登陆密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLoginClick(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const res = await accountLoginRequest(this.loginForm)
          console.log(res)
          window.sessionStorage.setItem('token', res.data.data.token)
          this.$router.push('/main')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #2b4b6b;
  .login-box {
    width: 500px;
    height: 600px;
  }
}
</style>
