import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({

  state: { // data
    listView: localStorage.getItem('listView') === 'true',
    recipesApi: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese',
    recipes: [],
    searchActive:false,
    searchQuery: '',
    filtersActive: false,
    filters: {
      prepTime: 0,
      level: 1,
      kitchen: [],
      ingredients: []
    }
  },
  
  actions: { //methods
    getRecipes () {
      return axios.get(this.state.recipesApi).then(response => {
        return response.data.meals;
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
      state.filters.level = value;
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
        level: 1,
        kitchen: [],
        ingredients: []
      };
    },

    setFilters (state) {
      state.filtersActive = false;
    },

    toggleFilters (state, value) {
      state.filtersActive = value;
    }
  }
})

export const strict = false;

