<template>
  <div class="not-found">
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <router-link to="/">
          <a-button type="primary">
            回到首页
          </a-button>
        </router-link>

      </template>
    </a-result>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped>
.not-found {
  height: calc(100vh - 208px);

}
</style>