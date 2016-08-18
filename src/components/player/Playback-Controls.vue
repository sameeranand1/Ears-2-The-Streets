<template>

    <div class="Playback_Controls">

        <button type="button" class="Back"                      @click="playPreviousTrack()"><span class="icon-previous"></span></button>
        <button type="button" class="Play"  v-show="paused"     @click="togglePlaybackState()"><span class="icon-play"></span></button>
        <button type="button" class="Pause" v-show="!paused"    @click="togglePlaybackState()"><span class="icon-pause"></span></button>
        <button type="button" class="Forward"                   @click="playNextTrack()"><span class="icon-next"></span></button>

    </div>

</template>

<script>

    export default
    {
        data()
        {
            return {
                
                paused: true

            }
        },

        methods:
        {
            /**
             * Returns the next track after the current track.
             * 
             * @return track
             */
            getNextTrack()
            {
                if (this.currentTrack.ID == (this.playlist.length - 1)) {
                    return this.playlist[0]
                }

                return this.playlist[this.currentTrack.ID + 1];
            },

            /**
             * Returns the track before the current track.
             * 
             * @return track
             */
            getPreviousTrack()
            {
                if (this.currentTrack.ID == 0) {
                    return this.playlist[this.playlist.length - 1];
                }

                return this.playlist[this.currentTrack.ID - 1];
            },

            /**
             * Initialize the music player. 
             * Load the first song in the playlist.
             * 
             * @return void
             */
            initializeMusicPlayer()
            {
                this.loading = true;
                this.player.src = this.currentTrack.src;
                this.player.load();
                this.loading = false;
                return;
            },

            /**
             * Event fires when the current song has ended.
             * 
             * @return void
             */
            onEnded()
            {
                this.playNextTrack();
                return;
            },

            /**
             * Event occurs when media has paused but is expected to resume (during buffer).
             * 
             * @return void
             */
            onWaiting()
            {
                this.loading = true;
                return;
            },

            /**
             * Event fires when the previous button is pressed.
             * 
             * @return void
             */
            playNextTrack()
            {
                this.loading = true;

                if (!this.paused) {
                    this.togglePlaybackState();
                }

                this.currentTrack = this.getNextTrack();

                this.player.src = this.currentTrack.src;

                this.player.load();

                this.loading = false;

                this.togglePlaybackState();

                return;
            },

            /**
             * Event fires when the next button is pressed.
             * 
             * @return void
             */
            playPreviousTrack()
            {
                this.loading = true;

                if (!this.paused) {
                    this.togglePlaybackState();
                }

                this.currentTrack = this.getPreviousTrack();

                this.player.src = this.currentTrack.src;

                this.player.load();

                this.loading = false;

                this.togglePlaybackState();

                return;
            },

            /**
             * Event fires when the play or paused buttons are pressed.
             * Accordingly starts or stops the music player.
             * 
             * @return void
             */
            togglePlaybackState()
            {
                this.paused = !this.paused;

                if (this.paused)    this.player.pause();
                else                this.player.play();
                
                return;
            }
        },

        props: [ 'currentTrack', 'loading', 'player', 'playlist' ],

        /**
         * Event fires when the component is ready.
         * Register event handlers here.
         */
        ready()
        {
            this.player.onended = this.onEnded;
            this.player.onwaiting = this.onWaiting;
            this.initializeMusicPlayer();
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Playback_Controls
        align-items center
        display flex
        justify-content center
        padding 10px 15px

    .Playback_Controls button
        background none
        border none
        cursor pointer
        margin 0 22px 0 0
        padding 0

    .Playback_Controls button:last-child
        margin 0

    .Playback_Controls .Back,
    .Playback_Controls .Forward
        color #8E8F98
        font-size 20px

    .Playback_Controls .Pause,
    .Playback_Controls .Play
        color $BRAND_LIGHT_BLUE
        font-size 26px

</style>