<template>
  <div class="block-filter">
    <div class="square" @click="setPreparationTime(time._id)" :class="{'active': prepTime === time._id}" v-for="time in facets" :key="time.name">
      <svg class="icon-cooking-time">
        <use xlink:href="~/assets/images/icons/icons.svg#icon-cooking-time"></use>
      </svg>
      <span>{{time.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      prepTime() {
        return this.$store.state.filters.prepTime
      },

      facets () {
        return this.$store.state.facets.prepTime;
      }
    },

    methods: {
      setPreparationTime (value) {
        this.$store.commit('setPrepTime', value);
      }
    },

    created() {
      this.$store.commit('setFilterPrepTime');
    }
  }

</script>

<style lang="scss" scoped>

</style>
