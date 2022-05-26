<template>
  <div class="row">
    <div class="col-12 d-flex flex-column">
      <h1 class="p-3">Gifted</h1>
      <form @submit.prevent="createGift()">
        <div class="my-3 px-2">
          <label for="tag" class="form-label ms-1">Tag</label>
          <input
            required
            type="text"
            class="form-control"
            id="tag"
            v-model="editable.tag"
          />
        </div>
        <div class="mb-5 px-2">
          <label for="url" class="form-label ms-1">URL</label>
          <input
            required
            type="text"
            class="form-control"
            id="url"
            v-model="editable.url"
          />
        </div>
        <button class="btn btn-primary ms-3 mb-3 justify-self-end">
          Submit
        </button>
      </form>
      <label
        for="url"
        class="form-label top-line ms-2 pt-3 border-top border-light"
        >Search Gifs</label
      >
      <form @submit.prevent="search()">
        <div class="input-group mb-3 px-2">
          <input
            for="search"
            type="text"
            class="form-control"
            v-model="editable.search"
          />
          <button class="btn btn-primary" id="button-addon2">
            <i class="mdi mdi-magnify"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="row mx-1">
    <Giphy v-for="g in giphys" :key="g.id" :giphy="g" :editable="editable" />
  </div>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { logger } from '../utils/Logger'
import { giphyService } from '../services/GiphyService'
import Pop from '../utils/Pop'
import { sandboxService } from '../services/SandboxService'
import { AppState } from '../AppState'
export default {
  setup() {
    let editable = ref({ tag: '', url: '' })
    return {
      editable,
      giphys: computed(() => AppState.giphys),
      async getGifts() {
        try {
          await sandboxService.get()
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async search() {
        try {
          const total = await giphyService.search(editable.value.search)
          Pop.toast(total + ' results found', 'info')
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async createGift() {
        if (await Pop.confirm('<i class="mdi mdi-arrow-up-thick"></i> You want to post this gift? <i class="mdi mdi-arrow-up-thick"></i>', 'It had better be sick, okay?', editable.value.url, 'DO IT')) {
          try {
            await sandboxService.create(editable.value)
            Pop.toast('Succesfully created a new gift!', 'success')
          } catch (error) {
            logger.error(error)
            Pop.toast(error.message, 'error')
          }
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
h1 {
  font-family: "Kreon", serif;
}

.top-line {
  width: 96%;
}
</style>