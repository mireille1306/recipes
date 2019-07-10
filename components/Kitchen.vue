<template>
  <li :class="{'active': collapsed}">
    <svg class="filter-icon icon-kitchen">
      <use xlink:href="~/assets/images/icons/icons.svg#icon-cuisine"></use>
    </svg>
    <span class="title" @click="collapsed = !collapsed">Keuken</span>
    <span class="amount" :class="{'inactive': !kitchen.length}">{{kitchen.length}}</span>
    <svg class="icon-chevron-right">
      <use xlink:href="~/assets/images/icons/icons.svg#icon-chevron-right"></use>
    </svg>
    <ul>
      <li class="checkbox"><input type="checkbox" :checked="kitchen.includes('chinese')"
          @change="selectCheckbox('chinese')"><span>Chinees</span></li>
      <li class="checkbox"><input type="checkbox" :checked="kitchen.includes('dutch')"
          @change="selectCheckbox('dutch')"><span>Nederlands</span></li>
      <li class="checkbox"><input type="checkbox" :checked="kitchen.includes('american')"
          @change="selectCheckbox('american')"><span>Amerikaans</span></li>
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
      kitchen() {
        return this.$store.state.filters.kitchen
      },
    },

    methods: {
      selectCheckbox (value) {
        this.$store.commit('setKitchen', value);
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
