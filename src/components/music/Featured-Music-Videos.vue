<template>

    <div class="Featured_Music_Videos">

        <div class="Music_Video" v-for="musicVideo in featuredMusicVideos">

            <div class="Wrapper">

                <div class="Player_Wrapper">

                    <music-video-player :video="musicVideo.video"></music-video-player>

                </div>

            </div>

            <div class="Data">

                <h4 class="Name">{{ musicVideo.name }}</h4>

                <h5 class="Authors">{{ musicVideo.authors }}</h5>

            </div>

        </div>

    </div>

</template>

<script>

    import MusicVideoPlayer from './Music-Video-Player.vue'

    export default 
    {
        components:
        {
            'music-video-player': MusicVideoPlayer
        },

        data()
        {
            return {
                featuredMusicVideos:
                [
                    { name: 'Crossroad',            authors: 'Nicki Minaj Feat. Young Jeezy and eminem',    video: '' },
                    { name: 'California Love',      authors: 'Tupac',                                       video: '' },
                    { name: 'No Shopping',          authors: 'Drake Featuring Blacks Gambino',              video: '' }
                ]
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Featured_Music_Videos
        background-color $BRAND_LIGHT_BLUE
        lost-flex-container row

    .Featured_Music_Videos .Music_Video
        align-items center
        background-color $BRAND_LIGHT_BLUE
        display flex
        height 275px
        justify-content center
        lost-column 1 1 0
        position relative

    .Featured_Music_Videos .Music_Video:nth-child(2)
        background-color darken($BRAND_LIGHTER_BLUE, 10%)

    .Featured_Music_Videos .Music_Video:nth-child(2),
    .Featured_Music_Videos .Music_Video:last-child
        display none

    .Featured_Music_Videos .Music_Video .Player_Wrapper
        align-items center
        display flex
        justify-content center

    .Featured_Music_Videos .Music_Video .Data
        bottom 22px
        color $WHITE
        left 0
        position absolute
        right 0
        text-align center

    .Featured_Music_Videos .Music_Video .Data .Name,
    .Featured_Music_Videos .Music_Video .Data .Authors
        font-family inherit

    .Featured_Music_Videos .Music_Video .Data .Name
        font-size 22px
        font-weight bold
        margin-bottom 4px

    .Featured_Music_Videos .Music_Video .Data .Authors
        font-size 14px
        font-weight 400

    @media (min-width 768px)

        .Featured_Music_Videos .Music_Video
            height 300px
            lost-column 1/2 2 0

        .Featured_Music_Videos .Music_Video:nth-child(2)
            display flex

        .Featured_Music_Videos .Music_Video .Data
            bottom 34px

        .Featured_Music_Videos .Music_Video .Data .Name
            font-size 22px
            margin-bottom 4px

        .Featured_Music_Videos .Music_Video .Data .Authors
            font-size 15px

    @media (min-width 992px)

        .Featured_Music_Videos .Music_Video
            height 440px
            lost-column 1/3 3 0

        .Featured_Music_Videos .Music_Video:last-child
            display flex

        .Featured_Music_Videos .Music_Video .Data
            bottom 50px

        .Featured_Music_Videos .Music_Video .Data .Name
            font-size 25px
            margin-bottom 8px

        .Featured_Music_Videos .Music_Video .Data .Authors
            font-size 15px


</style>