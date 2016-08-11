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
        lost-column 744/1000 0 20px

    .Home .Column--right
        lost-column 256/1000 0 20px

    .Home .Module
        min-height 300px
        lost-row 1 20px


</style>