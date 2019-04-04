<template>
  <v-hover :disabled="disableCard">
    <v-card 
    slot-scope="{ hover }" 
    :class="`elevation-${hover ? 12 : 2}`" 
    class="rounded-card"
    :to="disableCard ?'' : `/story/`+storydata.id"
    >
      <v-card-title>
        <div>
          <span class="headline">{{storydata.title}} </span>
          <br>
          <span class="grey--text tl">{{storydata.author}}</span>
        </div>
        <v-spacer></v-spacer>
        {{storydata.createdDate}}
        
      </v-card-title>
      <v-card-text>
        {{storydata.summary}}
      </v-card-text>
      <v-card-actions>
        <v-chip 
        small 
        selected 
        v-for="tag in storydata.tags" 
        :key="tag"
        class="spacedOut"
        >
            {{tag}}
        </v-chip>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
    name: "StoryCard",
    props: ['storydata','disableCard'],
    data() {
        return {
          exampleCard: {
            id: 3,
            author: "Author name",
            title: "Title of Story",
            createdDate: "2019-04-02",
            summary: "This is the story of a girl. Who cried a river an drown the whole world. But while she looks so sad in photographs. I absolutely love her. when she smiles",
            tags: ['Story','Tags','Here']
          }
        }
    }
}
</script>

<style scoped>
.rounded-card{
    border-radius: 1rem;
    /* max-width: 560px; */
}
.spacedOut {
    margin: 5px;
}
.tl{
  text-align:left;
}
</style>
