<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="main-logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="project" />
          <span>Project</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="question-circle" />
          <span>Help</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 16px">
        <nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<style lang="scss">
.main-logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
