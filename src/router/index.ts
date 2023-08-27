import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      redirect: '/login',
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/components/LoginComponent.vue')
        },
        {
          path: '/recover',
          name: 'recover',
          component: () => import('@/components/RecoverComponent.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/components/RegisterComponent.vue')
        }],
    },
    {
      path: '/index',
      component: index,
      redirect: '/',
      children: [
        { path: '/', name: 'timeline', component: () => import('@/components/TimelineComponent.vue')},
        { path: '/category/movie', name: 'movie', component: () => import('@/components/category/movie/MovieComponent.vue')},
        { path: '/category/airing', name: 'airing', component: () => import('@/components/category/AiringComponent.vue')},
        { path: '/category/anime/new-bangumi', name: 'new-bangumi', component: () => import('@/components/category/anime/NewBangumi.vue')},
        { path: '/category/anime', name: 'anime', component: () => import('@/components/category/anime/AnimeComponent.vue')},

        { path: '/category/movie/western-movie', name: 'western-movie', component: () => import('@/components/category/movie/WesternMovie.vue')},
        { path: '/category/movie/asian-movie', name: 'asian-movie', component: () => import('@/components/category/movie/AsianMovie.vue')},
        { path: '/category/movie/chinese-movie', name: 'chinese-movie', component: () => import('@/components/category/movie/ChineseMovie.vue')},
        { path: '/tag/douban-top250', name: 'douban-top250', component: () => import('@/components/tag/DoubanTop250.vue')},

        { path: '/category/drama/western-drama', name: 'western-drama', component: () => import('@/components/category/drama/WesternDrama.vue')},
        { path: '/category/drama/jp-drama', name: 'japanese-drama', component: () => import('@/components/category/drama/JapaneseDrama.vue')},
        { path: '/category/drama/kr-drama', name: 'korean-drama', component: () => import('@/components/category/drama/KoreanDrama.vue')},
        { path: '/category/drama/cn-drama', name: 'cn-drama', component: () => import('@/components/category/drama/ChineseDrama.vue')},
        { path: '/category/drama/other', name: 'other', component: () => import('@/components/category/drama/OtherDrama.vue')},

        { path: '/tag/action', name: 'action', component: () => import('@/components/tag/ActionComponent.vue')},
        { path: '/tag/comedy', name: 'comedy', component: () => import('@/components/tag/ComedyComponent.vue')},
        { path: '/tag/romance', name: 'romance', component: () => import('@/components/tag/RomanceComponent.vue')},
        { path: '/tag/sci-fi', name: 'sci-fi', component: () => import('@/components/tag/ScienceFiction.vue')},
        { path: '/tag/crime', name: 'crime', component: () => import('@/components/tag/CrimeComponent.vue')},
        { path: '/tag/mystery', name: 'mystery', component: () => import('@/components/tag/MysteryComponent.vue')},
        { path: '/tag/horror', name: 'horror', component: () => import('@/components/tag/HorrorComponent.vue')},
        { path: '/tag/documentary', name: 'documentary', component: () => import('@/components/tag/DocumentaryComponent.vue')},
        { path: '/tag/variety', name: 'variety', component: () => import('@/components/tag/VarietyComponent.vue')},

        { path: '/tag/recommend', name: 'recommend', component: () => import('@/components/tag/RecommendComponent.vue')},
        { path: '/about', name: 'about', component: () => import('@/components/AboutComponent.vue') },
      ]
    }
  ]
})

export default router
