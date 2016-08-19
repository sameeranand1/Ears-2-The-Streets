<template>
    
    <div class="Exclusive_Music_Videos">

        <header class="Header">

            <title-bar top="Exclusive" bottom="Music Videos">
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
                    { src: '',      title: 'Breath',                      user: '@Token',     views: 200000 },
                    { src: '',      title: 'Waist Down',                  user: '@Token',     views: 200000 },
                    { src: '',      title: 'Party On The East Coast',     user: '@Token',     views: 200000 }
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

</style>