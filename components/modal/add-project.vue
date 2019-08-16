<template>
  <a-modal v-model="show" title="Add new project" centered :footer="null">
    <a-form :form="form">
      <a-divider orientation="left">
        Project
      </a-divider>
      <a-form-item label="Project name" v-bind="formItemLayout">
        <a-input
          v-decorator="['projectName']"
          type="text"
          placeholder="project name"
          autocomplete="off"
        />
      </a-form-item>
      <a-divider orientation="left">
        SEO
      </a-divider>
      <a-form-item v-bind="formItemLayout" label="Số tài khoản">
        <a-input
          v-decorator="['accountNumber']"
          type="number"
          placeholder="Nhập số tài khoản"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="Họ và tên">
        <a-input
          v-decorator="['accountName']"
          placeholder="Họ và tên đầy đủ"
          autocomplete="off"
        />
      </a-form-item>
      <div class="add-new--button">
        <a-button type="dashed" style="margin-right: 10px;" @click="$emit('onClose')">
          Quay lại
        </a-button>
        <a-button type="primary" @click.stop.prevent="handleSave">
          Lưu
        </a-button>
      </div>
    </a-form>
  </a-modal>
</template>
<script>
export default {
  props: {
    show: { type: Boolean, required: true }
  },
  data () {
    return {
      form: this.$form.createForm(this),
      rules: {
        // bankName: [{ required: true, message: 'Vui lòng chọn ngân hàng !!!' }],
        // accountNumber: [{ required: true, message: 'Vui lòng nhập số tài khoản !!!' }],
        // accountName: [{ required: true, message: 'Vui lòng nhập đầy đủ họ và tên !!!' }],
      }
    }
  },
  computed: {
    formItemLayout: () => ({
      labelCol: { md: 6, xs: 24 },
      wrapperCol: { md: 18, xs: 24 }
    })
  },
  methods: {
    handleSave () {
      const { form: { validateFields } } = this

      const validateFieldsKey = ['bankName', 'accountNumber', 'accountName']
      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (err) {

        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.add-new--button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
