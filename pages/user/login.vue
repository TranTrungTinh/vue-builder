<template>
  <section class="login">
    <div class="login--title">
      <h1>WELCOME TO WEB BUILDER</h1>
    </div>
    <div class="login--form">
      <login />
    </div>
  </section>
</template>

<script>

export default {
  layout: 'blank',
  components: {
    Login: () => import('@/components/authentication/login.vue')
  }
}
</script>
<style lang="scss" scoped>
.login {
  &--title {
    text-align: center;
    margin-top: 100px;
    h1 {
      font-weight: 700;
      font-size: 24px;
      font-family: 'Source Sans Pro';
    }
  }
  &--form {
    max-width: 500px;
    padding: 40px 20px;
    margin: 0 auto;
  }
}
</style>
