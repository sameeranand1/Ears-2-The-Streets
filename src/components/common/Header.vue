<template>

    <div class="Site_Header">

        <div class="Container">

        </div>

    </div>

    <search-bar></search-bar>

</template>

<script>
    import SearchBar from './Search.vue'

    export default 
    {
        components:
        {
            'search-bar': SearchBar
        }
    }
</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'
    @require '../../stylus/common/tweaks'

    .Site_Header
        background-color $BRAND_LIGHT_BLUE
        border-bottom 1px solid $BRAND_BLUE
        height 84px
        width 100%

    .Site_Header .Container
        height 100%

</style>