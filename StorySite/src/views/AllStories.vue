<template>
  <v-container>
    <v-layout  justify-center text-xs-center wrap>
      <v-flex xs12>
        <h1 class="aqua">All Stories</h1>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="Search"
          single-line
          outline
          clearable
          append-icon="search"
          @click:append="search"
        ></v-text-field>
      </v-flex>
      <v-flex class="spaceOut" sm12 md6 lg4 v-for="i in range(100)" :key="i">
        <story-card :storydata="storydatatemp"/>
      </v-flex>
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
        id: 3,
        author: "Author name",
        title: "Title of Story",
        createdDate: "2019-04-02",
        summary: "This is the story of a girl. Who cried a river an drown the whole world. But while she looks so sad in photographs. I absolutely love her. when she smiles",
        tags: ['Story','Tags','Here']
      },
      range(value){
        return [...Array(value).keys()]
      }
    }
  },
  methods: {
    search:() => {}
  }
}
</script>


<style lang="scss" scoped>
  .aqua{
    color: $primary;
  }
  .spaceOut{
    padding: .5rem;
  }
</style>