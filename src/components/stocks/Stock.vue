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
                    v-model="quantity">
                </div>
                <div class="float-right">
                    <button 
                        class="btn btn-success"
                        @click="stockBuy"
                        :disabled="quantity <= 0 || !Number.isInteger(Number(quantity))">
                        Buy
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
    methods: {
        stockBuy() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            console.log(order);
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
