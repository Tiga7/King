<template>
  <a-form name="register-form" :model="formState" :rules="rules" v-bind="layout">

    <a-form-item has-feedback label="Username" name="username">
      <a-input v-model:value="formState.username" type="text" autocomplete="off" />
    </a-form-item>

    <a-form-item has-feedback label="Password" name="password">
      <a-input v-model:value="formState.password" type="password" autocomplete="off" />
    </a-form-item>

    <a-form-item has-feedback label="Confirm" name="checkPass">
      <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="register">Submit</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      username: "",
      password: '',
      checkPass: '',
    });

    let check_username = async (rule, value) => {
      if (value.length < 6) {
        return Promise.reject('用户名最少长度为6');
      }
      if (value.length > 20) {
        return Promise.reject('用户名过长');
      }
      return Promise.resolve();
    };

    let check_password = async (rule, value) => {
      if (value.length < 6) {
        return Promise.reject('密码最少长度为6');
      }
      if (value.length > 20) {
        return Promise.reject('密码过长');
      }
      return Promise.resolve();
    };

    let check_confirm = async (rule, value) => {
      if (value === '') {
        return Promise.reject('请再次输入密码');
      } else if (value !== formState.password) {
        return Promise.reject("两次输入的密码不匹配");
      } else {
        return Promise.resolve();
      }
    };

    const rules = {
      username: [
        {
          min: 6,
          max: 20,
          required: true,
          validator: check_username,
          trigger: 'change',
        },
      ],
      password: [
        {
          min: 6,
          max: 20,
          required: true,
          validator: check_password,
          trigger: 'change',
        },
      ],
      checkPass: [
        {
          min: 6,
          max: 20,
          required: true,
          validator: check_confirm,
          trigger: 'change',
        },
      ],

    };
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 4,
      },
    };


    const resetForm = () => {
      formState = ''
    };
    const register = () => {

    }

    return {
      formState,
      formRef,
      rules,
      layout,
      register,
      resetForm,
    };
  },
});
</script>

<style scoped>

</style>