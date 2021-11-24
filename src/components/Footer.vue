<template>
  <footer>
    <Logo />
    <a
      href="#"
      target="_blank">(c){{ new Date().getFullYear() }} WONSEOK</a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .5;
  .logo{
    display: block;
    margin-bottom: 4px;
  }
}
</style>