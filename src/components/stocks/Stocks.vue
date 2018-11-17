<template>
    <div>
         <div class="card-group">
            <app-stock v-for="stock in stocks" :key="stock.name" :stock="stock"> </app-stock> 
         </div> 
    </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
    name: 'stocks',
    components: {
        'app-stock': Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>
