<template>

    <div class="Music_Player_Wrapper">

        <top-menu></top-menu>

        <div class="Music_Player">

            <audio v-el:audio></audio>

            <track-cover :current-track="currentTrack" :loading="loading"></track-cover>

            <playback-slider :loading.sync="loading" :player="getPlayer()"></playback-slider>

            <track-info :current-track="currentTrack"></track-info>

            <playback-controls :current-track.sync="currentTrack" :loading.sync="loading" :player="getPlayer()" :playlist="playlist"></playback-controls>

            <volume-controls :player="getPlayer()"></volume-controls>

        </div>

        <div class="Logo">

            <img src="../../assets/images/logo-no-gradient.svg" alt="Logo">

        </div>

    </div>

</template>

<script>

    import PlaybackControls from './Playback-Controls.vue'
    import PlaybackSlider   from './Playback-Slider.vue'
    import TopMenu          from './Top-Menu.vue'
    import TrackCover       from './Track-Cover.vue'
    import TrackInfo        from './Track-Info.vue'
    import VolumeControls   from './Volume-Controls.vue'

    export default
    {
        /**
         * Called before the instance is destroyed.
         */
        beforeDestroy()
        {
            this.unload();
        },

        components:
        {
            'playback-controls':    PlaybackControls,
            'playback-slider':      PlaybackSlider,
            'top-menu':             TopMenu,
            'track-cover':          TrackCover,
            'track-info':           TrackInfo,
            'volume-controls':      VolumeControls
        },

        data()
        {
            return {

                /**
                 * @var track - The current track.
                 */
                currentTrack: this.playlist[0],

                /**
                 * @var boolean - The loading state.
                 */
                loading: false

            }
        },

        methods:
        {

            /**
             * Returns the audio element.
             * 
             * @return el
             */
            getPlayer()
            {
                return this.$els.audio;
            },

            /**
             * Unloads the music player on mobile devices when
             * user navigates away from the page or closes the browser.
             * 
             * @return void
             */
            unload()
            {
                this.getPlayer().pause();
                this.getPlayer().preload = "none";
                this.getPlayer().load();
                return;
            }

        },

        props: [ 'playlist' ]
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Music_Player_Wrapper
        background-color $BRAND_LIGHTER_BLUE
        border-radius 6px
        padding 20px

    .Music_Player
        background-color $WHITE
        border-bottom-left-radius 6px
        border-bottom-right-radius 6px

    .Music_Player_Wrapper .Logo
        height 40px
        text-align center

    .Music_Player_Wrapper .Logo img
        margin-top -10px
        width 245px
        position relative
        z-index 1000

    @media (min-width 768px)

        .Music_Player_Wrapper .Logo
            height 38px

        .Music_Player_Wrapper .Logo img
            margin-top -10px
            position relative
            width 100%
            z-index 1000

</style>