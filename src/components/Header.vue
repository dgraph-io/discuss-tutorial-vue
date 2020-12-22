<template>
  <div class="ui clearing segment header-seg">
    <h3 class="ui right floated header header-seg-right">
      <span>
        <sui-button class="dgraph-btn" @click="showCreateModal = true">Create Post</sui-button>
        
      </span>
    </h3>
    <h3 class="ui left floated header header-seg-left">
      <router-link to="/">
        <div class="flex">
          <span>
            <sui-image size="tiny" src="/diggy.png" class="mr-5" />
          </span>
          <div>
            <p class="header-text">Dgraph</p>
            <p class="t-size">DISCUSS</p>
          </div>
        </div>
      </router-link>
    </h3>
    <CreatePostModal v-model="showCreateModal" />
  </div>
</template>

<script>
import CreatePostModal from './CreatePostModal'

export default {
  components: { CreatePostModal },

  data() {
    return {
      showCreateModal: false
    }
  } 
}
</script>