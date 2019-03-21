<template>
    <v-hover>
    <v-card 
    slot-scope="{ hover }" 
    :class="`elevation-${hover ? 12 : 2}`" 
    class="rounded-card"
    :to="`/story/`+storydata.id"
    >
      <v-card-title>
        <div>
          <span class="headline">{{storydata.title}}</span>
          <div class="d-flex">
            
          </div>
        </div>
        <v-spacer></v-spacer>
        
      </v-card-title>
      <v-card-text>

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
    props: ['storydata'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.rounded-card{
    border-radius: 1rem;
}
.spacedOut {
    margin: 5px;
}
</style>
