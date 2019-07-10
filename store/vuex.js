import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({

  state: { // data
    listView: localStorage.getItem('listView') === 'true',
    recipesApi: 'http://recepten.tijdemanbouwexpertise.nl/cockpit/api/collections/get/recipe',
    recipes: [],
    searchActive:false,
    searchQuery: ''
  },
  
  getters: { // computed

  },

  actions: { //methods
    getRecipes () {
      return axios.get(this.state.recipesApi).then(response => {
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
      })
    },

    setSearchToActive(state, status) {
      state.searchActive = status;
    },

    setSearchQuery (state, query) {
      console.log(query)
      state.searchQuery = query;
    }
  }
})