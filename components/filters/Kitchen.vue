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
      <li class="checkbox" v-for="option in facets" :key="option.name"><input type="checkbox" :checked="kitchen.includes(option.name)"
          @change="selectCheckbox(option._id)"><span>{{option.title}}</span></li>
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

      facets () {
        return this.$store.state.facets.kitchen;
      }
    },

    methods: {
      selectCheckbox (value) {
        this.$store.commit('setKitchen', value);
      }
    },

    created() {
      this.$store.commit('setFilterKitchen');
    }
  }

</script>

<style lang="scss" scoped>

</style>
