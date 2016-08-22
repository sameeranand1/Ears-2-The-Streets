<template>

    <div class="Mixtapes">

        <div class="Mixtape" v-for="(index, mixtape) in mixtapes">

            <span class="Star_Icon icon-star-{{ index + 1 }}"></span>

            <img :src="mixtape.src" class="Cover_Image">

            <div class="Info">

                <h4 class="Title">{{ mixtape.title }}</h4>

                <h4 class="User">{{ mixtape.user }}</h4>

                <h4 class="Listens">
                    <span class="icon-headphones"></span>
                    {{ mixtape.listens | number }}
                </h4>

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

        props: [ 'mixtapes' ]
    }

</script>

<style lang="stylus" scoped>

    @require '../../../stylus/common/colors'

    .Mixtapes
        padding-bottom 15px

    .Mixtapes .Mixtape
        align-items center
        border-top 1px solid #EBEBEB
        box-sizing border-box
        display flex
        justify-content flex-start
        padding 15px 20px
        width 100%

    .Mixtapes .Mixtape .Star_Icon
        color #BBBDC9
        font-size 28px

    .Mixtapes .Mixtape:first-child .Star_Icon
        color $BRAND_YELLOW

    .Mixtapes .Mixtape .Cover_Image
        margin-left 15px
        min-width 75px
        width 75px

    .Mixtapes .Mixtape .Info
        display inline-block
        margin-left 20px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap

    .Mixtapes .Mixtape .Info .Title,
    .Mixtapes .Mixtape .Info .User
        font-family inherit
    
    .Mixtapes .Mixtape .Info .Title
        color $BRAND_LIGHT_BLUE
        font-size 13px
        font-weight bold
        line-height 1.2
        margin-bottom 10px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap

    .Mixtapes .Mixtape .Info .User
        color #898C9A
        display block
        font-size 13px
        font-weight 500
        margin-bottom 12px

    .Mixtapes .Mixtape .Info .Listens
        font-family inherit
        color #898C9A
        display block
        font-size 13px
        font-weight 500

    .Mixtapes .Mixtape .Info .Listens span
        color $BRAND_LIGHT_BLUE
        margin-right 5px

</style>