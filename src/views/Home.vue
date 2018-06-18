<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <Sources/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sources from '@/components/Sources.vue'

export default {
  name: 'sources',
  components: {
    Sources
  }
}
</script>
