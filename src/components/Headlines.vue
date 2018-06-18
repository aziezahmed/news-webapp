<template>
  <div>
    <h1>{{sourceName}}</h1>
    <div v-for="story in stories" :key="story">
      <p><a v-bind:href="story.url">{{story.title}}</a><br>{{story.description}}</p>
    </div>
    <p>Powered by <a href="https://newsapi.org/">NewsAPI.org</a>.</p>
  </div>
</template>

<script>
export default {
  name: "News",
  created() {
    this.fetchNews();
  },
  props: ['source'],
  data: function() {
    return {
      API_KEY: "",
      sourceName: "",
      sources: [],
      stories: []
    };
  },
  watch: {
    source: "fetchNews"
  },
  methods: {
    fetchNews() {
      this.$http
        .get(
          "https://newsapi.org/v2/top-headlines?apiKey=" +
            this.API_KEY +
            "&sources=" +
            this.source
        )
        .then(function(res) {
          this.stories = res.body.articles;
        });
    }
  }
};
</script>

<style scoped>

</style>
