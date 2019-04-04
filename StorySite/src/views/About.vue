<template>
  <v-container>
    <v-layout  justify-center column text-xs-center wrap>
      <h1 class="aqua">About</h1>
      <p>
        This is a simple project made for the modern world.
      </p>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "About",
  components: {
    
  },
  data(){
    return {
      storydatatemp: {
        title: "Story Name",
        id: 3,
        tags: ['Story','Tags','Here']
      },
      range(value){
        return [...Array(value).keys()]
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.gridview{
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}

.aqua{
  color: $primary;
}
</style>
