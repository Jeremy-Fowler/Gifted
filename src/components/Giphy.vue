<template>
  <div
    class="col-12 bg-light ps-0 mb-3 d-flex text-dark shadow rounded selectable"
    @click="setEditable()"
  >
    <img class="rounded-start" :src="giphy.url" alt="" />
    <p class="p-2">
      {{ giphy.tag }}
    </p>
  </div>
</template>


<script>
export default {
  props: {
    giphy: {
      type: Object,
      required: true
    },
    editable: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      setEditable() {
        props.editable.tag = props.giphy.tag
        props.editable.url = props.giphy.url
      }
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  height: 15vh;
  width: 15vh;
  object-fit: cover;
}
</style>