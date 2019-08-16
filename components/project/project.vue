<template>
  <div class="project--container">
    <div class="project" @click="handleAddNew">
      <div class="project--content">
        <a-icon type="plus" />
        <p>Add New</p>
      </div>
    </div>
    <add-new v-if="show" :show="show" @onClose="handleClose" />
  </div>
</template>

<script>

export default {
  components: {
    AddNew: () => import('@/components/modal/add-project.vue')
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleAddNew () {
      this.show = true
    },
    handleClose () {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  width: 200px;
  height: 100px;
  border: dashed 1px #333;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f2f2f2;
  }

  &--content {
    text-align: center;
    font-size: 18px;
    p {
      margin-bottom: 0;
    }
  }

}
</style>
