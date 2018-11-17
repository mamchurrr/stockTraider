<template>
    <div class="container">
        <app-header></app-header>
        <div class="row wrapper">
            <div class="col-12">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        components: {
            'app-header': Header,
        },
        created() {
            console.log (this.$store.dispatch('initStocks'))
        }
    };


</script>

<style lang="scss" >
    body {
        padding: 30px;
    }

    .wrapper {
        margin-top: 15px;
    }

        
</style>

