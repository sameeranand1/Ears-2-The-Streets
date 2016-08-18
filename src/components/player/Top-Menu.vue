<template>

    <div class="Top_Menu">

        <div class="Left">

            <button class="Playlist" type="button"><span class="icon-list"></span></button>

        </div>

        <div class="Right">

            <button class="Share" type="button"><span class="icon-share"></span></button>
            <button class="Popout" type="button"><span class="icon-popout"></span></button>

        </div>

    </div>

</template>

<script>

    export default
    {

    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Top_Menu
        align-items center
        display flex
        justify-content space-between
        margin-bottom 20px

    .Top_Menu button
        background none
        border none
        margin 0
        padding 0

    .Top_Menu .Left button,
    .Top_Menu .Right button
        color #8E8F98
        cursor pointer
        font-size 16px
        transition color .3s ease

    .Top_Menu .Left button:hover,
    .Top_Menu .Right button:hover
        color $BRAND_YELLOW
        cursor pointer

    .Top_Menu .Right
        align-items center
        display flex

    .Top_Menu .Right button
        margin-right 25px

    .Top_Menu .Right button:last-child
        margin-right 0

</style>