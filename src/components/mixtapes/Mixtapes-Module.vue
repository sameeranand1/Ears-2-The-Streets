<template>

    <div class="Mixtapes">

        <div class="Mixtape" v-for="mixtape in mixtapes">

            <div class="Cover_Image" :style="{ 'background-image': 'url(' + mixtape.src + ')' }"></div>

            <div class="Info">

                <h4 class="Title">{{ mixtape.title }}</h4>

                <h4 class="User">{{ mixtape.user }}</h4>

            </div>

            <div class="Actions">

                <ul>
                    <li><a href="#">Listen</a></li>
                    <li><a href="#">Download</a></li>
                </ul>

            </div>

        </div>

    </div>

</template>

<script>

    export default
    {
        props: [ 'mixtapes' ]
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Mixtapes
        background-color $WHITE
        border-radius 6px
        lost-utility clearfix
        padding 20px

    .Mixtapes .Mixtape
        lost-waffle 1 1 20px
        margin-bottom 20px

    .Mixtapes .Mixtape .Cover_Image
        background-color #222329
        background-position top center
        background-repeat no-repeat
        background-size cover
        height 195px
        margin-bottom 13px
        position relative

    .Mixtapes .Mixtape .Info
        margin-bottom 8px

    .Mixtapes .Mixtape .Info .Title,
    .Mixtapes .Mixtape .Info .User
        font-family inherit
    
    .Mixtapes .Mixtape .Info .Title
        color $BRAND_LIGHT_BLUE
        font-size 15px
        font-weight bold
        margin-bottom 5px

    .Mixtapes .Mixtape .Info .User
        color #898C9A
        display inline-block
        font-size 14px
        font-weight 500

    .Mixtapes .Actions
        margin-bottom 15px

    .Mixtapes .Actions ul
        margin 0
        padding 0

    .Mixtapes .Actions ul li
        display inline
        list-style-type none
        margin 0

    .Mixtapes .Actions ul li + li::before
        color #CDCED4
        content ' | '
        padding 0 6px

    .Mixtapes .Actions ul li a
        color $BRAND_LIGHTER_BLUE
        font-family inherit
        font-size 14px
        font-weight normal
        text-decoration none

    .Mixtapes .Actions ul li a:hover
        color #898C9A

    @media (min-width 544px)

        .Mixtapes .Mixtape
            lost-waffle 1/2 2 20px

    @media (min-width 992px)

        .Mixtapes .Mixtape
            lost-waffle 1/4 4 20px

</style>