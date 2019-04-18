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
            <span v-html="storyBody">
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
import axios from 'axios';
import{
    mapGetters
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
  computed:{
    ...mapGetters(['apiURL']),
  },
  created() {
    // eslint-disable-next-line
    console.log(`Loading from link: ${this.apiURL}/stories/${this.$route.params.id}`)
    
    //Get Story Data
    axios.get(`${this.apiURL}/stories/${this.$route.params.id}`,{
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(res => {
      this.story = res.data[0];
      // eslint-disable-next-line
      console.log(res.data);
    })
    // eslint-disable-next-line
    .catch(err => console.log(err))

    // Get Story Text
    axios.get(`${this.apiURL}/storyText/${this.$route.params.id}`,{
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(res => {
      this.storyBody = (res.data[0]).storyText;
      // eslint-disable-next-line
      console.log(res.data);
    })
    // eslint-disable-next-line
    .catch(err => console.log(err))
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