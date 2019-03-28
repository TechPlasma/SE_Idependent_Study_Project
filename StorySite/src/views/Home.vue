<template>
  <v-container>
    <v-layout  justify-center column text-xs-center wrap>
      <h1 class="aqua">This is the Home Page</h1>
      <h2>Latest TEN Stories</h2>
      <div class="gridview">
        <story-card v-for="i in range(10)" :key="i" :storydata="storydatatemp"/>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    StoryCard: () => import('@/components/StoryCard.vue')
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