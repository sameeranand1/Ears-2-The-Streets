<template>

    <div class="Volume_Controls">

        <input min="0" max="100" step="1" type="range" v-model="volume" @input="onInput()">

        <button v-show="!muted && volume >= 66"                   type="button"       @click="toggleMutedState()"><span class="icon-volume-high"></span></button>
        <button v-show="!muted && volume >= 33 && volume < 66"    type="button"       @click="toggleMutedState()"><span class="icon-volume-medium"></span></button>
        <button v-show="!muted && volume >= 1 && volume < 33"     type="button"       @click="toggleMutedState()"><span class="icon-volume-low"></span></button>
        <button v-show="muted || volume == 0"                     type="button"       @click="toggleMutedState()"><span class="icon-volume-mute"></span></button>

    </div>

</template>

<script>

    export default
    {

        data()
        {
            return {

                /**
                 * @var boolean - Music player's muted state.
                 */
                muted: this.player.muted,

                /**
                 * @var int - Music player's volume.
                 */
                volume: (this.player.volume * 100)

            }
        },

        props: [ 'player' ],

        methods:
        {
            /**
             * Event occurs when the range slider gets user input.
             * When this event fires, change the music player's volume.
             * 
             * @return void
             */
            onInput()
            {
                this.player.volume = this.volume / 100;
                return;
            },

            /**
             * Event occurs when the player's volume changes.
             * 
             * @return void
             */
            onVolumeChange()
            {
                // TODO
            },

            /**
             * Event occurs when volume button is clicked.
             * When this event fires, toggle the player's muted property.
             * 
             * @return void
             */
            toggleMutedState()
            {
                this.player.muted = !this.player.muted;
                this.muted = this.player.muted;
                return;
            }

        },

        /**
         * Event fires when the component is ready.
         * Register event handlers here.
         */
        ready()
        {
            this.player.onvolumechange = this.onVolumeChange;
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Volume_Controls
        align-items center
        display flex
        justify-content space-between
        padding 5px 15px 20px 15px

    .Volume_Controls button
        background none
        border none
        color #8E8F98
        cursor pointer
        display flex
        font-size 17px
        margin 0
        padding 0

    .Volume_Controls input[type=range]
        border none
        padding 0 20px 0 0
        -webkit-appearance none
        width 100%

    .Volume_Controls input[type=range]:focus
        outline none

    .Volume_Controls input[type=range]::-webkit-slider-runnable-track
        background #8E8F98
        border none
        border-radius none
        cursor pointer
        height 4px

    .Volume_Controls input[type=range]::-webkit-slider-thumb
        background #8E8F98
        border none
        border-radius 0
        cursor pointer
        height 20px
        margin-top -8px
        -webkit-appearance none
        width 5px

    .Volume_Controls input[type=range]::-moz-range-track
        background #D7D7D7
        border none
        border-radius none
        cursor pointer
        height 4px

    .Volume_Controls input[type=range]::-moz-range-progress
        background #8E8F98
        border none
        border-radius none
        cursor pointer
        height 4px

    .Volume_Controls input[type=range]::-moz-range-thumb
        background #8E8F98
        border none
        border-radius 0
        cursor pointer
        height 20px
        margin-top -8px
        -webkit-appearance none
        width 5px

</style>