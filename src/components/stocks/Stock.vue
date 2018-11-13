<template>
    
    <div class="col-sm-4 wrapper">
        <div class="card">
            <div class="card-header bg-transparent border-success text-success">
                    NAME
                    <small>(price: PRICE)</small>
            </div>
            <div class="card-body">
                <div class="float-right">
                    <input 
                    type="number"
                    placeholder="Quantity"
                    class="form-control">
                </div>
                <div class="float-left">
                    <button class="btn btn-success">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
    .wrapper {
        margin-top: 15px;
    }
</style>
