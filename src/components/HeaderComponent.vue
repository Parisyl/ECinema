<template>
  <div class="header-container">
    <el-menu
      :default-active="activeIndex"
      background-color="rgb(42, 42, 42)"
      popper-class="el-popper--top"
      class="el-menu-demo"
      text-color="#4ea1d3"
      active-text-color="#4ea1d3"
      mode="horizontal"
      menu-trigger="hover"
      :ellipsis="true"
      router
      @select="handleSelect"
    >
      <el-menu-item @click="onClick('/index')" index="0">
        <i style="font-size: 25px; color: #4ea1d3">EasyCinema</i>
      </el-menu-item>
      <div class="flex-grow" />

      <el-menu-item
        v-for="item in items"
        :key="item.id"
        :index="item.id"
        @click="onClick(item.path)"
      >
        {{ item.name }}
      </el-menu-item>

      <el-sub-menu v-for="sub in subs" :key="sub.id" :index="sub.id">
        <template #title>{{ sub.name }}</template>
        <el-menu-item
          v-for="list in sub.lists"
          :key="list.id"
          :index="list.id"
          @click="onClick(list.path)"
        >
          {{ list.name }}
        </el-menu-item>
      </el-sub-menu>

      <div class="div-search">
        <el-input class="el-input--search" placeholder="可以搜索影视剧的豆瓣编号" v-model="search">
          <template #suffix>
            <el-icon :size="20">
              <Search @click="onSearch" style="color: #4ea1d3; cursor: pointer" />
            </el-icon>
          </template>
        </el-input>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { reactive, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const activeIndex = ref('0')

const items = reactive([
  { id: '1', name: '所有电影', path: '/category/movie' },
  { id: '2', name: '连载剧集', path: '/category/airing' },
  { id: '3', name: '本季新番', path: '/category/anime/new-bangumi' },
  { id: '4', name: '动画', path: '/category/anime/' }
])

const subs = reactive([
  {
    id: '5',
    name: '电影',
    lists: [
      { id: '5-1', name: '欧美电影', path: '/category/movie/western-movie' },
      { id: '5-2', name: '日韩电影', path: '/category/movie/asian-movie' },
      { id: '5-3', name: '华语电影', path: '/category/movie/chinese-movie' },
      { id: '5-4', name: '豆瓣电影Top250', path: '/tag/douban-top250' }
    ]
  },
  {
    id: '6',
    name: '剧集',
    lists: [
      { id: '6-1', name: '欧美剧', path: '/category/drama/western-drama' },
      { id: '6-2', name: '日剧', path: '/category/drama/jp-drama' },
      { id: '6-3', name: '韩剧', path: '/category/drama/kr-drama' },
      { id: '6-4', name: '华语剧', path: '/category/drama/cn-drama' },
      { id: '6-5', name: '其他地区', path: '/category/drama/other' }
    ]
  },
  {
    id: '7',
    name: '类型',
    lists: [
      { id: '7-1', name: '动作', path: '/tag/action' },
      { id: '7-2', name: '喜剧', path: '/tag/comedy' },
      { id: '7-3', name: '爱情', path: '/tag/romance' },
      { id: '7-4', name: '科幻', path: '/tag/sci-fi' },
      { id: '7-5', name: '犯罪', path: '/tag/crime' },
      { id: '7-6', name: '悬疑', path: '/tag/mystery' },
      { id: '7-7', name: '恐怖', path: '/tag/horror' },
      { id: '7-8', name: '纪录片', path: '/tag/documentary' },
      { id: '7-9', name: '综艺', path: '/tag/variety' }
    ]
  },
  {
    id: '8',
    name: '其他',
    lists: [
      { id: '8-1', name: '站长推荐', path: '/tag/recommend' },
      { id: '8-2', name: '关于本站', path: '/about' },
      { id: '8-3', name: '退出登录', path: '/login' }
    ]
  }
])

const onClick = (path: string) => {
  router.push(path)
}

const onSearch = () => {}

const search = ref('')
</script>

<style scoped>
.el-menu-demo {
  height: 100%;
  width: 100%;
  --el-menu-border-color: rgb(42, 42, 42);
}

.flex-grow {
  flex-grow: 1;
}

.el-menu-item {
  font-weight: bolder;
  --el-menu-base-level-padding: 13px;
  --el-menu-hover-bg-color: rgb(42, 42, 42);
  --el-menu-horizontal-sub-item-height: 25px;
  transition-duration: 0s;
}

.el-menu-item.is-active {
  border-bottom: 0 !important;
}

.el-sub-menu {
  font-weight: bolder;
  --el-menu-base-level-padding: 10px;
  --el-menu-hover-bg-color: #fff;
  --el-menu-icon-width: 15px;
}

el-sub-menu.is-active {
  border-bottom: 0 !important;
}

.el-input--search {
  width: 250px;
}
</style>

<style>
.el-popper {
  border: 1px solid rgb(42, 42, 42) !important;
}
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 120px !important;
}
</style>
