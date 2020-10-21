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
import Header from '@/components/Header'

export default {
  components: { Header }
}
</script>

<style>
.App {
  background-clip: content-box;
}

.app-banner {
  padding: 5px;
  height: 30px;
  text-align: center;
  font-size: larger;
  background-color: #eaeaea;
}

.slash-img {
  height: 25px;
}

.header-text {
  background: -webkit-linear-gradient(#ff1800, #ff009b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0px;
  font-size: x-large;
}

.t-size {
  font-size: smaller;
}

.layout-margin {
  margin: 2.5rem 7rem 7rem 7rem;
}

.tags-field {
  width: 41%;
}
</style>
