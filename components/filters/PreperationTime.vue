<template>
  <div class="block-filter">
    <div class="square" @click="setPreparationTime(1)" :class="{'active': prepTime === 1}">
      <svg class="icon-cooking-time">
        <use xlink:href="~/assets/images/icons/icons.svg#icon-cooking-time"></use>
      </svg>
      <span>15 min</span>
    </div>
    <div class="square" @click="setPreparationTime(2)" :class="{'active': prepTime === 2}">
      <svg class="icon-cooking-time">
        <use xlink:href="~/assets/images/icons/icons.svg#icon-cooking-time"></use>
      </svg>
      <span>30 min</span>
    </div>
    <div class="square" @click="setPreparationTime(3)" :class="{'active': prepTime === 3}">
      <svg class="icon-cooking-time">
        <use xlink:href="~/assets/images/icons/icons.svg#icon-cooking-time"></use>
      </svg>
      <span>60+ min</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      prepTime() {
        return this.$store.state.filters.prepTime
      },
    },

    methods: {
      setPreparationTime (value) {
        this.$store.commit('setPrepTime', value);
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
