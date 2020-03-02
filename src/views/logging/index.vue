<template>
  <div>
    <Button @click="throwError">Default</Button>
  </div>
</template>

<script>
  export default {
    name: "logging",
    methods: {
      throwError(){
        this.run();
      }
    }
  }
</script>

<style scoped>

</style>