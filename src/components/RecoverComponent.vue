<template>
  <el-container @keyup.enter="recover">
    <el-main>
      <div class="container">
        <div style="display: inline; color: rgb(64, 158, 255); font-size: 35px; "><p class="slogan"> 找回密码</p></div>
        <el-input class="el-input--define" v-model="form.account" placeholder="中国大陆手机号 / 邮箱" clearable>
          <template #prefix>
            <el-icon>
              <User/>
            </el-icon>
          </template>
        </el-input>
        <el-input style="width: 195px; height: 45px; margin-bottom: 5px" v-model="form.verify" placeholder="验证码"
                  clearable>
          <template #prefix>
            <el-icon>
              <Message/>
            </el-icon>
          </template>
        </el-input>
        <el-button v-if="!table.isCounting" class="verify-button" @click="sendCodeToRegister">发送验证码</el-button>
        <el-button v-else disabled class="verify-button">{{ table.countdown }}秒之后获取</el-button>

        <el-input class="el-input--define" v-model="form.password" type="password" placeholder="密码" show-password
                  clearable>
          <template #prefix>
            <el-icon>
              <Lock/>
            </el-icon>
          </template>
        </el-input>
        <el-input class="el-input--define" v-model="form.password1" type="password" placeholder="再次输入密码"
                  show-password clearable>
          <template #prefix>
            <el-icon>
              <Lock/>
            </el-icon>
          </template>
        </el-input>
        <el-button class="el-button--primary" :plain="true" @click="recover" type="primary">提交</el-button>
        <div class="align-to-center" style="font-size: 17px;">
          <el-text>We know, it's not ideal</el-text>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import router from '@/router/index.js'
import {User, Lock, Message} from '@element-plus/icons-vue'
import {ElMessage} from 'element-plus';
import {nameReg, phoneReg, emailReg, passwordReg} from '@/utils/tools'
import axios from 'axios'

const form = reactive({
  account: '',
  verify: '',
  username: '',
  password: '',
  password1: '',
  checked: false
})

const table = reactive({
  countdown: 60,
  isCounting: false
})

const sendCodeToRegister = async () => {
  if (!phoneReg.test(form.account) && !emailReg.test(form.account)) {
    ElMessage.warning('请输入正确的手机号码或邮箱');
    return;
  }

  try {
    if (phoneReg.test(form.account)) {
      await axios.post('/before/SendMessageToRegister', {
        account: form.account
      });
    } else if (emailReg.test(form.account)) {
      await axios.post('/before/SendEmailToRegister', {
        account: form.account
      });
    }
  }
  catch (error: any) {
    ElMessage.warning(error.message);
  }
}

const recover = () => {
  if (!phoneReg.test(form.account) && !emailReg.test(form.account)) {
    ElMessage.warning('手机号码或邮箱或格式有误')
    return;
  } else if (!form.verify) {
    ElMessage.warning('请输入验证码')
    return;
  } else if (!form.password || !form.password1) {
    ElMessage.warning('请输入密码')
    return;
  } else if (!nameReg.test(form.username)) {
    ElMessage.warning('用户名限定长度为4-16个只能包含中文、英文、数字、下划线和减号的字符')
    return;
  } else if (!passwordReg.test(form.password)) {
    ElMessage.warning('密码需包含大小写字母数字和特殊符号')
    return;
  } else if (!form.checked) {
    ElMessage.warning('请同意相关协议和政策')
    return;
  } else {
    let requestPromise;

    requestPromise = axios.post('/before/register', {
      account: form.account,
      verify: form.verify,
      username: form.username,
      password: form.password
    });

    if (requestPromise) {
      requestPromise
          .then((response) => {
            ElMessage.success(response.data); // 假设服务器返回的消息在 response.data 中
            router.push('/login')
          })
          .catch((error) => {
            ElMessage.warning(error.message); // 处理请求失败的情况
          });
    }
  }
}

</script>

<style scoped>

.container {
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

.verify-button {
  width: 130px;
  height: 45px;
  margin-bottom: 5px;
  margin-left: 5px;
  background-color: #fff;
  border: 1px solid rgb(210, 210, 210);
  color: #409eff;
  position: inherit;
}

.el-button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.align-to-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}


</style>