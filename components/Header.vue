<template>
  <div class="header">
    <span></span>
    <span>{{title}}</span>
    <span v-if="filterAction" @click="setFilters()">Done</span>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      filterAction: String
    },
    methods: {
      setFilters () {
        this.$store.commit('setFilters');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    background: #fff;
    padding: 14px 22px;   
    box-shadow: 0 4px 8px 0 rgba(138,107,118,0.08);
    color: #E0DCDC;
    display: flex;
    height: 48px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;

    >:nth-child(1) {
      flex: 0 0 50px;
    }

    >:nth-child(2) {
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
      flex: 0 0 calc(100% - 102px);
    }

    >:nth-child(3) {
      color: #ED6B9C;
      flex: 0 0 50px;
      text-align:right;
    }
  }

</style>