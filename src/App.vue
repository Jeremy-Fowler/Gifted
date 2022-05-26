<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-3 bg-success tall">
        <Sidebar />
      </div>
      <div class="col-md-9">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.tall {
  min-height: 100vh;
}
</style>
