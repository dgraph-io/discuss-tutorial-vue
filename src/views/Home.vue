<template>
  <div class="layout-margin">
    <PostFeed />
  </div>
</template>

<script>
// @ is an alias to /src
import PostFeed from '@/components/PostFeed'

export default {
  name: 'Home',
  components: { PostFeed }
}
</script>
