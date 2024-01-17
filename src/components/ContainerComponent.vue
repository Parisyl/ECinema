<template>
  <div>
    <div style="margin: 10px 12.5%; min-width: 100px">
      <h1 style="color: #4ea1d3; font-size: 20px">{{ msg }}</h1>
      <hr class="horizon-line" v-show="line" />
    </div>

    <div style="flex: 1; display: flex; flex-wrap: wrap; justify-content: center; margin: 60px">
      <div style="margin: 0 30px 50px" v-for="card in cards" :key="card.id">
        <div
          :style="'background-image: url(' + card.poster + '); background-size: cover;'"
          class="image-container"
        >
          <div class="image-text">{{ card.name }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="page-container">
    <el-pagination
      layout="prev, pager, next"
      background
      :current-page="currentPage"
      :page-size="pageSize"
      :total="totalItems"
      @current-change="handlePageChange"
      class="pagination"
    ></el-pagination>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const cards = ref([])
interface CardItem {
  id: number
  poster: string
  name: string
}

onMounted(() => {
  axios
    .get('https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=100&lang=Cn')
    .then((res) => {
      console.log(res.data)
      for (let i = 0; i < 20; i++) {
        const cardData = res.data[i].data[0]
        const card: CardItem = {
          id: i,
          poster: cardData.poster,
          name: cardData.name
        }
        cards.value.push(card)
      }
    })
    .catch((error) => {
      console.log(error)
    })
})

defineProps({
  msg: {
    type: String,
    default: ''
  },
  line: {
    type: Boolean,
    default: true
  }
})

const currentPage = ref(1)
const pageSize = ref(20)
const totalItems = ref(100)

// 处理页数变化
const handlePageChange = (newPage: number) => {
  axios
    .get('https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=1000&lang=Cn')
    .then((res) => {
      console.log(res.data)
      cards.value = []
      for (let i = (newPage - 1) * 20; i < newPage * 20; i++) {
        const cardData = res.data[i].data[0]
        const card: CardItem = {
          id: i,
          poster: cardData.poster,
          name: cardData.name
        }
        cards.value.push(card)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  currentPage.value = newPage
}
</script>

<style scoped>
.image-container {
  cursor: pointer;
  position: relative;
  height: 350px;
  width: 250px;
  overflow: hidden;
  box-shadow: 5px 10px 10px rgb(25, 25, 35);
}

.image-text {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 8px;
  padding-top: 15px;
  padding-bottom: 5px;
  font-size: 15px;
  font-weight: bolder;
  font-family: Helvetica, serif;
  width: 100%;
  height: 33px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  color: white;
}

.el-row {
  min-width: 540px;
  margin: 40px 100px;
}

.el-col {
  width: 250px;
  height: 350px;
  margin-bottom: 40px;
}

hr {
  border-color: #4ea1d3;
  border-width: 0.7pt;
}

.page-container {
  position: relative;
}

.pagination {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
