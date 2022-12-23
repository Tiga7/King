<template>
  <div class="playground">
    <GameMap></GameMap>
  </div>
</template>

<script>
import GameMap from './GameMap.vue';
export default {
  components: {
    GameMap
  },
  setup() {

    return {}
  }
}
</script>

<style scoped>
.playground {
  height: 70vh;
  width: 70vw;
  background-color: aliceblue;
  margin: auto;
}
</style>