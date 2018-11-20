<template>
    <div class="container">
        <app-header></app-header>
        <div class="row wrapper">
             <div class="col-12">
                <transition name="slide" mode="out-in">
                    <router-view/>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from './components/Header.vue'

    export default {
        components: {
            'app-header': AppHeader,
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

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }
    
    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
        
</style>

