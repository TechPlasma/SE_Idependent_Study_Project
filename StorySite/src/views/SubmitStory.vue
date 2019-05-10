<template>
  <div>    
    <v-flex>
      <v-alert
          :value="readyToSubmit"
          :type="submitMode"
          id="Alert"
      >
        <div>
          Would you like to submit the story?
          <v-btn color="primary" @click="postStoryAndData()">Submit Story</v-btn>

        </div>
        
      </v-alert>
    </v-flex>
    <v-container class="scroll-y">
      <v-layout wrap overflow="auto">
        <v-flex sm12 md8>
          <v-text-field label="Title" outline v-model="storyData.title"></v-text-field>
        </v-flex>
        <v-flex sm12 md4>
          <v-text-field label="Author Name" outline v-model="storyData.author"></v-text-field>
        </v-flex>
        <v-flex sm12>
          <v-textarea label="Summary" placeholder="Story Summary" outline v-model="storyData.summary"></v-textarea>
          <v-textarea label="Tags" placeholder="Separate tags with commas" outline v-model="storyData.tags"></v-textarea>
          <vue-editor v-model="storyData.body"></vue-editor>
        </v-flex>
        
      </v-layout>
    </v-container>
    
    <v-btn fab color="warning" fixed right bottom
      v-if="readyToSubmit"
      @click="$vuetify.goTo(target,scrollOptions)"
    >
      <v-icon>expand_less</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {VueEditor} from 'vue2-editor';
import{
    mapActions
} from 'vuex';

export default {
  name: "AllStories",
  components: {
      VueEditor
  },
  data(){
    return {
      submitStory: true,
      submitMode:"warning",
      storyData: {
        author: '',
        title: '',
        summary: '',
        tags: '',
        body: '',
      },
      scrollOptions:{
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      },
      target: "#Alert"
    }
  },
  methods:{
    ...mapActions(['postStory','postStoryBody']),
    postStoryAndData(){
      // eslint-disable-next-line
      console.log("Posting Story");
      let newStory = {
        author: this.storyData.author,
        title: this.storyData.title,
        summary: this.storyData.summary,
        tags: this.storyData.tags
      }

      let story = {
        story_text: this.storyData.body,
        id: null
      }

      this.postStory(newStory).then(res => {
        // eslint-disable-next-line
        console.log(`Response: `,res);
        story.id = res.id;
        this.postStoryBody(story).then(res => {
          // eslint-disable-next-line
          console.log(`Response: `,res);
          this.$router.push({ path: `/story/${story.id}` }) 
        })
      })


    }
  },
  computed:{
    readyToSubmit() {
      if(this.storyData.author != '' && this.storyData.title != '' && this.storyData.summary != '' && this.storyData.tags != '' && this.storyData.body != ''){
        return true;
      }else{
        return false;
      }
    }
  }
}
</script>


<style lang="scss" scoped>

.aqua{
  color: $primary;
}
</style>