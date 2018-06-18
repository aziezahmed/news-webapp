<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <Sources/>
      </div>
      <div class="col-8">
        <Headlines v-bind:source="source"/>  
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sources from '@/components/Sources.vue'
import Headlines from '@/components/Headlines.vue'

export default {
  name: 'news',
  props: ['source'],
  components: {
    Sources,
    Headlines
  }
}
</script>

<style>
</style>

