<template>

    <div class="Artists">

        <div class="Artist" v-for="artist in artists">

            <img :src="artist.src" class="Cover_Image">

            <div class="Info">

                <h4 class="User">{{ artist.user }}</h4>

                <h4 class="Views">{{ artist.views | number }} Profile Views</h4>

                <div class="Popularity">

                    <div class="Popularity_Meter">

                        <span style="width: {{ (artist.likes / (artist.likes + artist.dislikes)) * 100 }}%"></span>

                    </div>

                    <ul>
                        <li>{{ artist.likes | number }} Likes</li>
                        <li>{{ artist.dislikes | number }} Dislikes</li>
                    </ul>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

    export default
    {
        filters:
        {

            number: function(number)
            {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

        },

        props: [ 'artists' ]
    }

</script>

<style lang="stylus" scoped>

    @require '../../../stylus/common/colors'

    .Artists
        padding-bottom 15px

    .Artists .Artist
        align-items center
        box-sizing border-box
        display flex
        justify-content flex-start
        padding 15px 20px
        width 100%

    .Artists .Artist .Cover_Image
        min-width 55px
        width 55px

    .Artists .Artist .Info
        display inline-block
        margin-left 20px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        width 100%

    .Artists .Artist .Info .User
        color $BRAND_LIGHT_BLUE
        font-size 13px
        font-weight bold
        line-height 1.2
        margin-bottom 10px

    .Artists .Artist .Info .Views
        color #898C9A
        display block
        font-size 13px
        font-weight 500
        margin-bottom 10px

    .Artists .Artist .Info .Popularity .Popularity_Meter
        background #E04F4F
        height 3px
        margin-bottom 10px
        position relative
        width 100%

    .Artists .Artist .Info .Popularity .Popularity_Meter span
        animation expand .2s linear
        background-color $BRAND_GREEN
        border-right 3px solid $WHITE
        display block
        height 100%
        position relative
        overflow hidden

    .Artists .Artist .Info .Popularity ul
        line-height 1
        margin 0
        padding 0

    .Artists .Artist .Info .Popularity ul li
        color #6C6D76
        display inline-block
        font-family inherit
        font-size 13px
        font-weight normal
        list-style-type none

    .Artists .Artist .Info .Popularity ul li + li::before
        color #6C6D76
        content ' | '
        padding 0 5px

</style>