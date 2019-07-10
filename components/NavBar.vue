<template>
  <div class="navigation-bar">
    <svg class="icon-settings"><use xlink:href="~/assets/images/icons/icons.svg#icon-settings"></use></svg>
    <div class="view-selector">
      <svg class="icon-grid" @click="setListView(true)" :class="{'active': listView}"><use xlink:href="~/assets/images/icons/icons.svg#icon-list"></use></svg>
      <svg class="icon-grid" @click="setListView(false)" :class="{'active': !listView}"><use xlink:href="~/assets/images/icons/icons.svg#icon-grid"></use></svg>
    </div>
    <svg class="icon-search" @click="setSearchToActive(active = !active)" :class="{'active': searchActive}"><use xlink:href="~/assets/images/icons/icons.svg#icon-search"></use></svg>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        active: false
      }  
    },

    computed: {
      listView () {
        return this.$store.state.listView
      },

      searchActive () {
        return this.$store.state.searchActive
      }
    },
     
    methods: {
      setListView (status) {
        this.$store.commit('setListView', status);
      },

      setSearchToActive (status) {
        this.$store.commit('setSearchToActive', status);
      }
    }
  }
</script>

<style>
  .navigation-bar {
    background: #fff;
    padding: 14px 22px;   
    box-shadow: 0 4px 8px 0 rgba(138,107,118,0.08);
    color: #E0DCDC;
    display: flex;
    justify-content: space-between;
    height: 48px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .navigation-bar svg.active {
    fill: #ED6B9C;
  }

  .navigation-bar svg {
    fill: #E0DCDC;
    height: 20px;
    width: 20px;
    display: inline-block; 
  }

  .navigation-bar .view-selector svg {
    margin: 0 8px;
  }
</style>
