<template>

    <div class="Progress_Wrapper">

        <div class="Progress_Meter">

            <span style="width: {{ value }}%"></span>

        </div>

        <div class="Progress_Value">
            {{ value }}%
        </div>

    </div>

</template>

<script>

    export default
    {
        props: [ 'value' ]
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Progress_Wrapper
        align-items center
        display flex
        justify-content space-between

    .Progress_Wrapper .Progress_Meter
        background #EBEBEB
        border-radius 3px
        height 14px
        position relative
        width 75%

    .Progress_Wrapper .Progress_Meter span
        animation expand 1s linear
        background-color $BRAND_YELLOW
        border-radius 3px
        display block
        height 100%
        position relative
        overflow hidden

    .Progress_Wrapper .Progress_Value
        color $BRAND_BLUE
        font-family inherit
        font-size 14px
        font-weight bold

    @keyframes expand
        0%
            width 0

</style>