<template>    
    <div class="col-sm-4 wrapper">
        <div class="card">
            <div class="card-header bg-transparent border-success text-success">
                    {{ stock.name }}
                    <small>(price: {{stock.price}})</small>
            </div>
            <div class="card-body">
                <div class="float-left">
                    <input 
                    type="number"
                    placeholder="Quantity"
                    class="form-control"
                    v-model="quantity"
                    :class="{danger: insufficientFunds}">
                </div>
                <div class="float-right">
                    <button 
                        class="btn btn-success"
                        @click="stockBuy"
                        :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(Number(quantity))">
                        {{ insufficientFunds ? 'Insufficient' : 'Buy' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0,
        }
    },
    computed: {
        funds() {
            return this.$store.getters.fund
        },
        insufficientFunds() {
            return this.stock.price * this.quantity > this.funds
        }
    },
    methods: {
        stockBuy() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            this.$store.dispatch('buyStocks', order);
            this.quantity = 0;
        }
    }
}
</script>


<style lang="scss" scoped>
    .danger {
        border: 2px solid red;
    }
</style>
