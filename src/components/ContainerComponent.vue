<template>
  <div class="container">
    <h1 style="color: #4ea1d3; font-size: 23px">{{ msg }}</h1>
    <hr class="horizon-line" v-show="line">
    <el-row :gutter="40">
      <el-col
          v-for="card in cards"
          :key="card.index"
          :span="6"
      >
        <el-card :body-style="{ padding: '0px' }">
          <div class="image-container">
            <img alt="poster"
                 :src="card.image"
                 class="image"
            />
            <div class="image-text">{{ card.name }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>

</template>

<script lang="ts" setup>
import {reactive} from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  msg: {
    type: String,
    default: ""
  },
  line: {
    type: Boolean,
    default: true
  }
})

const cards = reactive([
  {index: 1, name: '外星人也难民', image: 'https://vip1.loli.net/2020/05/09/DfCdWP7sKEjghlN.jpg'},
  {
    index: 2,
    name: '咒术回战 第二季',
    image: 'https://img14.360buyimg.com/ddimg/jfs/t1/143992/8/36548/86417/64a72bd8F64c21ed0/25854e9277931022.jpg'
  },
  {
    index: 3,
    name: '新 假面骑士',
    image: 'https://img12.360buyimg.com/ddimg/jfs/t1/216473/1/35720/58040/64b99a67F11829d14/48bdb1dc072164f4.jpg'
  },
  {
    index: 4,
    name: '铃芽之旅',
    image: 'https://img11.360buyimg.com/ddimg/jfs/t1/132288/7/32676/83209/64a1be20Fbc0d5a35/3d168ee46b50272a.jpg'
  },
  {
    index: 5,
    name: '机动战士高达 水星的魔女',
    image: 'https://img14.360buyimg.com/ddimg/jfs/t1/202446/21/22700/105315/6432f21bF51a0711b/14e8f8247c550174.jpg'
  },
  {
    index: 6,
    name: '羊毛战记',
    image: 'https://img11.360buyimg.com/ddimg/jfs/t1/195997/27/35044/67125/64552eb5F7e6ae781/07c9834c7763f1bd.jpg'
  },
  {
    index: 7,
    name: '我推的孩子',
    image: 'https://img12.360buyimg.com/ddimg/jfs/t1/74244/9/24759/58820/6436e4e4F6391322d/bd3e4abd9abaaebb.jpg'
  },
  { index: 8, name: '绝命毒师 1-6季', image: 'https://f005.backblazeb2.com/file/img-forWeb/uPic/6LNXFO.jpg'},

])
</script>

<style scoped>

.container {
  margin: 40px 200px;
}

.el-card {
  --el-card-border-color: rgb(49,51,54);
  --el-card-border-radius: 0;
  cursor: pointer;
}
.image-container {
  position: relative;
  width: 100%;
  height: 390px; /* Adjust the desired height */
  overflow: hidden;
}

.image {
  width: 100%;
  display: block;
  object-fit: cover;
}

.image-text {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 5px;
  font-size: 17px;
  font-weight: bolder;
  font-family: Helvetica, serif;
  width: 100%;
  height: 33px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  color: white;
}

.name {
  color: #52616a;
  font-size: 15px;
}

.el-row {
  margin: 20px 100px;
}

.el-col {
  margin-bottom: 40px;
}

hr {
  border-color: #4ea1d3;
  border-width: 0.7pt;
}

</style>
