<template>
  <section>
    <navbar />
    <search />
    <div class="container">
        <cards />
    </div> 
    <recipesFilter />
  </section>
</template>

<script>
import store from '~/store/vuex.js'
import { mapMutations } from 'vuex'
import navbar from '~/components/NavBar.vue'
import cards from '~/components/Cards.vue'
import search from '~/components/Search.vue'
import recipesFilter from '~/components/Filter.vue'

export default {
  components: {
    navbar,
    cards,
    search,
    recipesFilter
  },
  store
}
</script>

<style>

</style>
