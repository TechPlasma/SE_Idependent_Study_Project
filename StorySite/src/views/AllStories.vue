<template>
  <v-container>
    <v-layout  justify-center column text-xs-center wrap>
      <h1 class="aqua">All Stories</h1>
      <v-flex xs12 sm6>
          <v-text-field
            label="Search"
            single-line
            outline
          ></v-text-field>
        </v-flex>
      <div class="gridview">
        <story-card v-for="i in range(100)" :key="i" :storydata="storydatatemp"/>
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.aqua{
  color: $primary;
}
</style>