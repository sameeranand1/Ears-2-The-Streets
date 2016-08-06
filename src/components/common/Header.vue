<template>

    <div class="Site_Header">

        <div class="Container">

            <div class="Logo">
                <img src="../../assets/images/logo.svg" alt="Ears 2 The Streets">
            </div>

            <div class="Navigation--left">

            </div>

            <div class="Navigation--right">

            </div>

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

    .Site_Header .Logo
        display inline-block
        float left
        height 100%

    .Site_Header .Logo img
        height 102px
        margin-top 4px
        width 300px

    .Site_Header .Navigation--left
        display inline-block
        height 100%
        margin-left 32px
        width auto

    .Site_Header .Navigation--right
        display inline-block
        float right
        height 100%
        width auto

</style>