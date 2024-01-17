<template>
  <div>
    <el-container @keyup.enter="login">
      <el-main>
        <div class="container">
          <div style="display: inline; color: rgb(64, 158, 255); font-size: 40px;">
            <i class="slogan"> EasyCinema</i>
          </div>
          <div style="margin-top: 10px">
            <el-input class="el-input--define" v-model="form.account" placeholder="用户名 / 手机号码 / 邮箱">
              <template #prefix>
                <el-icon>
                  <User/>
                </el-icon>
              </template>
            </el-input>
            <el-input class="el-input--define" v-model="form.password" type="password" placeholder="密码" show-password>
              <template #prefix>
                <el-icon>
                  <Lock/>
                </el-icon>
              </template>
            </el-input>
            <el-button :plain="true" @click="login()" class="el-button--primary" type="primary"> 登录</el-button>
            <div style="margin: 60px 0;">
              <el-divider><span style="color: rgb(157,157,157);">为何选择EasyCinema</span></el-divider>
              <el-text class="custom-text">
                <span style="font-size: 23px; font-weight: bolder; margin-bottom: 5px">便捷、超清、免费</span>
                EasyCinema将成为您生活娱乐和工作休闲的得力助手
                <br>帮助您更加优雅地放松娱乐
              </el-text>
              <el-divider><el-icon><star-filled /></el-icon></el-divider>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import {User, Lock, StarFilled } from '@element-plus/icons-vue'
import {ElMessage} from 'element-plus';
import router from '@/router/index'

const form = reactive({
  account: '',
  password: ''
})

const login = () => {
  if (!form.account || !form.password) {
    ElMessage.warning('请填写账号和密码')
  } else {
    router.push('/')
  }
}
</script>

<style scoped>

.container {
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.el-input--define {
  height: 35px;
  margin-bottom: 5px;
  width: 330px;
}

.el-button--primary {
  height: 35px;
  width: 330px;
  margin-bottom: 5px;
}

.custom-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  white-space: pre-line; /* 保留换行 */
}
</style>
