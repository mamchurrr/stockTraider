<template>
    <div>
         <div class="card-group">
            <app-stock v-for="stock in stocks" :key="stock.name" :stock="stock"> </app-stock> 
         </div> 
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from './Stock.vue'

export default {
    name: 'portfolio',
    components: {
        'app-stock': Stock
    },
    computed: {
        ...mapGetters({
        stocks: 'stockPortfolio'
    }),
    }
}
</script>

