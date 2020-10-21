<template>
  <div class="ui clearing segment header-seg">
    <h3 class="ui right floated header header-seg-right">
        <span v-if="$auth.isAuthenticated">

        </span>
        <span v-else>
            <sui-button class="dgraph-btn" @click="$auth.loginWithRedirect">Log In</sui-button>
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>