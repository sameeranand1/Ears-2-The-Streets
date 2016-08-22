<template>
    
    <div class="Upcoming_Events">

        <header class="Header">

            <title-bar top="Upcoming" bottom="Events">
                <small>more <span class="icon-arrow-right2"></span></small>
            </title-bar>

        </header>

        <div class="Events">

            <div class="Event" v-for="event in events">

                <div class="Cover_Image" :style="{ 'background-image': 'url(' + event.src + ')' }">

                    <div class="Placeholder" v-if="!event.src.length">

                        <img src="../../assets/images/logo-mascot.svg" alt="Logo" class="Logo">

                    </div>

                </div>

                <div class="Info">

                    <h4 class="Title">{{ event.title }}</h4>

                    <p class="Description">{{ event.description }}</p>

                </div>

            </div>

        </div>

        <div class="More_Events">
            <button class="Button">More Events</button>
        </div

    </div>

</template>

<script>

    import TitleBar from '../misc/Title-Bar.vue'

    export default 
    {
        components:
        {
            'title-bar': TitleBar
        },

        data()
        {
            return {
                events:
                [
                    { 
                        src:            'https://s3.amazonaws.com/ears2thestreets/event-1.png',      
                        title:          'E2TS is hosting a live rap battle, winner takes home $1000 CASH!',               
                        description:    'Ears 2 The Streets is putting on a LIVE rap battle that will be LIVE streamed directly ...' 
                    },
                    { 
                        src:            'https://s3.amazonaws.com/ears2thestreets/event-2.png',      
                        title:          'E2TS is giving away a free iPhone 6',                 
                        description:    'Ears 2 The Streets is putting on a LIVE rap battle that will be LIVE streamed directly ...' 
                    },
                    { 
                        src:            '',      
                        title:          'E2TS offering a FREE featured spot',                     
                        description:    'Ears 2 The Streets is putting on a LIVE rap battle that will be LIVE streamed directly ...' 
                    }
                ]
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Upcoming_Events
        background-color $WHITE
        border-radius 6px
        padding 20px

    .Upcoming_Events .Title_Bar small
        display none

    .Upcoming_Events .Events
        lost-utility clearfix

    .Upcoming_Events .Events .Event
        lost-waffle 1 1 25px

    .Upcoming_Events .Events .Event .Cover_Image
        align-items center
        background-color #222329
        background-position top center
        background-repeat no-repeat
        background-size cover
        display flex
        height 220px
        justify-content center
        margin-bottom 18px
        position relative

    .Upcoming_Events .Events .Event .Cover_Image .Placeholder
        align-items center
        background-color #3A3A41
        border 2px dashed #5B5B62
        box-sizing border-box
        display flex
        justify-content center
        padding 30px 10px
        position relative
        text-align center
        width 220px

    .Upcoming_Events .Events .Event .Cover_Image .Placeholder .Logo
        width 85px

    .Upcoming_Events .Events .Event .Info .Title
        color #1C2020
        font-family inherit
        font-size 15px
        font-weight bold
        line-height 1.2
        margin-bottom 14px

    .Upcoming_Events .Events .Event .Info .Description
        color #6C6D76
        font-family inherit
        font-size 13px
        font-weight normal
        line-height 1.5
        text-align justify

    .Upcoming_Events .More_Events
        margin-top 25px

    .Upcoming_Events .More_Events button
        width 100%

    @media (min-width 544px)

        .Upcoming_Events .Title_Bar small
            display block

        .Upcoming_Events .More_Events
            display none

    @media (min-width 992px)

        .Upcoming_Events .Events .Event
            lost-waffle 1/3 3 25px

        .Upcoming_Events .Events .Event .Cover_Image
            height 175px

    @media (min-width 1200px)

        .Upcoming_Events .Events .Event .Cover_Image
            height 220px

</style>