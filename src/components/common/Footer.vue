<template>

    <footer class="Site_Footer">

        <div class="Logo">
            <img src="../../assets/images/logo-mascot.svg" alt="Logo">
        </div>

        <div class="Container">

            <div class="Navigation--left">

                <nav>
                    <li><a v-link="{ path: '/music-videos', exact: true }">Music Videos</a></li>
                    <li><a v-link="{ path: '/mixtapes', exact: true }">Mixtapes</a></li>
                    <li><a v-link="{ path: '/artists', exact: true }">Artists</a></li>
                    <li><a v-link="{ path: '/events', exact: true }">Events</a></li>
                </nav>

                <hr>

                <small>Copyright &copy; 2016-2017 Ears 2 The Streets. All rights reserved.</small>

            </div>

            <div class="Social">

                <ul>
                    <li><a target="_blank" href="https://www.facebook.com/ears2thestreets/"><span class="icon-facebook"></span></a></li>
                    <li><a target="_blank" href="https://twitter.com/e2thestreets"><span class="icon-twitter"></span></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/e2thestreets/"><span class="icon-instagram"></span></a></li>
                </ul>

            </div>

            <div class="Navigation--right">

                <nav>
                    <li><a v-link="{ path: '/', exact: true }">Policy</a></li>
                    <li><a v-link="{ path: '/', exact: true }">Users Agreement</a></li>
                    <li><a v-link="{ path: '/', exact: true }">TOS</a></li>
                    <li><a v-link="{ path: '/', exact: true }">DMCA</a></li>
                </nav>

                <hr>

                <small>Disclaimer: Mixtape content is provided for promotional use and not for sale.</small>

            </div

        </div>

    </footer>

</template>

<script>
    export default {}
</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'
    @require '../../stylus/common/tweaks'
    
    .Site_Footer
        background-color $BRAND_LIGHT_BLUE
        bottom 0
        height 179px
        position absolute
        width 100%

    .Site_Footer .Container
        align-items center
        display flex
        height 100%
        justify-content center
        position relative

    .Site_Footer .Logo
        display block
        height 111px
        left 0
        margin auto
        position absolute
        right 0
        text-align center
        top -56px
        width 146px
        z-index 100

    .Site_Footer .Logo img
        height 111px
        width 146px

    .Site_Footer .Navigation--left,
    .Site_Footer .Navigation--right
        margin-top 25px

    .Site_Footer .Navigation--left
        lost-column 42/100 0 0

    .Site_Footer .Navigation--right
        lost-column 42/100 0 0

    .Site_Footer .Social
        lost-column 16/100 0 0
        text-align center

    .Site_Footer .Social ul
        margin 0
        margin-top 32px
        padding 0

    .Site_Footer .Social ul li
        display inline
        list-style-type none
        margin-right 40px

    .Site_Footer .Social ul li:last-child
        margin-right 0

    .Site_Footer .Social ul li a
        color $BRAND_YELLOW
        text-decoration none

    .Site_Footer .Social ul li a:hover
        color #A4AAAA
    
    .Site_Footer .Navigation--left nav,
    .Site_Footer .Navigation--right nav
        margin-bottom 33px

    .Site_Footer .Navigation--left nav li,
    .Site_Footer .Navigation--right nav li
        display inline
        list-style-type none
        margin-right 37px

    .Site_Footer .Navigation--left nav li:last-child,
    .Site_Footer .Navigation--right nav li:last-child
        margin-right 0

    .Site_Footer .Navigation--left nav li a,
    .Site_Footer .Navigation--right nav li a
        color #9A9DA4
        font-family inherit
        font-size 13px
        font-weight bold
        text-decoration none
        text-transform uppercase

    .Site_Footer .Navigation--left nav li a:hover,
    .Site_Footer .Navigation--right nav li a:hover
        color $BRAND_YELLOW

    .Site_Footer .Navigation--left
        text-align left

    .Site_Footer .Navigation--right
        text-align right

    .Site_Footer .Navigation--left hr,
    .Site_Footer .Navigation--right hr
        background none
        color transparent
        border none
        border-bottom 1px solid #292A30
        margin-bottom 28px

    .Site_Footer .Navigation--left small,
    .Site_Footer .Navigation--right small
        color #646366
        font-family inherit
        font-size 13px
        font-weight normal

</style>