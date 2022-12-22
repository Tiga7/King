<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', background: 'white' }">
      <NavBar />
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '90px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: 'calc(100vh - 160px)' }">
        <RouterView />
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      KOB
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
import NavBar from './components/NavBar.vue';
export default defineComponent({
  components: {
    NavBar
  },
  setup() {
    return {
    };
  },
});
</script>
<style>
body {
  background-image: url("@/assets/background.jpg");
  background-size: cover;
}
</style>