<template>
    <div class="container">
        <h1>Welcome to The Stock Trader</h1>
        <h6>You can buy and sell stocks</h6>
        <h6>You can click to "End day" for selling stocks next day with another price</h6>
        <hr>
        <h6>Your funds: {{ funds }} </h6>
    </div>
  
</template>

<script>
export default {
    name: 'home',
    computed: {
        funds(){
            return this.$store.getters.fund
        }
    }
}
</script>
