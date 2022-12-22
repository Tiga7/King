<template>
  <div class="header">
    <div class="left-entry">
      <div class="logo">
        KOB
      </div>
      <a-menu mode="horizontal">
        <a-menu-item key="home">
          <template #icon>
            <BankFilled />
          </template>
          <RouterLink :to="{ path: '/' }">
            首页
          </RouterLink>
        </a-menu-item>
        <a-menu-item key="game_index">
          <template #icon>
            <DashboardFilled />
          </template>
          <RouterLink :to="{ path: '/game/' }">
            游戏中心
          </RouterLink>
        </a-menu-item>
        <a-menu-item key="pk_index">
          <template #icon>
            <DashboardFilled />
          </template>
          <RouterLink :to="{ path: '/pk/' }">
            pk界面
          </RouterLink>
        </a-menu-item>
        <a-menu-item key="rank_list">
          <template #icon>
            <SignalFilled />
          </template>
          <RouterLink :to="{ path: '/ranklist/' }">
            排行榜
          </RouterLink>
        </a-menu-item>
        <a-menu-item key="record_list">
          <template #icon>
            <VideoCameraFilled />
          </template>
          <RouterLink :to="{ path: '/record/' }">
            对战记录
          </RouterLink>
        </a-menu-item>
      </a-menu>
    </div>

    <div class="right-entry">
      <div>
        <router-link to="/user/login/">
          <a-button type="primary">
            登录
          </a-button>
        </router-link>
        <router-link to="/user/register/">
          <a-button type="primary">
            注册
          </a-button>
        </router-link>

        <a-avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </div>
      <a-dropdown :trigger="['click']">
        <template #overlay>
          <a-menu>
            <a-menu-item key="1" class="right-entry-dropdown-item">
              <router-link to="/">
                <AndroidOutlined />
                我的Bot
              </router-link>
            </a-menu-item>
            <a-menu-item key="2" class="right-entry-dropdown-item">
              <ToolFilled />
              <router-link to="/">
                个人信息
              </router-link>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3" class="right-entry-dropdown-item" @click="logout">
              <ApiFilled />
              退出登录
            </a-menu-item>
          </a-menu>
        </template>
        <a-button>
          <UserOutlined />
          {{ username }}
        </a-button>
      </a-dropdown>

    </div>
  </div>
</template>

<script>

import { useRoute } from 'vue-router'
import { defineComponent, ref, reactive } from 'vue';
import {
  BankFilled, DashboardFilled, SignalFilled, ApiFilled,
  VideoCameraFilled, UserOutlined, AndroidOutlined, ToolFilled
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    BankFilled,
    DashboardFilled,
    SignalFilled,
    VideoCameraFilled,
    UserOutlined,
    AndroidOutlined,
    ToolFilled,
    ApiFilled
  },
  setup() {
    const username = ref("gangan")
    const handleClick = (e) => {
      // console.log("click", e)

    };

    // const route = useRoute();
    const logout = () => {
      console.log("logout")
    }
    return {
      username,
      handleClick,
      logout
    };
  },

});
</script>

<style scoped>
.logo {
  width: 100px;
  height: 30px;
  background: #d4d4d4;
  border-radius: 3px;
  float: left;
  margin: 16px 24px 16px 0;
  line-height: 31px;
  text-align: center;
  justify-content: center;
}

.header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
}

.left-entry {
  min-width: 700px;
}

.right-entry {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
}
</style>