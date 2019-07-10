<template>
  <li :class="{'active': collapsed}">
    <svg class="filter-icon icon-ingredients">
      <use xlink:href="~/assets/images/icons/icons.svg#icon-ingredients"></use>
    </svg>
    <span class="title" @click="collapsed = !collapsed">Ingredienten</span>
    <span class="amount" :class="{'inactive': !ingredients.length}">{{ingredients.length}}</span>
    <svg class="icon-chevron-right">
      <use xlink:href="~/assets/images/icons/icons.svg#icon-chevron-right"></use>
    </svg>
    <ul>
      <li class="checkbox"><input type="checkbox" :checked="ingredients.includes('meat')"
          @change="selectCheckbox('meat')"><span>Vlees</span></li>
      <li class="checkbox"><input type="checkbox" :checked="ingredients.includes('fish')"
          @change="selectCheckbox('fish')"><span>Vis</span></li>
      <li class="checkbox"><input type="checkbox" :checked="ingredients.includes('vegetables')"
          @change="selectCheckbox('vegetables')"><span>Groenten</span></li>
    </ul>
  </li>
</template>

<script>
  export default {
    data () {
      return {
        collapsed: false
      }
    },

    computed: {
      ingredients() {
        return this.$store.state.filters.ingredients
      },
    },

    methods: {
      selectCheckbox (value) {
        this.$store.commit('setIngredients', value);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
