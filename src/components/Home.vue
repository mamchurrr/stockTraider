<template>
    <div class="container">
        <h1>Welcome to The Stock Trader</h1>
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
