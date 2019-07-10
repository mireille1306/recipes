<template>
  <div class="filter-wrapper">
    <div class="filter-toggle" @click="active = !active">
      <span>Filters</span>
      <span class="amount" v-if="totalFilters">{{totalFilters}}</span>
    </div>
    <div class="filter" :class="{'active':active}">
      <div class="container">
        {{allFilters}}
        <h3>Bereidingstijd</h3>
        <preperationTime />
        <hr>
        <h3>Difficulty</h3>
        <difficulty />
        <hr>
        <h3>More</h3>
        <ul class="list-filter">
          <kitchen />
          <ingredients />
        </ul>
        <div class="btn-group">
          <button class="btn-tint" @click="resetFilters()">Reset</button>
          <button class="btn" @click="setFilters()">Apply filters</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import preperationTime from '~/components/filters/PreperationTime.vue';
  import difficulty from '~/components/filters/difficulty.vue';
  import kitchen from '~/components/filters/kitchen.vue';
  import ingredients from '~/components/filters/ingredients.vue';

  export default {
    components: {
      preperationTime,
      difficulty,
      kitchen,
      ingredients
    },
    data() {
      return {
        active: false,
      };
    },

    computed: {
      totalFilters () {
        return (this.$store.state.filters.prepTime > 0 ? 1 : 0) + (parseFloat(this.$store.state.filters.level > 1 ? 1 : 0)) + this.$store.state.filters.kitchen.length + this.$store.state.filters.ingredients.length;
      },

      allFilters () {
        return this.$store.state.filters;
      }
    },

    methods: {
      resetFilters () {
        this.$store.commit('resetFilters');
        this.active = false;
      },

      setFilters () {
        this.active = false;
      },

      selectCheckbox (filterType, filterValue) {
        let index = this.filters[filterType].indexOf(filterValue);
        this.filters[filterType].includes(filterValue) ? this.filters[filterType].splice(index,1) : this.filters[filterType].push(filterValue);
      }
    },

    watch: {
      // Convert level to number
      'filters.level' (val) {
        this.filters.level = parseFloat(val);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .filter-wrapper {
    height: 80px;

    .filter-toggle {
      position: fixed;
      left: 50%;
      bottom: 25px;
      transform: translateX(-50%);
      background: #ED6B9C;
      border-radius: 24px;
      padding: 13px 25px;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      box-shadow: 0 4px 12px rgba(#000, 0.4);

      .amount {
        background: #fff;
        color: #ED6B9C;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0px;
        margin-left: 5px;
      }
    }
  }

  .filter {
    opacity: 0;
    height: calc(100% - 48px);
    width: 100%;
    background: #fff;
    position: fixed;
    top: 48px;
    left: 0;
    transform: translateY(100%);
    transition: ease all 0.3s;
    overflow-x: auto;

    &.active {
      opacity: 1;
      transform: translateY(0);
    }

    hr {
      margin: 32px 0;
      display: block;
      border-top: 1px solid #E0DCDC;
    }
  }

</style>
