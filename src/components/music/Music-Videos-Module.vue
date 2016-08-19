<template>

    <div class="Music_Videos">

        <div class="Music_Video" v-for="music_video in music_videos">

            <div class="Cover_Image">

            </div>

        </div>

    </div>

</template>

<script>

    export default
    {
        props: [ 'music_videos' ]
    }

</script>

<style lang="stylus" scoped>

    .Music_Videos
        lost-utility clearfix

    .Music_Videos .Music_Video
        lost-waffle 1 1 15px
        margin-bottom 15px

    .Music_Videos .Music_Video .Cover_Image
            background-color #222329
            background-position center
            background-repeat no-repeat
            background-size cover
            height 175px

    @media (min-width 992px)

        .Music_Videos .Music_Video
            lost-waffle 1/3 3 15px
            margin-bottom 15px

        .Music_Videos .Music_Video .Cover_Image
            background-color #222329
            height 125px

    @media (min-width 1200px)

        .Music_Videos .Music_Video
            background-color #222329
            lost-waffle 1/3 3 15px !important

        .Music_Videos .Music_Video .Cover_Image
            background-color #222329
            height 175px

</style>