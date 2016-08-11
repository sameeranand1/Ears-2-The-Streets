<template>

    <div class="Player">
        <span class="icon-controller-play"></span>
    </div>

</template>

<script>

    export default 
    {
        props: [ 'video' ]
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Player
        align-items center
        background alpha(darken($BRAND_LIGHT_BLUE, 25%), .5)
        border 4px solid $BRAND_YELLOW
        border-radius 50%
        display flex
        height 72px
        justify-content center
        transition border-color .3s ease
        width 72px

    .Player:hover
        border-color darken($BRAND_YELLOW, 25%)
        cursor pointer

    .Player .icon-controller-play
        color $WHITE
        border-radius 20px
        font-size 50px
        margin-left 5px

</style>