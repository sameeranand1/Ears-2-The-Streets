<template>
    
    <site-header></site-header>

    <search></search>

    <router-view transition transition-mode="out-in"></router-view>

    <newsletter></newsletter>

    <site-footer></site-footer>

</template>

<script>
    import Footer       from './layout/Footer.vue'
    import Header       from './layout/Header.vue'
    import Newsletter   from './misc/Newsletter.vue'
    import Search       from './misc/Search.vue'

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