<template>
  <div class="gamemap" ref="parent">
    <canvas ref="canvas" />
  </div>
</template>

<script>
import { GameMap } from '../../../assets/scripts/GameMap'

import { ref, onMounted } from 'vue';
export default {
  setup() {
    let parent = ref(null)
    let canvas = ref(null)

    onMounted(() => {
      //创建一个新的gamemap对象
      new GameMap(canvas.value.getContext('2d'), parent.value)
      // console.log(canvas.value.getContext('2d'))
    })

    return {
      parent,
      canvas
    }
  }
}
</script>

<style scoped>
.gamemap {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>