<template>
  <div class="container news">
    <div class="row">
      <nav class="sources col-4">
        <ul class="nav" v-for="src in sources" :key="src">
          <li>
            <a href="#" v-on:click="source = src.id; sourceName = src.name;">{{src.name}} <i v-if="src.id == source"></i></a>
          </li>
        </ul>
      </nav>
      <main class="headlines col-8">
        <h1 class="h2">{{sourceName}}</h1>
        <div v-for="story in stories" :key="story">
          <p><a v-bind:href="story.url">{{story.title}}</a><br>{{story.description}}</p>
        </div>
        <p>Powered by <a href="https://newsapi.org/">NewsAPI.org</a>.</p>
      </main>
    </div>    
  </div>
</template>

<script>
export default {
  name: "News",
  created() {
    this.fetchData();
  },
  data: function() {
    return {
      API_KEY: "",
      source: "bbc-news",
      sourceName: "BBC News",
      sources: [],
      stories: []
    };
  },
  watch: {
    source: "fetchNews"
  },
  methods: {
    fetchData() {
      this.fetchNews();
      this.$http
        .get("https://newsapi.org/v2/sources?apiKey=" + this.API_KEY)
        .then(function(res) {
          this.sources = res.body.sources;
        });
    },
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
.headlines {
  padding-top: 0.5rem;
}
.sources {
  position: sticky;
  top: 0;
  height: calc(100vh);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
