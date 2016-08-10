<template>
    
    <div class="Newsletter">

        <div class="Container">

            <div class="Heading">
                <h4>Subscribe to our weekly newsletters, <span class="--brand-gray --font-weight-light">enter your details <span class="below">below</span><span class="icon-arrow-right"></span></span></h4>
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

    .Newsletter
        background-color #292A30
        width 100%

    .Newsletter .Container
        display block
        position relative
        text-align center

    .Newsletter .Heading
        padding 20px 0

    .Newsletter .Heading h4
        color $WHITE
        font-family inherit
        font-size 17px
        font-weight bold

    .Newsletter .Heading h4 .below
        display inline-block

    .Newsletter .Heading h4 .icon-arrow-right
        display none

    .Newsletter .Form
        padding 0 0 65px

    .Newsletter .Form form.expand-transition
        transition all 5ms linear

    .Newsletter .Form form.expand-enter,
    .Newsletter .Form form.expand-leave
        opacity 0
        height 0

    .Newsletter .Form .Input
        display block
        margin 0 0 10px
        width 100%

    .Newsletter .Form .Button
        width 100%

    .Newsletter .Form .Input::placeholder
        opacity .4 !important
        transition opacity .3s ease

    .Newsletter .Form .Input:focus::placeholder
        opacity .6 !important

    .Newsletter .Form h4
        color $BRAND_GRAY
        font-family inherit
        font-size 17px
        font-weight 300

    .Newsletter .Form h4.expand-transition
        transition opacity 1s ease-in
        overflow hidden

    .Newsletter .Form h4.expand-enter,
    .Newsletter .Form h4.expand-leave
        opacity 0

    /** Medium Devices **/
    /** Large Devices **/
    @media (min-width 768px)

        .Newsletter
            height 170px

        .Newsletter .Heading,
        .Newsletter .Form
            lost-column none

        .Newsletter .Form .Input
            display inline-block
            margin 0 5px 0 0
            width 170px

        .Newsletter .Form .Button
            width auto

    /** Extra Large Devices **/
    @media (min-width 1200px)

        .Newsletter
            height 104px

        .Newsletter .Container
            align-items center
            display flex
            height 100%
            justify-content space-between
            position relative

        .Newsletter .Heading
            lost-column 42/100 0 0
            lost-row none
            padding 0

        .Newsletter .Heading h4,
        .Newsletter .Form h4
            font-size 18px

        .Newsletter .Heading h4 .below
            display none

        .Newsletter .Heading h4 .icon-arrow-right
            display inline-block
            left 2px
            position relative
            top 2px

        .Newsletter .Form
            lost-column 42/100 0 0
            lost-row none
            padding 0

</style>