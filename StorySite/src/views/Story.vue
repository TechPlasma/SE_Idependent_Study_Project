<template>
  <v-container>
    <v-layout justify-space-around text-xs-center wrap>
      <v-flex sm12 md8 class="spaceout">
        <h1 class="aqua">Selected Story</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vero necessitatibus qui ex, possimus esse ea porro? Neque amet officia, autem ullam ad expedita ipsa aperiam minima voluptatem nemo aut nisi sapiente facilis eius quos, veritatis quod ipsam dolores sed nobis molestiae provident atque? Amet, explicabo voluptatum quasi deleniti vitae consequatur. Iure itaque dolores non, iste, dignissimos natus dolore, provident alias quidem odit nesciunt expedita tempora. Pariatur deleniti ea dolores illo asperiores laborum, harum veritatis exercitationem omnis, repellendus magni nulla tenetur voluptate doloremque sunt rem aspernatur similique provident doloribus fuga temporibus est reiciendis quisquam mollitia. Possimus iste dolore distinctio illo cupiditate facilis maxime eum consectetur autem. Magni aliquam in unde eligendi minima? Perferendis, laboriosam. Pariatur quisquam delectus tempora ab atque. Laboriosam unde sapiente qui ex amet libero rem, id a nemo veniam eaque quisquam, expedita quia doloribus facilis doloremque? Sed possimus facilis in asperiores, laborum itaque accusantium omnis? Totam ducimus aut nesciunt atque minus nostrum ab. Nobis, quas dicta. Aliquam eaque quasi hic, tempora nulla doloribus temporibus sequi perspiciatis ipsa, quam amet et vero cupiditate maiores necessitatibus rerum aperiam sint voluptatum tempore! Commodi facilis expedita enim hic tempore culpa fugiat ad distinctio, fugit aliquid, maiores, facere aut reiciendis excepturi possimus laboriosam fuga asperiores laborum ipsa. Eligendi, laborum? Necessitatibus eligendi doloribus ipsum quia itaque labore ducimus,
        </div>
      </v-flex>
      <v-flex sm12 md4 class="spaceout"> 
        <story-card :storydata="storydatatemp" disableCard/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
    }
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
</style>