<template>
    
    <div class="Exclusive_Music_Videos">

        <header class="Header">

            <title-bar top="Exclusive" bottom="Music Videos">
                <span class="icon-help"></span>
                <small>How to become exclusive?</small>
            </title-bar>

        </header>

        <music-videos :music_videos="music_videos"></music-videos>

    </div>

</template>

<script>

    import MusicVideos  from './Music-Videos-Module.vue'
    import TitleBar     from '../misc/Title-Bar.vue'

    export default 
    {
        components:
        {
            'music-videos': MusicVideos,
            'title-bar': TitleBar
        },

        data()
        {
            return {

                music_videos:
                [
                    { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-1.png',      title: 'Breath',                      user: '@Token',     views: 200000 },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-2.png',      title: 'Waist Down',                  user: '@Token',     views: 200000 },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-3.png',      title: 'Party On The East Coast',     user: '@Token',     views: 200000 }
                ]

            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Exclusive_Music_Videos
        background-color $WHITE
        border-radius 6px
        padding 20px

    .Exclusive_Music_Videos .Title_Bar .icon-help
        display block

    .Exclusive_Music_Videos .Title_Bar small
        display none

    @media (min-width 544px)

        .Exclusive_Music_Videos .Title_Bar .icon-help
            display none

        .Exclusive_Music_Videos .Title_Bar small
            display block

    @media (min-width 768px)

        .Exclusive_Music_Videos .Title_Bar .icon-help
            display block

        .Exclusive_Music_Videos .Title_Bar small
            display none

    @media (min-width 992px)

        .Exclusive_Music_Videos .Title_Bar .icon-help
            display none

        .Exclusive_Music_Videos .Title_Bar small
            display block

</style>