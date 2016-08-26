<template>

    <div class="Music_Videos Page">

        <div class="Container">

            <div class="Column--left">

                <div class="Module"><exclusive-music-videos></exclusive-music-videos></div>

            </div>

            <div class="Column--right">

                <button type="button" class="Button">Promote Your Music Video</button>
                
                <div class="Module">

                    <h6 class="Featured_Event_Heading">Special E2TS Events / Promotion</h6>

                    <featured-event></featured-event>

                </div>

            </div>

        </div>

        <div class="Container">

        </div>

    </div>

</template>

<script>

    import ExclusiveMusicVideos     from '../music/Exclusive-Music-Videos.vue'
    import FeaturedEvent            from '../events/Featured-Event.vue'

    export default
    {
        components:
        {
            'exclusive-music-videos': ExclusiveMusicVideos,
            'featured-event': FeaturedEvent
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    /*.Page
        padding-top 0*/

    .Music_Videos.Page .Container:first-child
        lost-flex-container row
        lost-utility clearfix
        padding-top 20px

    .Music_Videos.Page .Container:first-child .Column--left,
    .Music_Videos.Page .Container:first-child .Column--right
        height 100%
        lost-utility clearfix

    .Music_Videos.Page .Container:first-child .Column--left
        lost-column var(--width) 0 20px flex
        margin-bottom 20px
        --width: 1

    .Music_Videos.Page .Container:first-child .Column--right
        lost-column var(--width) 0 20px flex
        --width: 1

    .Music_Videos.Page .Container:first-child .Column--right button
        margin-bottom 20px
        width 100%

    .Music_Videos.Page .Container:first-child .Column--right .Featured_Event_Heading
        color #898C9A
        font-family inherit
        font-size 13px
        font-weight normal
        margin-bottom 15px

    .Music_Videos.Page .Container:first-child .Module
        lost-waffle 1 1 20px flex
        position relative

    @media (min-width 768px)

        .Music_Videos.Page .Container:first-child .Column--left
            margin-bottom 0
            --width: calc(1 - (300 / ( 768 - 30 )))

        .Music_Videos.Page .Container:first-child .Column--right
            --width: calc(300 / ( 768 - 30 ))
    
    @media (min-width 992px)

        .Music_Videos.Page .Container:first-child .Column--left
            --width: calc(1 - (300 / ( 992 - 30 )))

        .Music_Videos.Page .Container:first-child .Column--right
            --width: calc(300 / ( 992 - 30 ))
    
    @media (min-width 1200px)

        .Music_Videos.Page .Container:first-child .Column--left
            --width: calc(1 - (300 / ( 1200 - 30 )))

        .Music_Videos.Page .Container:first-child .Column--right
            --width: calc(300 / ( 1200 - 30 ))

</style>