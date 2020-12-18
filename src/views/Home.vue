<template>
  <div class="layout-margin">
    <PostFeed />
  </div>
</template>

<script>
import PostFeed from '@/components/PostFeed'

export default {
  name: 'Home',
  components: { PostFeed }
}
</script>