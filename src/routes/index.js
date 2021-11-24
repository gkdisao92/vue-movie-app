// 페이지를 관리해주는 구성파일
import  {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import NotFound from './NotFound'

export default createRouter({
  // 2가지 모드가 있는데
  // 1. Hash 모드
  // ex) https://google.com/#/search
  // Hash모드를 사용해야지만 특정 페이지에서 새로고침을 했을 때
  //  페이지를 찾을 수 없다는 메시지를 방지 할 수 있다.

  // 2. History 모드
  // 서버에서 셋팅을 해야하기에 다음에

  history: createWebHashHistory(),
  scrollBehavior(){
    return { top: 0}
  },
  // pages
  // path:'/' => 메인페이지
  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/movie/:id',
      component: Movie
    },
    {
      path:'/about',
      component: About
    },
    {
      path:'/:notFound(.*)',
      component: NotFound
    }
  ]
})