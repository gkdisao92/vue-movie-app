<template>
  <Header />
  <!-- router의 전체적인 컴포넌트를 볼 수 있는 컴포넌트 -->
  <RouterView />
  <Footer />
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
>