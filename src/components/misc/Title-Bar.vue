<template>

    <div class="Title_Bar" _s-00000>

        <div class="Left">
            <div>
                <h4 class="Top">{{ top }}</h4>
                <h4 class="Bottom">{{ bottom }}</h4>
            </div>
        </div>

        <div class="Right">
            <slot></slot>
        </div>

        <hr>

    </div>

</template>

<script>
    export default 
    {
        props: 
        [ 
            'top', 
            'bottom'
        ]
    }
</script>

<style lang="stylus">

    @require '../../stylus/common/colors'

    .Title_Bar[_s-00000] span.icon-help,
    .Title_Bar[_s-00000] small
        color #898C9A
        font-family inherit
        font-size 13px
        font-weight 500
        position absolute
        right 11px
        text-align right
        transition color .3s ease

    .Title_Bar[_s-00000] span.icon-help
        font-size 16px
        right -5px

    .Title_Bar[_s-00000] small .icon-arrow-right2
        left 3px
        position relative
        top 1.3px

    .Title_Bar[_s-00000] span.icon-help:hover,
    .Title_Bar[_s-00000] small:hover
        color $BRAND_BLUE
        cursor pointer

    .Title_Bar[_s-00000] .Title_Bar_Tabs
        display none
        margin-left 29px
        position relative

    .Title_Bar[_s-00000] .Title_Bar_Tabs li
        display inline-block
        height 100%
        list-style-type none
        margin 0 40px 0 0
        position relative

    .Title_Bar[_s-00000] .Title_Bar_Tabs li:last-child
        margin 0

    .Title_Bar[_s-00000] .Title_Bar_Tabs li
        color #898C9A
        cursor pointer
        font-family inherit
        font-size 14px
        font-weight bold
        text-decoration none
        text-transform uppercase

    .Title_Bar[_s-00000] .Title_Bar_Tabs li::after
        content ''
        border-bottom 3px solid transparent
        bottom -9px
        left 0
        position absolute
        right 0
        transition border-color .15s ease-in-out
        width 100%
        z-index 1000

    .Title_Bar[_s-00000] .Title_Bar_Tabs li:hover::after,
    .Title_Bar[_s-00000] .Title_Bar_Tabs li.active::after
        border-color $BRAND_YELLOW

    .Title_Bar[_s-00000] .Title_Bar_Tabs li:hover,
    .Title_Bar[_s-00000] .Title_Bar_Tabs li.active
        color $BRAND_LIGHT_BLUE

    @media (min-width 992px)

        .Title_Bar[_s-00000] .Title_Bar_Tabs
            display block

</style>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Title_Bar
        background transparent
        display flex
        margin-bottom 20px
        position relative
        width 100%
        z-index 3

    .Title_Bar .Left,
    .Title_Bar .Right
        box-sizing border-box
        display inline-flex
        padding 11px
        position relative

    .Title_Bar .Left
        align-items center
        background url('../../assets/images/title-bar-background.svg')
        background-position bottom right
        background-repeat no-repeat
        background-size 160%
        width 220px
        z-index 3

    .Title_Bar .Right
        flex 1

    .Title_Bar .Top,
    .Title_Bar .Bottom
        font-family inherit
        font-weight bold
        text-transform uppercase

    .Title_Bar .Top
        color $BRAND_YELLOW
        font-size 12px

    .Title_Bar .Bottom
        color $WHITE
        font-size 20px

    .Title_Bar hr
        background none
        border none
        border-bottom 3px solid $BRAND_LIGHTER_BLUE
        bottom 0
        left 0
        position absolute
        right 0
        width 100%
        z-index 1

</style>