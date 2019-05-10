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
          v-model="searchString"
        ></v-text-field>
      </v-flex>
      <v-flex class="spaceOut" sm12 md6 lg4 v-for="story in filterStories" :key="story.id">
        <story-card :storydata="story"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import{
    mapGetters, mapActions
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
      storyArray:[],
      searchString: ""
    }
  },
  methods: {
    ...mapActions(['fetchStories']),
    search() {
      // this.parseSearch(this.searchString);
    },
    // parseSearch(entryString) {
    //   let query = {};
    //   let params = entryString.split(" ");
    //   params.forEach((param) =>{
    //     if(param.indexOf(":" != -1)){
    //       let kv = param.split(":");
    //       query[kv[0]] = kv[1];
    //     }else{
    //       query.push(param);
    //     }
    //   })
    //   var queryString = Object.keys(query).map(key => key + '=' + query[key]).join('&');

      
    //   // eslint-disable-next-line
    //   console.log(query);
      
    //   // eslint-disable-next-line
    //   console.log(queryString);
    // }
    termInStory(term,story){
      let inTitle = story.title.indexOf(term);
      let inAuthor = story.author.indexOf(term);
      let inSummary = story.summary.indexOf(term);

      if(inTitle != -1){
        return true;
      }
      if(inAuthor != -1){
        return true;
      }
      if(inSummary != -1){
        return true;
      }
      story.tags.forEach((tag) => {
        if(tag.indexOf(term) != -1){
          return true;
        }
      });

      return false;
    }
  },
  computed:{
    ...mapGetters(['apiURL']),
    filterStories(){
      if(this.searchString == "" || this.searchString == null){
        return this.storyArray;
      }

      // let filteredStories = [];
      let params = this.searchString.split(" ");

      let filteredStories = this.storyArray.filter((story => {
        let amtParams = params.length;
        let foundParams = 0;

        for(let param in params) {
          param = params[param];
          if(param.slice(0,1) == '-'){
            if(this.termInStory(param.slice(1),story) == true){
              continue;
            }else{
              foundParams++;
            }
          }else{
            let qins = this.termInStory(param,story)
            if(qins){
              foundParams++;
            }else{
              continue;
            }
          }
        }

        if(amtParams == foundParams){
          return true;
        }else{
          return false;
        }
      }));
      return filteredStories;

    }
  },
  created() {
    this.fetchStories("").then(res => {
      this.storyArray = res
    });
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