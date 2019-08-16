<template>
  <div />
</template>

<script>
import NProgress from 'nprogress'
// NProgress.configure({ showSpinner: false })
export default {
  methods: {
    start () {
      NProgress.start()
    },
    finish () {
      NProgress.done()
    }
  }
}
</script>
