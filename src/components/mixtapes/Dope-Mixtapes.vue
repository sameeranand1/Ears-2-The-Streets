<template>
    
    <div class="Dope_Mixtapes">

        <header class="Header">

            <title-bar top="Dope" bottom="Mixtapes">

                <title-bar-nav :links="title_bar_links"></title-bar-nav>

                <small>more <span class="icon-arrow-right2"></span></small>

            </title-bar>

        </header>

        <div class="Subtitle">
            <p>Watch all the latest hip hop music videos, interviews and event footage. New videos are going up every day!</p>
        </div>
        
        <mixtapes :mixtapes="mixtapes"></mixtapes>

        <div class="More_Mixtapes">
            <button class="Button">More Mixtapes</button>
        </div

    </div>

</template>

<script>

    import Mixtapes     from '../mixtapes/Mixtapes-Module.vue'
    import TitleBar     from '../misc/Title-Bar.vue'
    import TitleBarNav  from '../misc/Title-Bar-Nav.vue'

    export default 
    {
        components:
        {
            'mixtapes':         Mixtapes,
            'title-bar':        TitleBar,
            'title-bar-nav':    TitleBarNav
        },

        data()
        {
            return {

                mixtapes:
                [
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-1.png',      title: 'Puke Blue Devil',               user: '@Bezells' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-2.png',      title: 'Slow Motion 2',                 user: '@Jarren Benton' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-3.png',      title: 'E.A.R.T.H',                     user: '@B.O.B' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-4.png',      title: 'Left Of A Dreamer',             user: '@Sean Brown' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-5.png',      title: 'Puke Blue Devil',               user: '@Bezells' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-6.png',      title: 'Slow Motion 2',                 user: '@Jarren Benton' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-7.png',      title: 'E.A.R.T.H',                     user: '@B.O.B' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-8.png',      title: 'Left Of A Dreamer',             user: '@Sean Brown' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-9.png',      title: 'Puke Blue Devil',               user: '@Bezells' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-10.png',     title: 'Slow Motion 2',                 user: '@Jarren Benton' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-11.png',     title: 'E.A.R.T.H',                     user: '@B.O.B' },
                    { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-12.png',     title: 'Left Of A Dreamer',             user: '@Sean Brown' }
                ],

                title_bar_links:
                [
                    { title: 'Latest',      href: '#' },
                    { title: 'Popular',     href: '#' },
                    { title: 'Top 100',     href: '#' }
                ]

            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Dope_Mixtapes
        background-color $WHITE
        border-radius 6px
        padding 20px

    .Dope_Mixtapes .Title_Bar small
        display none

    .Dope_Mixtapes .Subtitle p
        color #898C9A
        font-family inherit
        font-size 14px
        font-weight 300
        line-height 1.4
        text-align justify

    .Dope_Mixtapes .More_Mixtapes
        margin-top 15px

    .Dope_Mixtapes .More_Mixtapes button
        width 100%

    @media (min-width 544px)

        .Dope_Mixtapes .Title_Bar small
            display block
        
        .Dope_Mixtapes .More_Mixtapes
            display none

</style>