<template>
  <div>
    <ul class="active-filters" v-if="filterTotal > 0">
      <li v-if="filters.prepTime === 1">15 min</li>
      <li v-if="filters.prepTime === 2">30 min</li>
      <li v-if="filters.prepTime === 3">60+ min</li>
      <li v-if="filters.level === '2'">Makkelijk</li>
      <li v-if="filters.level === '3'">Gemiddeld</li>
      <li v-if="filters.level === '4'">Moeilijk</li>
      <li v-for="filter in filters.kitchen" :key="filter">{{filter}}</li>
      <li v-for="filter in filters.ingredients" :key="filter">{{filter}}</li>
      <li @click="resetFilters()">
        <svg class="icon-close">
          <use xlink:href="~/assets/images/icons/icons.svg#icon-close"></use>
        </svg>
        <span>Reset filters</span>
      </li>
    </ul>
    <hr v-if="filterTotal > 0">
    <span v-if="query.length" class="results-amount"><strong>{{recipes.length}}</strong> zoekresultaten voor <strong>'{{query}}'</strong></span>
    <div :class="{'grid-2-xs': !listView, 'grid-1-xs': listView}">
      <div class="card" v-for="recipe in recipes" :key="recipe.title">
        <figure>
          <img :src="recipe.strMealThumb" alt="">
        </figure>
        <div class="text">
          <h2 class="title">{{recipe.strMeal}}</h2>
          <div class="likes">
            <span>100</span>
            <svg class="icon-hart">
              <use xlink:href="~/assets/images/icons/icons.svg#icon-hart"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapMutations
  } from 'vuex'
  import store from '~/store/vuex.js'

  export default {
    store,
    computed: {
      listView() {
        return this.$store.state.listView
      },
      recipes() {
        return this.$store.state.recipes.filter(r => r.strMeal.toLowerCase().includes(this.query.toLowerCase()));
      },
      query() {
        return this.$store.state.searchQuery;
      },
      filters () {
        return this.$store.state.filters;
      },
      filterTotal () {
        return (this.$store.state.filters.prepTime > 0 ? 1 : 0) + (parseFloat(this.$store.state.filters.level > 1 ? 1 : 0)) + this.$store.state.filters.kitchen.length + this.$store.state.filters.ingredients.length;
      }
    },
    methods: {
      resetFilters () {
        this.$store.commit('resetFilters');
      },
    },
    created() {
      this.$store.commit('setRecipes');
    }
  }

</script>

<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(138, 107, 118, 0.08);
    border-radius: 4px;
  }

  .card figure {
    height: 120px;
    width: 100%;
    background: #efefef;
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .card .text {
    padding: 16px;
    background: #fff;
  }

  .card .title {
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    word-break: break-word;
  }

  .card .likes {
    margin: 16px 0 0 0;
    display: flex;
    text-align: right;
    justify-content: flex-end;
    align-items: center;
    color: #C2BEBE;
    font-size: 11px;
  }

  .card .likes svg {
    margin-left: 5px;
    width: 20px;
    height: 20px;
    fill: #E0DCDC;
  }

  .card .likes svg.active {
    fill: #ED6B9C;
  }

  .results-amount {
    margin: 0 0 15px;
    display: block;
    font-size: 18px;
  }

</style>
