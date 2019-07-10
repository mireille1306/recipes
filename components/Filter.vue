<template>
  <div class="filter-wrapper">
    <div class="filter-toggle" @click="active = !active">
      <span>Filters</span>
      <span class="amount">13</span>
    </div>
    <div class="filter" :class="{'active':active}">
      <div class="container">
        <h3>Bereidingstijd</h3>
        <div class="block-filter">
          <div class="square active">
            <svg class="icon-cooking-time">
              <use xlink:href="~/assets/images/icons/icons.svg#icon-cooking-time"></use>
            </svg>
            <span>15 min</span>
          </div>
          <div class="square">
            <svg class="icon-cooking-time">
              <use xlink:href="~/assets/images/icons/icons.svg#icon-cooking-time"></use>
            </svg>
            <span>30 min</span>
          </div>
          <div class="square">
            <svg class="icon-cooking-time">
              <use xlink:href="~/assets/images/icons/icons.svg#icon-cooking-time"></use>
            </svg>
            <span>60+ min</span>
          </div>
        </div>
        <hr>
        <h3>Difficulty</h3>
        slider
        <hr>
        <h3>More</h3>
        <ul class="list-filter">
          <li :class="{'active': collapsed.cuisine}" @click="collapsed.cuisine = !collapsed.cuisine">
            <svg class="filter-icon icon-cuisine"><use xlink:href="~/assets/images/icons/icons.svg#icon-cuisine"></use></svg>
            <span class="title">Keuken</span>
            <span class="amount">1</span>
            <svg class="icon-chevron-right"><use xlink:href="~/assets/images/icons/icons.svg#icon-chevron-right"></use></svg>
            <ul>
              <li><input type="checkbox"><span>optie</span></li>
              <li><input type="checkbox"><span>optie</span></li>
              <li><input type="checkbox"><span>optie</span></li>
            </ul>
          </li>
          <li :class="{'active': collapsed.ingredients}" @click="collapsed.ingredients = !collapsed.ingredients">
            <svg class="filter-icon icon-ingredients"><use xlink:href="~/assets/images/icons/icons.svg#icon-ingredients"></use></svg>
            <span class="title">Ingredienten</span>
            <span class="amount">12</span>
            <svg class="icon-chevron-right"><use xlink:href="~/assets/images/icons/icons.svg#icon-chevron-right"></use></svg>
            <ul>
              <li><input type="checkbox"><span>optie</span></li>
              <li><input type="checkbox"><span>optie</span></li>
              <li><input type="checkbox"><span>optie</span></li>
            </ul>
          </li>
        </ul>
        <div class="btn-group">
          <button class="btn-tint">Reset</button>
          <button class="btn">Apply filters</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: false,
        collapsed: {
          ingredients: false,
          cuisine: false
        }
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



  .block-filter {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    margin: 0 0 16px;

    svg {
      width: 40px;
      height: 40px;
      fill: #ED6B9C;
      margin: 0 0 15px;
    }

    .square {
      position: relative;
      padding: 25px;
      color: #615F5F;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #FFFFFF;
      box-shadow: 0 4px 8px 0 rgba(138, 107, 118, 0.08);
      border-radius: 4px;
      font-size: 15px;
      text-align: center;

      &.active {
        background: #ED6B9C;
        color: #fff;

        svg {
          fill: #fff;
        }
      }
    }
  }

  .list-filter {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .filter-icon {
      width: 24px;
      height: 24px;
      fill: #E0DCDC;
      margin: 0 8px 0 0;
    }

    li {
      list-style: none;
      padding: 16px 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      border-top: 1px solid #E0DCDC;


      &:first-child {
        border-top: 0;
      }

      .title {
        flex: 0 0 calc(100% - 76px);
      }

      .amount {
        background: #ED6B9C;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        margin: 0 8px 0 0;
      }

      &.active {

        ul {
          height: auto;
          margin: 16px 0 0 0;
          z-index: 0;
          opacity: 1;
          transition: ease height 0s , ease opacity 0.2s;

          li {
            padding: 16px 0;
            transition: ease all 0.3s;
          }
        }
      }

      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex: 0 0 100%;
        height: 0; 
        z-index: -100;
        opacity: 0;
        position: relative;
        transition: none;
        

        li {
          padding: 0;
          transition: ease all 0.3s;

          &:first-child {
            border-top: 1px solid #E0DCDC;
          }
        }
      }
    }

    .icon-chevron-right {
      fill: #ED6B9C;
      height: 16px;
      width: 16px;
    }
  }

</style>
