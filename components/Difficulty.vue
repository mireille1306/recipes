<template>
  <div class="slider-filter">
    <input type="range" min="1" max="4" step="1" class="track" v-model="level">
    <div class="description">{{level}}
      <span :class="{'active': level === '1'}">All</span>
      <span :class="{'active': level === '2'}">Makkelijk</span>
      <span :class="{'active': level === '3'}">Gemiddeld</span>
      <span :class="{'active': level === '4'}">Moeilijk</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      level: {
        get () {
          return this.$store.state.filters.level;
        },
        set (value) {
          this.$store.commit('setDifficulty', value);
        }
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
