<template>
  <div id="app">
    <grapesjs :options="gjsConfigs" />
  </div>
</template>

<script>
import preset from '@/plugins/materials'
import save from 'grapesjs-indexeddb'

export default {
  name: "app",
  data () {
    return {
      gjsConfigs: {
        plugins: [preset, save],
        pluginsOpts: {
          [save]: {
            dbName: 'project'
          }
        }
      }
    }
  }
};
</script>

<style lang="scss">
  @import "@/assets/sass/main.scss";
</style>