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
          <a class="nav-link" href="#">End day</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" 
              href="#" 
              id="navbarDropdown" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">Save and Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save</a>
            <a class="dropdown-item" href="#">Load</a>
          </div>
        </li>      
      </ul>
      <strong class="float-right marginFunds">Funds: {{ funds }}</strong>
  </div>
</nav>
</template>

<script>
export default {
    name: 'appHeader',
    computed: {
        funds(){
            return this.$store.getters.fund
        }
    }
}
</script>

<style lang="scss" scoped>
  .marginFunds {
    margin-left: 10px;
  }
</style>
