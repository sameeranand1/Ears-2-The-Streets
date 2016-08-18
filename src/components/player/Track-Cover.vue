<template>

    <div class="Track_Cover" :style="{ 'background-image': 'url(' + currentTrack.img + ')' }">

        <loader :visible="loading"></loader>

        <img src="../../assets/images/logo-mascot.svg" alt="Logo" class="Logo" v-show="!hasCover()">

    </div>

</template>

<script>

    import Loader from './Loader.vue'

    export default
    {
        components:
        {
            'loader': Loader
        },

        methods:
        {
            /**
             * Returns true if the current song has a cover image.
             * 
             * @return boolean
             */
            hasCover()
            {
                return this.currentTrack.img.length
            }

        },

        props: [ 'loading', 'currentTrack' ]
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Track_Cover
        align-items center
        background-color $BRAND_LIGHT_BLUE
        background-position center
        background-repeat no-repeat
        background-size cover
        display flex
        justify-content center
        height 260px
        overflow hidden
        position relative

    .Track_Cover .Logo
        margin 90px 0
        width 100px

</style>