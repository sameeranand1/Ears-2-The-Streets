<template>

    <div class="Home Page">

        <featured-music-videos></featured-music-videos>

        <div class="Container">

            <div class="Column--left">

                <div class="Module"><exclusive-music-videos></exclusive-music-videos></div>
                <div class="Module"><featured-mixtapes></featured-mixtapes></div>
                <div class="Module"><hottest-music-videos></hottest-music-videos></div>
                <div class="Module"><dope-mixtapes></dope-mixtapes></div>
                <div class="Module"><upcoming-events></upcoming-events></div>

            </div>

            <div class="Column--right">

                <div class="Module"><exclusive-mixtape></exclusive-mixtape></div>
                <div class="Module"><featured-event></featured-event></div>
                <div class="Module"><trending-mixtapes></trending-mixtapes></div>
                <div class="Module"><community-poll></community-poll></div>
                <div class="Module"><trending-artists></trending-artists></div>

            </div>

        </div>

    </div>

</template>

<script>

    import CommunityPoll            from '../misc/Community-Poll.vue'
    import DopeMixtapes             from '../mixtapes/dope/Dope-Mixtapes.vue'
    import ExclusiveMixtape         from '../mixtapes/exclusive/Exclusive-Mixtape.vue'
    import ExclusiveMusicVideos     from '../music/Exclusive-Music-Videos.vue'
    import FeaturedEvent            from '../events/Featured-Event.vue'
    import FeaturedMixtapes         from '../mixtapes/featured/Featured-Mixtapes.vue'
    import FeaturedMusicVideos      from '../music/Featured-Music-Videos.vue'
    import HottestMusicVideos       from '../music/Hottest-Music-Videos.vue'
    import TrendingArtists          from '../artists/trending/Trending-Artists.vue'
    import TrendingMixtapes         from '../mixtapes/trending/Trending-Mixtapes.vue'
    import UpcomingEvents           from '../events/Upcoming-Events.vue'

    export default 
    {
        components:
        {
            'community-poll':           CommunityPoll,
            'dope-mixtapes':            DopeMixtapes,
            'exclusive-mixtape':        ExclusiveMixtape,
            'exclusive-music-videos':   ExclusiveMusicVideos,
            'featured-event':           FeaturedEvent,
            'featured-mixtapes':        FeaturedMixtapes,
            'featured-music-videos':    FeaturedMusicVideos,
            'hottest-music-videos':     HottestMusicVideos,
            'trending-artists':         TrendingArtists,
            'trending-mixtapes':        TrendingMixtapes,
            'upcoming-events':          UpcomingEvents
        }
    }
</script>

<style lang="stylus" scoped>

    .Page
        padding-top 0

    .Home .Container
        lost-flex-container row
        lost-utility clearfix
        padding-top 20px

    .Home .Column--left,
    .Home .Column--right
        height 100%
        lost-utility clearfix

    .Home .Column--left
        lost-column var(--width) 0 20px flex
        margin-bottom 20px
        --width: 1

    .Home .Column--right
        lost-column var(--width) 0 20px flex
        --width: 1

    .Home .Module
        lost-waffle 1 1 20px flex
        position relative

    @media (min-width 768px)

        .Home .Column--left
            margin-bottom 0
            --width: calc(1 - (300 / ( 768 - 30 )))

        .Home .Column--right
            --width: calc(300 / ( 768 - 30 ))
    
    @media (min-width 992px)

        .Home .Column--left
            --width: calc(1 - (300 / ( 992 - 30 )))

        .Home .Column--right
            --width: calc(300 / ( 992 - 30 ))
    
    @media (min-width 1200px)

        .Home .Column--left
            --width: calc(1 - (300 / ( 1200 - 30 )))

        .Home .Column--right
            --width: calc(300 / ( 1200 - 30 ))


</style>