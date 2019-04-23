<template>
  <v-container>
    <v-layout justify-space-around text-xs-center wrap>
      <v-flex sm12 md8 class="spaceout">
        <v-card class="rounded-card">
          <v-card-title >
            <v-spacer></v-spacer>
            <h1 class="aqua">{{story.title}}</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <span v-html="storyBody.story_text">
              Story Content Here.
            </span>
          </v-card-text>
          
        </v-card>
      </v-flex>
      <v-flex sm12 md4 class="spaceout"> 
        <story-card :storydata="story" disableCard/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import{
    mapGetters,
    mapActions
} from 'vuex';

export default {
  name: "AllStories",
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
      story:{},
      storyBody: ''
    }
  },
  methods: {
    ...mapActions(['fetchStoryID','fetchStoryBodyID'])
  },
  computed:{
    ...mapGetters(['apiURL']),
  },
  created() {
    this.fetchStoryID(this.$route.params.id).then(res => {
      this.story = res;
    });

    this.fetchStoryBodyID(this.$route.params.id).then(res => {
      this.storyBody = res;
    });
  }

}
</script>

<style lang="scss" scoped>
  .spaceout{
    padding:10px
  }
  .aqua{
    color: $primary;
  }
  .rounded-card{
      border-radius: 1rem;
  }
</style>