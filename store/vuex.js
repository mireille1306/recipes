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
    searchQuery: ''
  },
  
  getters: { // computed

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
    }
  }
})