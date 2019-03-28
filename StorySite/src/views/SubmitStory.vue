<template>
  <v-container>
    <v-layout  justify-center column text-xs-center wrap>
      <h1 class="aqua">Submit Story</h1>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "AllStories",
  components: {
      
  },
  data(){
    return {
      storydatatemp: {
        title: "Story Name",
        id: 3,
        tags: ['Story','Tags','Here']
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.gridview{
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.aqua{
  color: $primary;
}
</style>