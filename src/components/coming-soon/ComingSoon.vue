<template>

    <div class="ComingSoon">

        <header class="Header">

            <div>

                <ul>
                    <li>Music Videos</li>
                    <li>Mixtapes</li>
                    <li>Artist</li>
                    <li>Events &amp; More</li>
                </ul>
            
            </div>

            <div>
                <h4>COMING SOON</h4>
            </div>

        </header>

        <div class="Logo">
            <img src="../../assets/images/logo.svg" alt="Ears 2 The Streets">
        </div>

        <footer class="Footer">
            
            <div>
                <h4>While you wait, <span class="--brand-gray">like and follow us on</span></h4>
            </div>

            <div class="Social">

                <ul>
                    <li><a href="https://www.facebook.com/ears2thestreets/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>

            </div>

        </footer>

    </div>

</template>

<script>
    export default
    {
        ready()
        {
            console.log('Coming Soon View');
        }
    }
</script>

<style lang="stylus">

    html, body
        height 100%
        margin 0
        padding 0

    body
        background url('../../assets/images/coming-soon/background.jpg')
        background-repeat no-repeat
        background-position center center
        background-size cover
        align-items center
        display flex
        justify-content center

</style>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors.styl'

    .Header
        margin-bottom 50px
        text-align center

    .Header h4
        color $BRAND_YELLOW
        font-family "Helvetica Neue"
        font-size 38px
        font-weight bold
        text-transform uppercase

    .Header ul
        margin 0
        padding 0

    .Header ul li
        color $WHITE
        display inline
        font-family "Helvetica Neue"
        font-size 9px
        font-weight bold
        letter-spacing .4px
        list-style-type none
        margin 0
        padding 0
        text-transform uppercase

    .Header ul li::after
        bottom: 0px;
        content '\25CF'
        color $BRAND_YELLOW
        font-size 10px
        margin-left 5px
        margin-right 2px
        position relative;

    .Header ul li:last-child::after
        content ''
        margin 0
        padding 0

    .Logo
        text-align center

    .Logo img
        width 318px
        height auto

    .Footer
        margin-top 50px;
        text-align center

    .Footer h4
        color $WHITE
        font-family "Helvetica Neue"
        font-size 17px
        font-weight bold

    .Footer .Social
        display inline-block
        margin-top 43px

    .Footer .Social::before
        content ''
        display block
        background url('../../assets/images/coming-soon/arrow-pointing-right.png')
        height 38px
        width 44px
        position absolute
        margin-left -75px
        margin-top -25px

    .Footer .Social::after
        content ''
        display block
        background url('../../assets/images/coming-soon/arrow-pointing-left.png')
        height 38px
        width 44px
        position absolute
        margin-left 160px
        margin-top -44px

    .Footer .Social ul
        margin 0
        padding 0

    .Footer .Social ul li
        display inline
        list-style-type none
        margin-right 40px

    .Footer .Social ul li:last-child
        margin-right 0

    .Footer .Social ul li a
        color $WHITE
        font-size 14px

    .Footer .Social ul li a:hover
        color $BRAND_YELLOW

    @media (min-width 544px)

        .Header
            margin-bottom 50px

        .Header h4
            font-size 48px

        .Header ul li
            font-size 11px
            letter-spacing .7px

        .Header ul li::after
            bottom: 0px;
            content '\25CF'
            color $BRAND_YELLOW
            font-size 14px
            margin-left 5px
            margin-right 2px
            position relative;

        .Logo img
            width 450px
            height auto

        .Footer
            margin-top 50px;

        .Footer h4
            font-size 22px

        .Footer .Social
            display inline-block
            margin-top 43px

        .Footer .Social ul li
            margin-right 40px

        .Footer .Social ul li:last-child
            margin-right 0

        .Footer .Social ul li a
            font-size 14px

    @media (min-width 768px)

        .Header
            margin-bottom 65px

        .Header h4
            font-size 59px

        .Header ul li
            font-size 15px
            letter-spacing .4px

        .Header ul li::after
            bottom: 2px;
            content '\25CF'
            color $BRAND_YELLOW
            font-size 14px
            margin-left 5px
            margin-right 2px
            position relative;

        .Logo img
            width 666px
            height auto

        .Footer
            margin-top 65px;

        .Footer h4
            font-size 25px

        .Footer .Social
            display inline-block
            margin-top 43px

        .Footer .Social ul li
            margin-right 40px

        .Footer .Social ul li:last-child
            margin-right 0

        .Footer .Social ul li a
            font-size 14px

</style>