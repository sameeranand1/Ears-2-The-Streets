<template>

    <div class="Loader" v-show="visible" transition="fade">
        <div class="Spinner">
            <div class="Bar_1"></div>
            <div class="Bar_2"></div>
            <div class="Bar_3"></div>
        </div>

        <h4>Loading</h4>
    </div>

</template>

<script>
    export default 
    {
        props: [ 'visible' ]
    }
</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Loader
        align-items center
        background-color alpha($BRAND_BLUE, 0.75)
        border-radius 6px
        display flex
        height 100%
        justify-content center
        left 0
        position absolute
        right 0
        top 0
        width 100%
        z-index 1000

    .Loader.fade-transition
        transition opacity 1s ease-in-out

    .Loader.fade-enter,
    .Loader.fade-leave
        height 0
        opacity 0

    .Loader h4
        color $BRAND_YELLOW
        font-family inherit
        font-size 20px
        font-weight bold
        margin-top 80px
        text-transform uppercase

    .Loader .Spinner
        display block
        height 40px
        left 50%
        overflow hidden
        position absolute
        top 50%
        transform translate(-50%, -50%)
        width 30px

    .Loader .Spinner .Bar_1,
    .Loader .Spinner .Bar_2,
    .Loader .Spinner .Bar_3
        animation-name anim
        animation-iteration-count infinite
        background-color $BRAND_YELLOW
        bottom 0
        height 100%
        margin-bottom -2px
        position absolute
        width 8px

    .Loader .Spinner .Bar_1
        animation-duration 1.9s
        left 0px

    .Loader .Spinner .Bar_2
        animation-duration 0.7s
        left 10px

    .Loader .Spinner .Bar_3
        animation-duration 1.1s
        left 20px

    @keyframes anim

        0%
            height 10px
        50%
            height 40px
        100%
            height 10px

</style>