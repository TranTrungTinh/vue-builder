<template>
  <a-form :form="form" class="login-form">
    <a-form-item>
      <a-input
        v-decorator="['email', { rules: rules.email }]"
        placeholder="Email"
      >
        <a-icon
          slot="prefix"
          type="mail"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="['password', { rules: rules.password }]"
        type="password"
        placeholder="Password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <div class="login-form--item">
        <a-checkbox v-decorator="['remember', { valuePropName: 'checked', initialValue: true }]">
          Remember me
        </a-checkbox>
        <nuxt-link to="/" class="link">
          Forgot password?
        </nuxt-link>
      </div>
    </a-form-item>
    <a-divider />
    <a-form-item>
      <a-button type="primary" html-type="submit" class="login-form--button" @click.stop.prevent="handleSubmit">
        Login
      </a-button>
      <span class="login-form--register">
        <nuxt-link to="/" class="link">Register</nuxt-link>
        <span>if you don't have account</span>
      </span>
    </a-form-item>
    <!-- <a-form-item>
      <p>Use another service to Log In</p>

    </a-form-item> -->
  </a-form>
</template>

<script>

export default {
  data () {
    return {
      form: this.$form.createForm(this),
      rules: {
        email: [{ required: true, message: 'Please input your username!' }],
        password: [{ required: true, message: 'Please input your Password!' }]
      }
    }
  },
  methods: {
    handleSubmit (e) {
      const {
        form: { validateFields }
      } = this
      const validateFieldsKey = ['email', 'password']
      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          console.log(values)
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.login-form {
  .link {
    text-decoration: underline;
  }

  &--item {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  &--button {
    width: 160px;
  }

  &--register {
    padding-left: 40px;
  }

}
</style>
