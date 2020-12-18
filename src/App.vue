<template>
  <div id="root">
    <div class="app-banner">
      <div class="inline-flex">
        <span>
          Powered by
          <a href="https://slash.dgraph.io" target="__blank">
            <strong>Slash GraphQL</strong>
          </a>
        </span>
        <sui-image size="mini" src="/lighting.svg" class="lightning-logo" />
      </div>
    </div>
    <div class="App">
      <Header />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  components: {
    Header
  }
}
</script>
