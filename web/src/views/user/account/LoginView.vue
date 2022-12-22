<template>
  <a-form name="login-form" :model="formState" v-bind="layout">
    <a-form-item has-feedback label="用户名" name="username">
      <a-input v-model:value="formState.username" type="text" />
    </a-form-item>

    <a-form-item has-feedback label="密码" name="password">
      <a-input v-model:value="formState.password" type="password" />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 4, offset: 4 }">
      <a-button type="primary" @click="login">登录</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
    </a-form-item>
  </a-form>

</template>

<script>
import { message } from "ant-design-vue";
import { defineComponent, reactive, ref } from "vue";
import api from "../../../request/api";
export default defineComponent({
  setup() {
    const formState = reactive({
      username: "",
      password: "",
    });

    let check_username = async () => {
      if (formState.username === "") {
        message.error("用户名不能为空");
        return false;
      } else if (formState.username > 20) {
        message.error("用户名过长");
        return false;
      }
      return true;
    };

    let check_password = async () => {
      if (formState.password === "") {
        message.error("密码不能为空");
        return false;
      } else if (formState.password.length > 20) {
        message.error("密码过长");
        return false;
      }
      return true;

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
      formState.username = ''
      formState.password = ''
    };

    const login = () => {
      if (check_username() == true && check_password() == true) {
        console.log(formState)
      }
      api.login({
      })
        .then((resp) => {
          console.log(resp)
        })
        .catch((error) => {
          console.log(error)
        })

    }
    return {
      layout,
      formState,
      resetForm,
      login
    };
  },
});
</script>
<style scoped>
.login {
  width: 100%;
  height: 400px;
  background-color: rosybrown;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>