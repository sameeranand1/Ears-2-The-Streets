<template>
    
    <div class="Trending_Mixtapes">

        <header class="Header">

            <title-bar top="Trending" bottom="Mixtapes"></title-bar>

            <div class="Header_Tabs">

                <li :class="{ active: tabs.today }" @click="today()">Today</li>
                <li :class="{ active: tabs.week }" @click="week()">This Week</li>
                <li :class="{ active: tabs.month }" @click="month()">This Month</li>

            </div>

        </header>

        <div v-if="tabs.month"><mixtapes :mixtapes="mixtapes.month"></mixtapes></div>
        <div v-if="tabs.today"><mixtapes :mixtapes="mixtapes.today"></mixtapes></div>
        <div v-if="tabs.week"><mixtapes :mixtapes="mixtapes.week"></mixtapes></div>

    </div>

</template>

<script>

    import Mixtapes from './Mixtapes.vue'
    import TitleBar from '../../misc/Title-Bar.vue'

    export default 
    {
        components:
        {
            'mixtapes': Mixtapes,
            'title-bar': TitleBar
        },

        data()
        {
            return {

                mixtapes:
                {
                    month:
                    [
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-1.png',      title: 'Something 4 The Cookout',       user: '@DJ Ty Boogie',      listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-2.png',      title: 'Dream Chasers, Part 2',         user: '@Meek Mill',         listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-3.png',      title: 'Progression 2 A Young...',      user: '@Kirko Bangz',       listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-4.png',      title: 'By Any Means',                  user: '@Kevin Gates',       listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-5.png',      title: 'Street Lottery',                user: '@Young Scooter',     listens: 1000000 }
                    ],

                    today:
                    [
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-5.png',      title: 'Something 4 The Cookout',       user: '@DJ Ty Boogie',      listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-4.png',      title: 'Dream Chasers, Part 2',         user: '@Meek Mill',         listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-3.png',      title: 'Progression 2 A Young...',      user: '@Kirko Bangz',       listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-2.png',      title: 'By Any Means',                  user: '@Kevin Gates',       listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-1.png',      title: 'Street Lottery',                user: '@Young Scooter',     listens: 1000000 }
                    ],

                    week:
                    [
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-6.png',      title: 'Something 4 The Cookout',       user: '@DJ Ty Boogie',      listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-7.png',      title: 'Dream Chasers, Part 2',         user: '@Meek Mill',         listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-8.png',      title: 'Progression 2 A Young...',      user: '@Kirko Bangz',       listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-9.png',      title: 'By Any Means',                  user: '@Kevin Gates',       listens: 1000000 },
                        { src: 'https://s3.amazonaws.com/ears2thestreets/mixtape-10.png',     title: 'Street Lottery',                user: '@Young Scooter',     listens: 1000000 }
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

    .Trending_Mixtapes
        background-color $WHITE
        border-radius 6px

    .Trending_Mixtapes .Header
        padding 20px

    .Trending_Mixtapes .Header .Header_Tabs
        align-items center
        display flex
        justify-content center

    .Trending_Mixtapes .Header .Header_Tabs li
        color #A3A5B0
        cursor pointer
        display inline-block
        font-family inherit
        font-size 13px
        font-weight bold
        list-style-type none
        text-transform uppercase

    .Trending_Mixtapes .Header .Header_Tabs li + li::before
        color #A3A5B0
        content ' | '
        padding 0 10px

    .Trending_Mixtapes .Header .Header_Tabs li.active
        color $BRAND_LIGHT_BLUE

</style>