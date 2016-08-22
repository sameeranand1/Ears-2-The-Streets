<template>
    
    <div class="Featured_Mixtapes">

        <header class="Header">

            <title-bar top="Featured" bottom="Mixtapes">
                <small>How to become featured?</small>
            </title-bar>

        </header>

        <div class="Mixtapes">

            <div class="Mixtape" v-for="mixtape in mixtapes">

                <div class="Cover_Image" :style="{ 'background-image': 'url(' + mixtape.src + ')' }"></div>

                <div class="Info">

                    <h4 class="Title">{{ mixtape.title }}</h4>

                    <h4 class="User">{{ mixtape.user }}</h4>

                </div>

                <div class="Actions">

                    <ul>
                        <li><a href="#"><span class="icon-headphones"></span> Listen</a></li>
                        <li><a href="#"><span class="icon-download"></span> Download</a></li>
                        <li><a href="#"><span class="icon-share2"></span> Share</a></li>
                    </ul>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

    import TitleBar from '../../misc/Title-Bar.vue'

    export default 
    {
        components:
        {
            'title-bar': TitleBar
        },

        data()
        {
            return {
                mixtapes:
                [
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-1.png',      title: 'Puke Blue Devil',               user: '@Bezells' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-2.png',      title: 'Slow Motion 2',                 user: '@Jarren Benton' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-3.png',      title: 'E.A.R.T.H',                     user: '@B.O.B' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-4.png',      title: 'Left Of A Dreamer',             user: '@Sean Brown' }
                ]
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../../stylus/common/colors'

    .Featured_Mixtapes
        background-color $WHITE
        border-radius 6px
        lost-utility clearfix
        padding 20px

    .Featured_Mixtapes .Title_Bar small
        display none

    .Featured_Mixtapes .Mixtapes .Mixtape
        lost-waffle 1 1 20px
        margin-bottom 20px

    .Featured_Mixtapes .Mixtapes .Mixtape .Cover_Image
        background-color #222329
        background-position top center
        background-repeat no-repeat
        background-size cover
        height 195px
        margin-bottom 13px
        position relative

    .Featured_Mixtapes .Mixtapes .Mixtape .Info
        margin-bottom 20px

    .Featured_Mixtapes .Mixtapes .Mixtape .Info .Title,
    .Featured_Mixtapes .Mixtapes .Mixtape .Info .User
        font-family inherit
    
    .Featured_Mixtapes .Mixtapes .Mixtape .Info .Title
        color $BRAND_LIGHT_BLUE
        font-size 15px
        font-weight bold
        margin-bottom 5px

    .Featured_Mixtapes .Mixtapes .Mixtape .Info .User
        color #898C9A
        display inline-block
        font-size 14px
        font-weight 500

    .Featured_Mixtapes .Mixtapes .Mixtape .Actions
        margin-bottom 20px

    .Featured_Mixtapes .Mixtapes .Mixtape .Actions ul
        margin 0
        padding 0

    .Featured_Mixtapes .Mixtapes .Mixtape .Actions li
        border-top 1px solid #EBEBEB
        list-style-type none
        margin 0
        padding 12px 0

    .Featured_Mixtapes .Mixtapes .Mixtape .Actions li:last-child
        border-bottom 1px solid #EBEBEB

    .Featured_Mixtapes .Mixtapes .Mixtape .Actions li span
        color $BRAND_LIGHT_BLUE
        margin-right 10px

    .Featured_Mixtapes .Mixtapes .Mixtape .Actions li a
        color #898C9A
        font-family inherit
        font-size 14px
        font-weight normal
        text-decoration none

    .Featured_Mixtapes .Mixtapes .Mixtape .Actions li a:hover
        color $BRAND_LIGHT_BLUE

    @media (min-width 544px)

        .Featured_Mixtapes .Title_Bar small
            display block

        .Featured_Mixtapes .Mixtapes .Mixtape
            lost-waffle 1/2 2 20px

    @media (min-width 768px)

        .Featured_Mixtapes .Title_Bar small
            display none

    @media (min-width 992px)

        .Featured_Mixtapes .Title_Bar small
            display block

        .Featured_Mixtapes .Mixtapes .Mixtape
            lost-waffle 1/4 4 20px

</style>