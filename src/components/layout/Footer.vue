<template>

    <footer class="Site_Footer">

        <div class="Logo">
            <img src="../../assets/images/logo-mascot.svg" alt="Logo">
        </div>

        <div class="Container">

            <div class="Social_Mobile">

                <ul>
                    <li><a target="_blank" href="https://www.facebook.com/ears2thestreets/"><span class="icon-facebook"></span></a></li>
                    <li><a target="_blank" href="https://twitter.com/e2thestreets"><span class="icon-twitter"></span></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/e2thestreets/"><span class="icon-instagram"></span></a></li>
                </ul>

            </div>

            <div class="Navigation--left">

                <nav>
                    <li v-for="link in leftNavigationLinks">
                        <a class="{{ link.class }}" v-link="{ path: link.path, exact: true }">{{ link.name }}</a>
                    </li>
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
                    <li v-for="link in rightNavigationLinks">
                        <a class="{{ link.class }}" v-link="{ path: link.path, exact: true }">{{ link.name }}</a>
                    </li>
                </nav>

                <hr>

                <small>Disclaimer: Mixtape content is provided for promotional use and not for sale.</small>

            </div>

            <div class="Copyright_Mobile">
                <small>Copyright &copy; 2016-2017 Ears 2 The Streets. All rights reserved.</small>
                <br>
                <small>Disclaimer: Mixtape content is provided for promotional use and not for sale.</small>
            </div>

        </div>

    </footer>

</template>

<script>
    export default 
    {
        data()
        {
            return {
                leftNavigationLinks: 
                [
                    { path: '/music-videos',    name: 'Music Videos',   class: '' },
                    { path: '/mixtapes',        name: 'Mixtapes',       class: '' },
                    { path: '/artists',         name: 'Artists',        class: '' },
                    { path: '/events',          name: 'Events',         class: '' }
                ],
                rightNavigationLinks:
                [
                    { path: '/privacy-policy',      name: 'Policy',             class: '' },
                    { path: '/users-agreement',     name: 'Users Agreement',    class: '' },
                    { path: '/terms-of-service',    name: 'TOS',                class: '' },
                    { path: '/dmca',                name: 'DMCA',               class: '' }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'
    
    .Site_Footer
        background-color $BRAND_LIGHT_BLUE
        position relative
        width 100%

    .Site_Footer .Container
        display block
        lost-utility clearfix
        padding-bottom 30px
        padding-top 65px
        position relative

    .Site_Footer .Logo
        display block
        height auto
        left 0
        margin auto
        position absolute
        right 0
        text-align center
        top -42px
        width 110px
        z-index 98

    .Site_Footer .Logo img
        height auto
        width 110px

    .Site_Footer .Navigation--left,
    .Site_Footer .Navigation--right
        lost-column 1 0 0
        margin-top 0px
        text-align center
    
    .Site_Footer .Navigation--left nav,
    .Site_Footer .Navigation--right nav
        margin-bottom 0px

    .Site_Footer .Navigation--left nav li,
    .Site_Footer .Navigation--right nav li
        list-style-type none
        margin-bottom 10px

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

    .Site_Footer .Navigation--left hr,
    .Site_Footer .Navigation--right hr,
    .Site_Footer .Navigation--left small,
    .Site_Footer .Navigation--right small,
    .Site_Footer .Social
        display none

    .Site_Footer .Social_Mobile
        lost-column 1 0 0

    .Site_Footer .Social_Mobile,
    .Site_Footer .Social
        text-align center

    .Site_Footer .Social_Mobile ul,
    .Site_Footer .Social ul
        margin 0
        padding 0

    .Site_Footer .Social_Mobile ul
        margin-bottom 20px

    .Site_Footer .Social ul
        margin-top 32px

    .Site_Footer .Social_Mobile ul li,
    .Site_Footer .Social ul li
        display inline
        font-size 14px
        list-style-type none
        margin-right 20px

    .Site_Footer .Social_Mobile ul li:last-child,
    .Site_Footer .Social ul li:last-child
        margin-right 0

    .Site_Footer .Social_Mobile ul li a,
    .Site_Footer .Social ul li a
        color $BRAND_YELLOW
        text-decoration none

    .Site_Footer .Social_Mobile ul li a:hover,
    .Site_Footer .Social ul li a:hover
        color #A4AAAA

    .Site_Footer .Copyright_Mobile
        display block
        lost-column 1 0 0
        margin-top 15px
        text-align center

    .Site_Footer .Navigation--left small,
    .Site_Footer .Navigation--right small,
    .Site_Footer .Copyright_Mobile
        color #646366
        font-family inherit
        font-size 14px
        font-weight normal

    /** Medium Devices **/
    @media (min-width 768px)

        .Site_Footer
            height 179px

        .Site_Footer .Container
            align-items center
            display flex
            height 100%
            justify-content center
            padding-bottom 0
            padding-top 0

        .Site_Footer .Navigation--left,
        .Site_Footer .Navigation--right
            lost-column 42/100 0 0
            margin-top 25px

        .Site_Footer .Navigation--left
            text-align left

        .Site_Footer .Navigation--right
            text-align right

        .Site_Footer .Navigation--left nav,
        .Site_Footer .Navigation--right nav
            margin-bottom 33px

        .Site_Footer .Navigation--left nav li,
        .Site_Footer .Navigation--right nav li
            display inline
            margin-bottom 0
            margin-right 15px

        .Site_Footer .Navigation--left nav li:last-child,
        .Site_Footer .Navigation--right nav li:last-child
            margin-right 0

        .Site_Footer .Navigation--left hr,
        .Site_Footer .Navigation--right hr
            background none
            border none
            border-bottom 1px solid #292A30
            color transparent
            display block
            margin-bottom 28px

        .Site_Footer .Navigation--left small,
        .Site_Footer .Navigation--right small
            display block
            font-size 9px

        .Site_Footer .Social_Mobile
            display none

        .Site_Footer .Social
            display block
            lost-column 16/100 0 0

        .Site_Footer .Copyright_Mobile
            display none

    /** Large Devices **/
    @media (min-width 992px)

        .Site_Footer .Social ul li
            font-size 16px
            margin-right 30px

        .Site_Footer .Navigation--left nav li,
        .Site_Footer .Navigation--right nav li
            margin-right 37px

        .Site_Footer .Navigation--left nav li a,
        .Site_Footer .Navigation--right nav li a
            font-size 13px

        .Site_Footer .Navigation--left small,
        .Site_Footer .Navigation--right small
            font-size 11px

    /** Extra Large Devices **/
    @media (min-width 1200px)

        .Site_Footer .Logo
            top -56px
            width 146px

        .Site_Footer .Logo img
            width 146px

        .Site_Footer .Social ul li
            margin-right 40px

        .Site_Footer .Navigation--left nav li,
        .Site_Footer .Navigation--right nav li
            margin-right 37px

        .Site_Footer .Navigation--left small,
        .Site_Footer .Navigation--right small
            font-size 13px

</style>