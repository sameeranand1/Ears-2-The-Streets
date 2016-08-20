<template>

    <div class="Music_Videos">

        <div class="Music_Video" v-for="music_video in music_videos">

            <div class="Cover_Image">

                <div class="Logo">
                    <img src="../../assets/images/logo-brand.svg" alt="Logo">
                </div>

            </div>

            <div class="Info">

                <h4 class="Title">{{ music_video.title }}</h4>

                <h4 class="User">{{ music_video.user }}</h4>

                <h4 class="Views">{{ music_video.views | number }} Views</h4>

            </div>

        </div>

    </div>

</template>

<script>

    export default
    {
        filters:
        {

            number: function(number)
            {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

        },

        props: [ 'music_videos' ]
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

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
        margin-bottom 13px
        position relative

    .Music_Videos .Music_Video .Cover_Image .Logo
        bottom 12px
        height 41px
        left 12px
        opacity 0.5
        position absolute
        width 62px
        z-index 5

    .Music_Videos .Music_Video .Cover_Image .Logo img
        height 100%
        width 100%

    .Music_Videos .Music_Video .Info
        margin-bottom 15px

    .Music_Videos .Music_Video .Info .Title,
    .Music_Videos .Music_Video .Info .User,
    .Music_Videos .Music_Video .Info .Views
        font-family inherit
    
    .Music_Videos .Music_Video .Info .Title
        color $BRAND_LIGHT_BLUE
        font-size 15px
        font-weight bold
        margin-bottom 5px

    .Music_Videos .Music_Video .Info .User
        color #898C9A
        display inline-block
        font-size 14px
        font-weight 500

    .Music_Videos .Music_Video .Info .User::after
        content: '\25CF'
        color $BRAND_YELLOW !important
        font-size 14px
        margin-left 7px
        margin-right 5px
        position relative

    .Music_Videos .Music_Video .Info .Views
        color #898C9A
        display inline-block
        font-size 14px
        font-weight normal

    @media (min-width 992px)

        .Music_Videos .Music_Video
            lost-waffle 1/3 3 15px
            margin-bottom 15px

        .Music_Videos .Music_Video .Cover_Image
            background-color #222329
            height 125px

    @media (min-width 1200px)

        .Music_Videos .Music_Video
            lost-waffle 1/3 3 15px !important

        .Music_Videos .Music_Video .Cover_Image
            background-color #222329
            height 175px

</style>