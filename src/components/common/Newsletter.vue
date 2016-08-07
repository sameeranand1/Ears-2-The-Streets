<template>
    
    <div class="Newsletter">

        <div class="Container">

            <div class="Heading">
                <h4>Subscribe to our weekly newsletters, <span class="--brand-gray --font-weight-light">enter your details <span class="icon-arrow-right"></span></span></h4>
            </div>

            <div class="Form">

                <form v-on:submit.prevent="subscribe" v-show="!subscribed" transition="expand">

                    <input class="Input" type="text" v-model="name" placeholder="Full name">
                    <input class="Input" type="text" v-model="email" placeholder="E-mail Address">
                    <button class="Button" type="submit">Subscribe</button>

                </form>

                <h4 v-show="subscribed" transition="expand">YooooO! You've successfully subscribed.</h4>

            </div>

        </div>

    </div>

</template>

<script>
    export default 
    {
        data()
        {
            return {
                name: '',
                email: '',
                subscribed: false
            }
        },
        methods:
        {
            subscribe()
            {
                this.subscribed = true;
            }
        }
    }
</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'
    @require '../../stylus/common/tweaks'

    .Newsletter
        background-color #292A30
        bottom 179px
        height 104px
        position absolute
        width 100%

    .Newsletter .Container
        align-items center
        display flex
        height 100%
        justify-content space-between
        position relative

    .Newsletter .Heading
        lost-column 42/100

    .Newsletter .Heading h4
        color $WHITE
        font-family inherit
        font-size 18px
        font-weight bold

    .Newsletter .Heading .icon-arrow-right
        left 2px
        position relative
        top 2px

    .Newsletter .Form
        lost-column 42/100
        text-align right

    .Newsletter .Form form.expand-transition
        transition opacity .01s ease-in-out

    .Newsletter .Form form.expand-enter,
    .Newsletter .Form form.expand-leave
        opacity 0

    .Newsletter .Form .Input
        margin-right 5px
        width 170px

    .Newsletter .Form .Input::placeholder
        opacity .4 !important
        transition opacity .3s ease

    .Newsletter .Form .Input:focus::placeholder
        opacity .6 !important

    .Newsletter .Form h4
        color $BRAND_GRAY
        font-family inherit
        font-size 18px
        font-weight 300

    .Newsletter .Form h4.expand-transition
        transition all .8s ease-in
        overflow hidden

    .Newsletter .Form h4.expand-enter,
    .Newsletter .Form h4.expand-leave
        opacity 0

</style>