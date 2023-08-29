<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="home-view">
          <router-view/>
        </div>

        <div class="align-to-center">
          <router-link style="text-decoration: none; font-size: 15px;"  :to="`/login`">立即登录</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link style="text-decoration: none; font-size: 15px;" :to="`/register`">立即注册</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link style="text-decoration: none; font-size: 15px;" :to="`/recover`">忘记密码</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link style="text-decoration: none; font-size: 15px;" :to="`/index`">免费体验</router-link>
        </div>
        <div class="beian">
          <a style="color: grey; font-size: 12px;" href="https://beian.miit.gov.cn/">
            <span>桂ICP备2022008455号-2</span>
          </a>
        </div>
      </el-aside>
      <el-main class="poster">
      </el-main>
    </el-container>
  </div>
</template>


<script setup lang="ts">

</script>

<style scoped>

.poster {
  background-image: url(https://source.unsplash.com/1280x720/?movie);
  background-size: cover;
  background-position: right center;
  width: 70vw;
  height: 100vh;
}

.align-to-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-aside {
  width: 396px;
}

.beian {
  width: 396px;
  position: absolute;
  bottom: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-view {
  margin: 130px auto;
  height: 330px;
}

a {
  color: rgb(64, 158, 255);;
}

@media screen and (max-width: 600px) { /* 调整 600px 为适当的阈值 */
  .common-layout {
    display: flex;
    flex-direction: column;
  }

  .poster {
    display: none; /* 隐藏 <el-main> 部分 */
  }

  .home-view {
    margin: 20px 0;
    height: 425px;
  }
  .el-aside {
    width: 375px;
  }

  .beian {
    width: 375px;
    position: absolute;
    bottom: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


</style>