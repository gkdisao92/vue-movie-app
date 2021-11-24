<template>
  <RouterLink
    :to="`/movie/${movie.imdbID}`"
    :style="{backgroundImage:`url(${movie.Poster})`}"
    class="movie">
    <Loader 
      v-if="imageLoading"
      :size="1.5"
      absolute />
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
import Loader from '~/components/Loader'

export default {
  components: {
    Loader
  },
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      imageLoading: true
    }
  },
  // html 요소를 다뤄서 어떠한 메소드를 실행하려고 할때 mount를 이용을 한다.
  // 뭔가가 다 만들어 지기전에?
  mounted(){
    this.init()
  },
  methods: {
    async init(){
      const poster = this.movie.Poster
      if(!poster|| poster === 'N/A') {
        this.imageLoading = false
      }
      else{
        // 비동기 플러그인 미사용
        // const img = document.createElement('img')
        // img.src = this.movie.Poster
        // img.addEventListener('load', () => {
        //   this.imageLoading = false
        // })
        // function 함수를 사용하면 this가 함수 안의 요소를 가르키기 때문에
        // imageLoading을 불러올 수 없게 된다. 그래서 화살표 함수를 쓰는 것이 뷰에서 많은 경우 사용된다.
        
        // 비동기 플러그인 사용
        await this.$loadImage(this.movie.Poster)
        this.imageLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.movie {
  $width: 168px;
  width: $width;
  height: $width * 3 / 2;
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;
  position: relative;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 6px solid $primary;
    cursor: pointer;
  }
  .info {
    background-color: rgba($black, .3);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    .year {
      color: $primary;
    }
    .title{
      color: $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
