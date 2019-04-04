<template>
  <v-container>
    <v-layout  justify-center column text-xs-center wrap>
      <h1 class="aqua">All Stories</h1>
      <v-flex xs12 sm6>
          <v-text-field
            label="Search"
            single-line
            outline
            clearable
            append-icon="search"
            @click:append="search"
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
.gridview{
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(560px, 1fr));
}

.aqua{
  color: $primary;
}
</style>