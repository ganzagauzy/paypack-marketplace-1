<template>
  <div>
    hello
    <button type="button" @click="onCopy">Button</button>
  </div>
</template>

<script>
export default {

  methods: {

    onCopy() {

      this.$copyText("Hello link")
    },
  },
  layout: "empty",

}
</script>

<style>

</style>
