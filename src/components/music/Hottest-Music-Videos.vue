<template>
    
    <div class="Hottest_Music_Videos">

        <header class="Header">

            <title-bar top="The Hottest" bottom="Music Videos">

                <div class="Title_Bar_Tabs">

                    <li :class="{ active: tabs.latest }" @click="latest()">Latest</li>
                    <li :class="{ active: tabs.popular }" @click="popular()">Popular</li>

                </div>

                <small>more <span class="icon-arrow-right2"></span></small>

            </title-bar>

        </header>

        <div class="Subtitle">
            <p>Watch all the latest hip hop music videos, interviews and event footage. New videos are going up every day!</p>
        </div>

        <div v-if="tabs.latest">
            <music-videos :music_videos="music_videos.latest"></music-videos>
        </div>

        <div v-if="tabs.popular">
            <music-videos :music_videos="music_videos.popular"></music-videos>
        </div>

        <div class="More_Music_Videos">
            <button class="Button">More Music Videos</button>
        </div

    </div>

</template>

<script>

    import MusicVideos  from './Music-Videos-Module.vue'
    import TitleBar     from '../misc/Title-Bar.vue'

    export default 
    {
        components:
        {
            'music-videos':     MusicVideos,
            'title-bar':        TitleBar
        },

        data()
        {
            return {

                music_videos:
                {
                    latest:
                    [
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-4.png',      title: 'Breath',                      user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-5.png',      title: 'Waist Down',                  user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-6.png',      title: 'Party On The East Coast',     user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-7.png',      title: 'Breath',                      user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-8.png',      title: 'Waist Down',                  user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-9.png',      title: 'Party On The East Coast',     user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-10.png',     title: 'Breath',                      user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-11.png',     title: 'Waist Down',                  user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-12.png',     title: 'Party On The East Coast',     user: '@Token',     views: 200000 }
                    ],

                    popular:
                    [
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-9.png',      title: 'Breath',                      user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-8.png',      title: 'Waist Down',                  user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-7.png',      title: 'Party On The East Coast',     user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-6.png',      title: 'Breath',                      user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-5.png',      title: 'Waist Down',                  user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-4.png',      title: 'Party On The East Coast',     user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-3.png',     title: 'Breath',                      user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-2.png',     title: 'Waist Down',                  user: '@Token',     views: 200000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/music-video-1.png',     title: 'Party On The East Coast',     user: '@Token',     views: 200000 }
                    ]
                },

                tabs:
                {
                    latest: true,
                    popular: false
                }
                
            }
        },

        methods:
        {
            /**
             * Event fires when the "Latest" tab is clicked.
             * 
             * @return void
             */
            latest()
            {
                this.tabs.latest = true;
                this.tabs.popular = false;
                return;
            },

            /**
             * Event fires when the "Popular" tab is clicked.
             * 
             * @return void
             */
            popular()
            {
                this.tabs.latest = false;
                this.tabs.popular = true;
                return;
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

    .Hottest_Music_Videos .Subtitle
        margin 20px 0 22px 0

    .Hottest_Music_Videos .Subtitle p
        color #898C9A
        font-family inherit
        font-size 14px
        font-weight 300
        line-height 1.4
        text-align center

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