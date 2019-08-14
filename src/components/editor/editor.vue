<template>
  <div id='gjs' />
</template>

<script>

export default {
  name: 'grapesjs',
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      gjs: null
    }
  },
  mounted () {
    this.gjs = this.$grapesjs.init(Object.assign({}, this.options, {
      allowScripts: 1,
      showOffsets: 1,
      container: '#gjs',
      fromElement: true,
      canvas: {
        styles: ['https://fonts.googleapis.com/css?family=Roboto', 'https://fonts.googleapis.com/icon?family=Material+Icons', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css'],
        scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js']
      },
      // plugins: [preset],

      storageManager: {
        type: 'indexeddb',
        id: 'generator-id'
      }
    }))
  },
  destroyed () {
    this.gjs.destroy()
  }
}
</script>

<style src='grapesjs/dist/css/grapes.min.css'></style>


