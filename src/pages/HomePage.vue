<template>
  <div class="row m-4 p-5 scroll">
    <Gift v-for="g in gifts" :key="g.id" :gift="g" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { sandboxService } from '../services/SandboxService'
export default {
  setup() {
    onMounted(async () => {
      try {
        await sandboxService.get()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
