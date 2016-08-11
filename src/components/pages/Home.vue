<template>

    <div class="Home Page">

        <featured-music-videos></featured-music-videos>

        <div class="Container">

            <div class="Column--left">

                <div class="Module"></div>
                <div class="Module"></div>
                <div class="Module"></div>
                <div class="Module"></div>
                <div class="Module"></div>

            </div>

            <div class="Column--right">

                <div class="Module"></div>
                <div class="Module"></div>
                <div class="Module"></div>
                <div class="Module"></div>
                <div class="Module"></div>

            </div>

        </div>

    </div>

</template>

<script>

    import FeaturedMusicVideos       from '../music/Featured-Music-Videos.vue'

    export default 
    {
        components:
        {
            'featured-music-videos':    FeaturedMusicVideos
        }
    }
</script>

<style lang="stylus" scoped>

    .Page
        padding-top 0

    .Home .Container
        lost-utility clearfix
        lost-utility edit
        padding-top 20px

    .Home .Column--left,
    .Home .Column--right
        height 100%

    .Home .Column--left
        margin-bottom 20px

    .Home .Module
        min-height 300px
        lost-row 1 20px

    @media (min-width 992px)

        .Home .Column--left
            --width: calc(1 - (300 / ( 992 - 30 )))
            lost-column var(--width) 0 20px
            margin-bottom 0

        .Home .Column--right
            --width: calc( 300 / ( 992 - 30 ))
            lost-column var(--width) 0 20px

    @media (min-width 1200px)

        .Home .Column--left
            --width: calc(1 - (300 / ( 1200 - 30 )))
            lost-column var(--width) 0 20px

        .Home .Column--right
            --width: calc( 300 / ( 1200 - 30 ))
            lost-column var(--width) 0 20px


</style>