<template>
  <div class="slider-filter">
    <input type="range" min="1" max="4" step="1" class="track" v-model="level">
    <div class="description">
      <span :class="{'active': level === '1'}">All</span>
      <span v-for="level in facets" :key="level.name" :class="{'active': level === level.name}">{{level.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      level: {
        get () {
          return this.$store.state.filters.difficulty;
        },
        set (value) {
          this.$store.commit('setDifficulty', value);
        }
      },

      facets () {
        return this.$store.state.facets.difficulty;
      }
    },

    created() {
      this.$store.commit('setFilterDifficulty');
    }
  }

</script>

<style lang="scss" scoped>

</style>
