<template>
  <div>
    <ul class="nav" v-for="src in sources" :key="src">
      <li>
        <router-link v-bind:to="'/news/'+src.id">{{src.name}}</router-link>
      </li>
    </ul>
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
      source: "",
      sourceName: "",
      sources: [],
      stories: []
    };
  },
  methods: {
    fetchData() {
      this.$http
        .get("https://newsapi.org/v2/sources?apiKey=" + this.API_KEY)
        .then(function(res) {
          this.sources = res.body.sources;
        });
    }
  }
};
</script>

<style scoped>

</style>
