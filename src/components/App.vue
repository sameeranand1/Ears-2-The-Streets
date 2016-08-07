<template>
    
    <site-header></site-header>

    <router-view transition transition-mode="out-in"></router-view>

    <site-footer></site-footer>

</template>

<script>
    import Header from './common/Header.vue'
    import Footer from './common/Footer.vue'

    export default 
    {
        components:
        {
            'site-header': Header,
            'site-footer': Footer
        }
    }
</script>

<style>
</style>