<template>
  <v-container>
    <v-layout  justify-center text-xs-center wrap>
      <v-flex sm12>
        <v-btn color="primary">Submit Story</v-btn>
      </v-flex>
      <v-flex sm12 md8>
        <v-text-field label="Title" outline v-model="storyData.title"></v-text-field>
      </v-flex>
      <v-flex sm12 md4>
        <v-text-field label="Author Name" outline v-model="storyData.author"></v-text-field>
      </v-flex>
      <v-flex sm12>
        
        <v-textarea label="Tags" placeholder="Separate tags with commas" outline v-model="storyData.tags"></v-textarea>
        <v-textarea label="Summary" placeholder="Story Summary" outline v-model="storyData.summary"></v-textarea>
        <vue-editor v-model="storyData.body"></vue-editor>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {VueEditor} from 'vue2-editor';
export default {
  name: "AllStories",
  components: {
      VueEditor
  },
  data(){
    return {
      storyData: {
        id: 3,
        author: "",
        title: "",
        createdDate: "",
        summary: "This is the story of a girl. Who cried a river an drown the whole world. But while she looks so sad in photographs. I absolutely love her. when she smiles",
        tags: '',
        body: '<h1>Some Initial Content</h1>'
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