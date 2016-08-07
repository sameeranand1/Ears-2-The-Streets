<template>

    <header class="Site_Header">

        <div class="Container">

            <div class="Logo">
                <a v-link="'/'"><img src="../../assets/images/logo.svg" alt="Ears 2 The Streets"</a>
            </div>

            <div class="Navigation--left">

                <nav>
                    <li><a v-link="'music-videos'">Music Videos</a></li>
                    <li><a v-link="'mixtapes'">Mixtapes</a></li>
                    <li><a v-link="'artists'">Artists</a></li>
                    <li><a v-link="'events'">Events</a></li>
                </nav>

            </div>

            <div class="Navigation--right">

                <nav>
                    <li><a class="--brand-yellow" href="#">Promote</a></li>
                    <li><a href="#">Upload</a></li>
                    <li><a href="#">Login</a></li>
                </nav>

            </div>

        </div>

    </header>

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
        border-bottom 1px solid #0C0D16
        height 84px
        position relative
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

    .Site_Header .Navigation--left,
    .Site_Header .Navigation--right
        align-items center
        display inline-flex
        height 100%
        justify-content center
        width auto

    .Site_Header .Navigation--left
        margin-left 32px

    .Site_Header .Navigation--right
        float right

    .Site_Header .Navigation--left nav,
    .Site_Header .Navigation--right nav
        align-items center
        display inline-flex
        height 100%
        justify-content center

    .Site_Header .Navigation--left nav li,
    .Site_Header .Navigation--right nav li
        align-items center
        display inline-flex
        height 100%
        justify-content center
        list-style-type none

    .Site_Header .Navigation--left nav li a,
    .Site_Header .Navigation--right nav li a
        font-family inherit
        font-size 13px
        font-weight bold
        text-decoration none
        text-transform uppercase

    .Site_Header .Navigation--left nav li
        margin-right 33px

    .Site_Header .Navigation--left nav li:last-child
        margin-right 0px

    .Site_Header .Navigation--left nav li a,
    .Site_Header .Navigation--right nav li a
        align-items center
        border-bottom 2px solid transparent
        box-sizing border-box
        display inline-flex
        justify-content center
        height 100%

    .Site_Header .Navigation--left nav li a
        color #999CA3

    .Site_Header .Navigation--right nav li a
        color $WHITE

    .Site_Header .Navigation--left nav li a:hover,
    .Site_Header .Navigation--right nav li a:hover
        border-bottom-color $BRAND_YELLOW
        color $WHITE

    .Site_Header .Navigation--right nav li + li:before
        color #303138
        content: " | "
        padding 0 16px

</style>