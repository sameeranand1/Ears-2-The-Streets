<template>
    
    <div class="Hottest_Music_Videos">

        <header class="Header">

            <title-bar top="The Hottest" bottom="Music Videos">
                <small>more <span class="icon-arrow-right2"></span></small>
            </title-bar>

        </header>

        <music-videos :music_videos="music_videos"></music-videos>

        <div class="More_Music_Videos">
            <button class="Button">More Music Videos</button>
        </div

    </div>

</template>

<script>

    import MusicVideos  from './Music-Videos-Module.vue'
    import TitleBar from '../misc/Title-Bar.vue'

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
                    { src: '',      title: 'Party On The East Coast',     user: '@Token',     views: 200000 },
                    { src: '',      title: 'Breath',                      user: '@Token',     views: 200000 },
                    { src: '',      title: 'Waist Down',                  user: '@Token',     views: 200000 },
                    { src: '',      title: 'Party On The East Coast',     user: '@Token',     views: 200000 },
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

    .Hottest_Music_Videos
        background-color $WHITE
        border-radius 6px
        padding 20px

    .Hottest_Music_Videos .Title_Bar small
        display none

    .Hottest_Music_Videos .More_Music_Videos
        margin-top 15px

    .Hottest_Music_Videos .More_Music_Videos button
        width 100%

    @media (min-width 544px)

        .Hottest_Music_Videos .Title_Bar small
            display block
        
        .Hottest_Music_Videos .More_Music_Videos
            display none

</style>