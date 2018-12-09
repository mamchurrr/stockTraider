<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand"> Stock Trader </router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" class="nav-item" activeClass="active" tag="li"> <a class="nav-link">Portfolio</a> </router-link>
        <router-link to="/stocks" class="nav-item" activeClass="active" tag="li"> <a class="nav-link">Stocks</a> </router-link>
      </ul>
      <ul class="navbar-nav d-flex justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay()">End day</a>
        </li>
        <li class="my-main-menu dropdown-my">
          <a href="#" class="my-main-menu__link">Save and Load</a>
          <div class="my-dropdown-content">
            <ul class="dropdown-my">
              <li class="dropdown-my__item"><a href="#" class="dropdown-my__link">Save</a></li>
              <li class="dropdown-my__item"><a href="#" class="dropdown-my__link">Load</a></li>
            </ul>
          </div>
        </li>
      </ul>
      <strong class="float-right marginFunds">Funds: {{ funds | currency }}</strong>
  </div>
</nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'appHeader',
    data(){
      return {
        selected: null,
      }
    },
    methods: {
      ...mapActions([
        'rndStocks'
      ]),
      endDay() {
        this.rndStocks();
      }
    },
    computed: {
        funds(){
            return this.$store.getters.fund
        }
    }
}
</script>

<style lang="sass" scoped>
  .marginFunds 
    margin-left: 10px;
  
  .dropdown-my
    z-index: 1
    position: relative 
    &:hover
      .my-dropdown-content
        opacity: 1
        right: -70px
        visibility: visible
        margin-top: 0
        -moz-transform: scaleY(1) //* Для Firefox */
        -ms-transform: scaleY(1) //* Для IE */
        -webkit-transform: scaleY(1) //* Для Safari, Chrome, iOS */
        -o-transform: scaleY(1) //* Для Opera */
        transform: scaleY(1)   
    

  .my-main-menu
    &__link
      line-height: 40px
      color: gray
      display: block
      padding: 0 20px
      text-decoration: none

  .my-dropdown-content
    position: absolute
    background: gray
    width: 200px
    padding: 10px
    border-radius: 5px
    opacity: 0
    right: -10000px
    top: 100%
    visibility: hidden
    margin-top: 30px
    -moz-transform: scaleY(0) //* Для Firefox */
    -ms-transform: scaleY(0) //* Для IE */
    -webkit-transform: scaleY(0) //* Для Safari, Chrome, iOS */
    -o-transform: scaleY(0) //* Для Opera */
    transform: scaleY(0)
    transition: transform .8s, margin-top .9s, opacity .5s, right .5s
    &:before
      content: ''
      display: block
      position: absolute
      left: 20px
      bottom: 100%
      width: 0px
      height: 0px
      border-style: solid
      border-width: 0 18 / 2 + px 7 + px 18 / 2 + px
      border-color: transparent transparent gray transparent

  .dropdown-my
    &__item
      margin-left: -30px
      list-style: none
      margin-bottom: 8px
      &:last-child
        margin-bottom: 0
    &__link
      font-size: 16px
      line-height: 16px
      color: #b2b2b2
      &:hover
        color: #fff
        text-decoration: none

</style>
