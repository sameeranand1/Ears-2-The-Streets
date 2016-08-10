<template>
    
    <site-header></site-header>

    <search></search>

    <div class="Page">

        <router-view transition transition-mode="out-in"></router-view>

    </div>

    <newsletter></newsletter>

    <site-footer></site-footer>

</template>

<script>
    import Footer       from './common/Footer.vue'
    import Header       from './common/Header.vue'
    import Newsletter   from './common/Newsletter.vue'
    import Search       from './common/Search.vue'

    export default 
    {
        components:
        {
            'newsletter':   Newsletter,
            'search':       Search,
            'site-footer':  Footer,
            'site-header':  Header
        }
    }
</script>

<style lang="stylus" scoped>
    
    .Page
        padding 25px 0

</style>