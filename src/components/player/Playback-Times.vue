<template>

    <div class="Playback_Times">

        <span>{{ currentTime | time }}</span>

        <span>{{ remaining | time }}<span>

    </div>

</template>

<script>

    export default
    {
        filters:
        {
            /**
             * Converts seconds to HH:MM:SS format.
             * 
             * @return string
             */
            time: function(seconds)
            {
                var h = Math.floor(seconds / 3600);
                var m = Math.floor(seconds % 3600 / 60);
                var s = Math.floor(seconds % 3600 % 60);
                return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
            }
        },

        props: [ 'current-time', 'player', 'remaining' ]
    }

</script>

<style lang="stylus" scoped>

    .Playback_Times
        align-items center
        display flex
        justify-content space-between
        padding 12px 15px

    .Playback_Times span
        color #8E8F98
        font-size 13px
        font-weight normal

</style>