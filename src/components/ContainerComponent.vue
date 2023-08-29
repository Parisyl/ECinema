<template>
  <div class="container">
    <h1 style="color: #4ea1d3; font-size: 23px">{{ msg }}</h1>
    <hr class="horizon-line" v-show="line">

    <el-row :gutter="40">
      <el-col
          v-for="card in cards"
          :key="card.index"
          :span="size"
      >
        <div :style="'background-image: url(' + card.poster + '); background-size: cover;'"
             class="image-container">
          <div class="image-text">{{ card.name }}</div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script lang="ts" setup>
import {computed, onMounted, ref} from 'vue'
import axios from "axios";

const cards = ref([])

onMounted(() => {
  axios.get('https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn')
      .then(res => {
        console.log(res.data)
        for (let i = 1; i < 40; i++) {
          cards.value.push({
            poster: res.data[i].data[0].poster,
            name: res.data[i].data[0].name
          });
        }
      })
      .catch(error => {
        console.log(error)
      })
});

defineProps(
    {
      msg: {
        type: String,
        default: ''
      },
      line: {
        type: Boolean,
        default: true
      }
    }
)

const size = computed(() => {
  if (window.innerWidth >= 1200) {
    return 6
  } else if (window.innerWidth >= 800 && window.innerWidth < 1200) {
    return 8
  } else if (window.innerWidth >= 400 && window.innerWidth < 800) {
    return 12
  } else {
    return 24
  }
})

</script>

<style scoped>

.container {
  margin: 50px 200px;
}

.image-container {
  position: relative;
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

.el-row {
  margin: 40px 100px;
}

.el-col {
  margin-bottom: 40px;
}


hr {
  border-color: #4ea1d3;
  border-width: 0.7pt;
}


</style>
