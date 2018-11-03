<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloGit',
  data: function() {
        return {

            msg: 'Hello GitHub message'
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: green;
}
</style>
