<template>
    
    <div class="Dope_Mixtapes">

        <header class="Header">

            <title-bar top="Dope" bottom="Mixtapes">

                <div class="Title_Bar_Tabs">

                    <li :class="{ active: tabs.latest }" @click="latest()">Latest</li>
                    <li :class="{ active: tabs.popular }" @click="popular()">Popular</li>
                    <li :class="{ active: tabs.top100 }" @click="top100()">Top 100</li>

                </div>

                <small>more <span class="icon-arrow-right2"></span></small>

            </title-bar>

        </header>

        <div class="Subtitle">
            <p>Watch all the latest hip hop music videos, interviews and event footage. New videos are going up every day!</p>
        </div>

        <div v-if="tabs.latest"><mixtapes :mixtapes="mixtapes.latest"></mixtapes></div>
        <div v-if="tabs.popular"><mixtapes :mixtapes="mixtapes.popular"></mixtapes></div>
        <div v-if="tabs.top100"><mixtapes :mixtapes="mixtapes.top100"></mixtapes></div>

        <div class="More_Mixtapes">
            <button class="Button">More Mixtapes</button>
        </div

    </div>

</template>

<script>

    import Mixtapes     from '../mixtapes/Mixtapes-Module.vue'
    import TitleBar     from '../misc/Title-Bar.vue'

    export default 
    {
        components:
        {
            'mixtapes':         Mixtapes,
            'title-bar':        TitleBar
        },

        data()
        {
            return {

                mixtapes:
                {
                    latest:
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

                    popular:
                    [
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-12.png',     title: 'Puke Blue Devil',               user: '@Bezells' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-11.png',     title: 'Slow Motion 2',                 user: '@Jarren Benton' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-10.png',     title: 'E.A.R.T.H',                     user: '@B.O.B' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-9.png',      title: 'Left Of A Dreamer',             user: '@Sean Brown' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-8.png',      title: 'Puke Blue Devil',               user: '@Bezells' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-7.png',      title: 'Slow Motion 2',                 user: '@Jarren Benton' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-6.png',      title: 'E.A.R.T.H',                     user: '@B.O.B' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-5.png',      title: 'Left Of A Dreamer',             user: '@Sean Brown' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-4.png',      title: 'Puke Blue Devil',               user: '@Bezells' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-3.png',      title: 'Slow Motion 2',                 user: '@Jarren Benton' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-2.png',      title: 'E.A.R.T.H',                     user: '@B.O.B' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-1.png',      title: 'Left Of A Dreamer',             user: '@Sean Brown' }
                    ],

                    top100:
                    [
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-5.png',      title: 'Puke Blue Devil',               user: '@Bezells' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-4.png',      title: 'Slow Motion 2',                 user: '@Jarren Benton' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-3.png',      title: 'E.A.R.T.H',                     user: '@B.O.B' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-2.png',      title: 'Left Of A Dreamer',             user: '@Sean Brown' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-1.png',      title: 'Puke Blue Devil',               user: '@Bezells' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-6.png',      title: 'Slow Motion 2',                 user: '@Jarren Benton' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-7.png',      title: 'E.A.R.T.H',                     user: '@B.O.B' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-8.png',      title: 'Left Of A Dreamer',             user: '@Sean Brown' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-9.png',      title: 'Puke Blue Devil',               user: '@Bezells' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-10.png',     title: 'Slow Motion 2',                 user: '@Jarren Benton' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-11.png',     title: 'E.A.R.T.H',                     user: '@B.O.B' },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-12.png',     title: 'Left Of A Dreamer',             user: '@Sean Brown' }
                    ]
                },

                tabs:
                {
                    latest: true,
                    popular: false,
                    top100: false
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
                this.tabs.top100 = false;
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
                this.tabs.top100 = false;
                return;
            },

            /**
             * Event fires when the "Top 100" tab is clicked.
             * 
             * @return void
             */
            top100()
            {
                this.tabs.latest = false;
                this.tabs.popular = false;
                this.tabs.top100 = true;
                return;
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
        text-align center

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