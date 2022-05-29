<template>
  <div class="col-lg-4 col-sm-6 mb-3">
    <div
      v-if="gift.opened"
      class="bg-light align-items-center shadow d-flex flex-column p-3"
    >
      <img :src="gift.url" alt="" />
      <p class="text mt-3">{{ gift.tag }}</p>
    </div>
    <div
      v-else
      @click="openGift()"
      class="
        gift
        selectable
        shadow
        d-flex
        px-3
        justify-content-center
        align-items-center
      "
      title="Click to open your gift!"
    >
      <div class="bg-grey bg-wide d-flex flex-column align-items-center p-3">
        <p>{{ gift.tag }}</p>
        <i class="text-center mt-3">Click to Open</i>
      </div>
    </div>
  </div>
</template>


<script>
import { sandboxService } from '../services/SandboxService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
  props: {
    gift: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      async openGift() {
        try {
          await sandboxService.openGift(props.gift._id)
          Pop.toast('Enjoy your gift!', 'success')
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  height: 30vh;
  width: 100%;
  object-fit: cover;
}
.gift {
  background-image: url("https://images.unsplash.com/photo-1553532434-5ab5b6b84993?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074");
  height: 44vh;
  width: 100%;
  background-size: cover;
  background-position: center;
}
.text {
  height: 7vh;
}
p {
  font-weight: bold;
}
.bg-wide {
  min-width: 17vw;
}
</style>