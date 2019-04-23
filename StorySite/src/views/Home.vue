<template>
  <v-container>
    <v-layout justify-center text-xs-center wrap>
      <v-flex xs12>
        <br><br>
        <h1 class="aqua">Latest TEN Stories</h1>
        <br><br>
      </v-flex>
      <v-flex class="spaceOut" sm12 md6 lg4 v-for="story in storyArray" :key="story.id">
        <story-card :storydata="story"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import axios from 'axios';
import{
    mapActions
} from 'vuex';

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
      },
      storyArray:[]
    }
  },
  methods: {
    ...mapActions(['fetchStories','test']),
  },
  computed:{

  },
  created() {
    // // eslint-disable-next-line
    // console.log(`Loading from link: ${this.apiURL}/stories`)
    
    // axios.get(`${this.apiURL}/stories?limit=10`,{
    //   headers: {
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })
    // .then(res => {
    //   this.storyArray = res.data;
    //   // eslint-disable-next-line
    //   console.log(res.data);
    // })
    // // eslint-disable-next-line
    // .catch(err => console.log(err))
    

    this.fetchStories("?limit=10").then(res => {
        this.storyArray = res;
    });
    // this.test();
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