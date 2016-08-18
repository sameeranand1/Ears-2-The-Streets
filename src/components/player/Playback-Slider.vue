<template>

    <div class="Playback_Slider">

        <input min="0" :max="duration" step="1" type="range" v-model="currentTime" :value="currentTime" @input="onInput" @change="onSeeked()">

    </div>

    <playback-times :current-time="currentTime" :player="player" :remaining="remaining"></playback-times>

</template>

<script>

    import PlaybackTimes    from './Playback-Times.vue'

    export default
    {
        components:
        {
            'playback-times': PlaybackTimes
        },

        data()
        {
            return {

                /**
                 * @var int - The current playback position of the audio (in seconds).
                 */
                currentTime: 0,

                /**
                 * @var int - The length of the current audio (in seconds).
                 */
                duration: 0,

                /**
                 * @var int - The length remaining of the current audio (in seconds).
                 */
                remaining: 0,

                /**
                 * @var boolean - Seeking state.
                 */
                seeking: false

            }
        },

        methods:
        {
            /**
             * Event fires when the browser can start playing the audio.
             * 
             * @return void
             */
            onCanPlay()
            {
                this.duration = this.player.duration;
                this.onTimeUpdate();
                
                if (!this.seeking) {
                    this.loading = false;
                }
                
                return;
            },

            /**
             * Event occurs when the range slider gets user input.
             * When this event fires, change the music player's playback position.
             * 
             * @return void
             */
            onInput()
            {
                this.player.currentTime = this.currentTime;
                this.seeking = true;
                this.loading = true;
                return;
            },

            /**
             * Event occurs when the user is finished moving / skipping to a new
             * position in the audio.
             * 
             * @return void
             */
            onSeeked()
            {
                this.seeking = false;
                this.loading = false;
                return;
            },

            /**
             * Event fires when the current playback position has changed.
             * 
             * @return void
             */
            onTimeUpdate()
            {
                this.currentTime = Math.trunc(this.player.currentTime);
                this.remaining = Math.trunc(this.player.duration) - this.currentTime;
                return;
            }
        },

        props: [ 'loading', 'player' ],

        /**
         * Event fires when the component is ready.
         * Register event handlers here.
         */
        ready()
        {
            this.player.oncanplay = this.onCanPlay;
            this.player.ontimeupdate = this.onTimeUpdate;
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Playback_Slider
        left 20px
        padding 0
        position absolute
        right 20px
        margin-top -10px
        z-index 1000

    .Playback_Slider input[type=range]
        background transparent
        border none
        display flex
        height 20px
        padding 0
        -webkit-appearance none
        width 100%

    .Playback_Slider input[type=range]:focus
        outline none

    .Playback_Slider input[type=range]::-webkit-slider-runnable-track
        background $BRAND_YELLOW
        border none
        border-radius none
        cursor pointer
        height 4px

    .Playback_Slider input[type=range]::-webkit-slider-thumb
        background $BRAND_YELLOW
        border none
        border-radius 0
        cursor pointer
        height 20px
        margin-top -8px
        -webkit-appearance none
        width 5px

    .Playback_Slider input[type=range]::-moz-range-track
        background #D7D7D7
        border none
        border-radius none
        cursor pointer
        height 4px

    .Playback_Slider input[type=range]::-moz-range-progress
        background $BRAND_YELLOW
        border none
        border-radius none
        cursor pointer
        height 4px

    .Playback_Slider input[type=range]::-moz-range-thumb
        background $BRAND_YELLOW
        border none
        border-radius 0
        cursor pointer
        height 20px
        margin-top -8px
        -webkit-appearance none
        width 5px

</style>