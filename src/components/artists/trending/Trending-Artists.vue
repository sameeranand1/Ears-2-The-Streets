<template>
    
    <div class="Trending_Artists">

        <header class="Header">

            <title-bar top="Trending" bottom="Artists"></title-bar>

            <div class="Header_Tabs">

                <li :class="{ active: tabs.today }"><a @click="today()">Today</a></li>
                <li :class="{ active: tabs.week }"><a @click="week()">This Week</a></li>
                <li :class="{ active: tabs.month }"><a @click="month()">This Month</a></li>

            </div>

        </header>
        
        <div v-if="tabs.month"><artists :artists="artists.month"></artists></div>
        <div v-if="tabs.today"><artists :artists="artists.today"></artists></div>
        <div v-if="tabs.week"><artists :artists="artists.week"></artists></div>

    </div>

</template>

<script>

    import Artists from './Artists.vue'
    import TitleBar from '../../misc/Title-Bar.vue'

    export default 
    {
        components:
        {
            'artists': Artists,
            'title-bar': TitleBar
        },

        data()
        {
            return {

                artists:
                {

                    month:
                    [
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-1.png',      user: '@Bezells',           views: 200000,      likes: 1000,      dislikes: 100 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-2.png',      user: '@Gucci Mane',        views: 200000,      likes: 9000,      dislikes: 1000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-3.png',      user: '@Jeremih',           views: 200000,      likes: 8000,      dislikes: 1000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-4.png',      user: '@Boosie Badazz',     views: 200000,      likes: 7000,      dislikes: 1000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-5.png',      user: '@Chance',            views: 200000,      likes: 6000,      dislikes: 1000 }
                    ],

                    today:
                    [
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-5.png',      user: '@Bezells',           views: 200000,      likes: 566,       dislikes: 231 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-4.png',      user: '@Gucci Mane',        views: 200000,      likes: 703,       dislikes: 112 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-3.png',      user: '@Jeremih',           views: 200000,      likes: 2244,      dislikes: 1000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-2.png',      user: '@Boosie Badazz',     views: 200000,      likes: 5667,      dislikes: 1000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-1.png',      user: '@Chance',            views: 200000,      likes: 1000,      dislikes: 1000 }
                    ],

                    week:
                    [
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-2.png',      user: '@Bezells',           views: 200000,      likes: 4535,      dislikes: 455 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-4.png',      user: '@Gucci Mane',        views: 200000,      likes: 5654,      dislikes: 344 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-5.png',      user: '@Jeremih',           views: 200000,      likes: 9000,      dislikes: 2323 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-1.png',      user: '@Boosie Badazz',     views: 200000,      likes: 434,       dislikes: 343 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/artist-3.png',      user: '@Chance',            views: 200000,      likes: 800,       dislikes: 232 }
                    ]

                },

                tabs:
                {
                    today: true,
                    week: false,
                    month: false
                }

            }
        },

        methods:
        {
            /**
             * Event fires when the "This Month" tab is clicked.
             * 
             * @return void
             */
            month()
            {
                this.tabs.today = false;
                this.tabs.week = false;
                this.tabs.month = true;
                return;
            },

            /**
             * Event fires when the "Today" tab is clicked.
             * 
             * @return void
             */
            today()
            {
                this.tabs.today = true;
                this.tabs.week = false;
                this.tabs.month = false;
                return;
            },

            /**
             * Event fires when the "This Week" tab is clicked.
             * 
             * @return void
             */
            week()
            {
                this.tabs.today = false;
                this.tabs.week = true;
                this.tabs.month = false;
                return;
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../../stylus/common/colors'

    .Trending_Artists
        background-color $WHITE
        border-radius 6px

    .Trending_Artists .Header
        padding 20px

    .Trending_Artists .Header .Header_Tabs
        align-items center
        display flex
        justify-content center

    .Trending_Artists .Header .Header_Tabs li
        display inline-block
        list-style-type none

    .Trending_Artists .Header .Header_Tabs li a
        color #A3A5B0
        cursor pointer
        display inline-block
        font-family inherit
        font-size 13px
        font-weight bold
        text-decoration none
        text-transform uppercase

    .Trending_Artists .Header .Header_Tabs li + li::before
        color #A3A5B0
        content ' | '
        padding 0 10px

    .Trending_Artists .Header .Header_Tabs li.active a
        color $BRAND_LIGHT_BLUE

</style>