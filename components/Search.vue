<template>
  <div class="search" :class="{'active': active}">
    <input type="text" placeholder="Type om te zoeken" v-model="searchQuery" @keyup="setSearchQuery(searchQuery)">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchQuery: '',
      }
    },
    computed: {

      active () {
        return this.$store.state.searchActive;
      }
    },

    methods: {
      setSearchQuery (query) {
        this.$store.commit('setSearchQuery',query);
      },

      setFocus () {
        let element = document.querySelector('.search input');
        element.focus();
      }
    },

    watch: {
      active (val) {
        if (val) {
          this.setFocus();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    background: #F0F0F0;
    padding: 9px;
    transform: translateY(-100%);
    position: relative;
    z-index: -1;
    transition: linear transform 0.3s, linear z-index 0s 0s, linear margin 0.3s;
    margin-top: -56px;

    &.active {
      transform: translateY(0);
      z-index: 0;
      margin-top: 0;
      transition: linear transform 0.3s, linear z-index 0s 0.3s, linear margin 0.3s;
    }

    input {
      border: 0;
      width: 100%;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 16px;

      &::placeholder {
        color: #E0DCDC;
        font-style: italic;
      }

      &:focus {
        outline: none;
      }
    }

    
  }
</style>