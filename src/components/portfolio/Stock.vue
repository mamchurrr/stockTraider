<template>    
    <div class="col-sm-4 wrapper">
        <div class="card">
            <div class="card-header bg-transparent border-info text-info">
                    {{ stock.name }}
                    <small>(price: {{stock.price}} | quantity: {{stock.quantity}})</small>
            </div>
            <div class="card-body">
                <div class="float-left">
                    <input 
                    type="number"
                    placeholder="Quantity"
                    class="form-control"
                    v-model="quantity">
                </div>
                <div class="float-right">
                    <button 
                        class="btn btn-primary"
                        @click="sellStocks"
                        :disabled="quantity <= 0 || !Number.isInteger(Number(quantity))">
                        Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0,
        }
    },
    methods: {
        ...mapActions({
            placeSellStocks: 'sellStocks'
        }),

        sellStocks() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            this.placeSellStocks(order);
            this.quantity = 0;
        }
    }
}
</script>


<style lang="scss" scoped>
    .wrapper {
        margin-top: 15px;
    }
</style>
