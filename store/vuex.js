import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({

  state: { // data
    listView: localStorage.getItem('listView') === 'true',
    recipesApi: '/stubs/recipes.json',
    prepTimeApi: '/stubs/preptime.json',
    difficultyApi: '/stubs/level.json',
    kitchenApi: '/stubs/kitchen.json',
    recipes: [],
    originalRecipes: [],
    searchActive:false,
    searchQuery: '',
    filtersActive: false,
    facets: {
      prepTime: [],
      difficulty: [],
      kitchen: []
    },
    filters: {
      prepTime: 0,
      difficulty: 1,
      kitchen: [],
      ingredients: []
    }
  },
  
  actions: { //methods
    getRecipes () {
      return axios.get(this.state.recipesApi).then(response => {
        return response.data.entries;
      })
    },

    getPrepTimeFilters () {
      return axios.get(this.state.prepTimeApi).then(response => {
        return response.data.entries;
      })
    },

    getDifficultyFilters () {
      return axios.get(this.state.difficultyApi).then(response => {
        return response.data.entries;
      })
    },

    getKitchenFilters () {
      return axios.get(this.state.kitchenApi).then(response => {
        return response.data.entries;
      })
    }
  },

  mutations: { //methods that will only set something
    setListView(state, status) {
      state.listView = status;
      localStorage.setItem('listView', status);
    },

    setRecipes(state) {
      this.dispatch('getRecipes').then(data => {
        state.recipes = data;
        state.originalRecipes = data;
      })
    },

    setFilterPrepTime(state) {
      this.dispatch('getPrepTimeFilters').then(data => {
        state.facets.prepTime = data;
      })
    },

    setFilterDifficulty(state) {
      this.dispatch('getDifficultyFilters').then(data => {
        state.facets.difficulty = data;
      })
    },

    setFilterKitchen(state) {
      this.dispatch('getKitchenFilters').then(data => {
        state.facets.kitchen = data;
      })
    },

    setSearchToActive(state, status) {
      state.searchActive = status;
    },

    setSearchQuery (state, query) {
      state.searchQuery = query;
    },

    setPrepTime (state, value) {
      state.filters.prepTime = value;
    },

    setDifficulty (state, value) {
      state.filters.difficulty = value;
    },

    setKitchen (state, value) {
      let index = state.filters.kitchen.indexOf(value);
      state.filters.kitchen.includes(value) ? state.filters.kitchen.splice(index,1) : state.filters.kitchen.push(value);
    },

    setIngredients (state, value) {
      let index = state.filters.ingredients.indexOf(value);
      state.filters.ingredients.includes(value) ? state.filters.ingredients.splice(index,1) : state.filters.ingredients.push(value);
    },

    resetFilters (state) {
      state.filters = {
        prepTime: 0,
        difficulty: 1,
        kitchen: [],
        ingredients: []
      };
      this.state.recipes = state.originalRecipes;
    },

    setFilters (state) {
      state.filtersActive = false;
      state.recipes = JSON.parse(JSON.stringify(state.originalRecipes)).filter(r => r.preptime._id === state.filters.prepTime)
    },

    toggleFilters (state, value) {
      state.filtersActive = value;
    }
  }
})

export const strict = false;

