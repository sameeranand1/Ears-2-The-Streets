<template>

    <header class="Site_Header">

        <div class="Container">

            <div class="Logo">
                <a v-link="{ path: '/', exact: true }"><img src="../../assets/images/logo.svg" alt="Ears 2 The Streets"></a>
            </div>

            <span class="icon-menu" v-on:click="toggleMobileNav"></span>

            <div class="Navigation--left">

                <nav>
                    <li v-for="link in leftNavigationLinks">
                        <a class="{{ link.class }}" v-link="{ path: link.path, exact: true }">{{ link.name }}</a>
                    </li>
                </nav>

            </div>

            <div class="Navigation--right">

                <nav>
                    <li v-for="link in rightNavigationLinks">
                        <a class="{{ link.class }}" v-link="{ path: link.path, exact: true }">{{ link.name }}</a>
                    </li>
                </nav>

            </div>

        </div>

    </header>

    <div class="Navigation--toggle">
        <div class="Container--fluid">
            <button class="Button Button--dark" type="menu" v-on:click="toggleMobileNav">Navigation</button>
        </div>
    </div>

    <div class="Navigation--mobile" v-if="showMobileNav" transition="collapse">

        <nav>

            <li v-for="link in leftNavigationLinks">
                <a class="{{ link.class }}" v-link="{ path: link.path, exact: true }" v-on:click="toggleMobileNav">{{ link.name }}</a>
            </li>

            <li v-for="link in rightNavigationLinks">
                <a class="{{ link.class }}" v-link="{ path: link.path, exact: true }" v-on:click="toggleMobileNav">{{ link.name }}</a>
            </li>

        </nav>

    </div>

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
                    { path: '#',                name: 'Promote',    class: '--brand-yellow' },
                    { path: '/login',           name: 'Login',      class: '' },
                    { path: '/register',        name: 'Register',   class: '' }
                ],
                showMobileNav: false
            }
        },

        methods:
        {
            toggleMobileNav()
            {
                this.showMobileNav = !this.showMobileNav
            }
        }
    }
</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Site_Header
        background-color $BRAND_LIGHT_BLUE
        border-bottom 1px solid #0C0D16
        height 84px
        position relative
        width 100%

    .Site_Header .Container
        height 100%

    .Site_Header .Logo
        display block
        height 100%
        text-align center
        z-index 1000

    .Site_Header .Logo img
        height auto
        margin-top 4px
        max-width 260px

    .Site_Header .icon-menu,
    .Site_Header .Navigation--left,
    .Site_Header .Navigation--right
        display none

    .Navigation--toggle
        background-color $BRAND_LIGHTER_BLUE
        border-bottom 1px solid #0C0D16
        padding 10px 0

    .Navigation--toggle .Button
        display block
        width 100%

    .Navigation--mobile
        background-color $BRAND_LIGHTER_BLUE
        border-bottom 1px solid #0C0D16
        padding 25px 0
        position absolute
        text-align center
        top 149px
        width 100%
        z-index 100

    .Navigation--mobile.collapse-transition
        transition all .2s ease

    .Navigation--mobile.collapse-enter,
    .Navigation--mobile.collapse-leave
        opacity 0

    .Navigation--mobile li
        list-style-type none
        margin-bottom 10px

    .Navigation--mobile li:last-child
        margin-bottom 0

    .Navigation--mobile li a
        color $WHITE
        font-family inherit
        font-size 13px
        font-weight bold
        text-decoration none
        text-transform uppercase

    .Navigation--mobile li a:hover
        color $BRAND_YELLOW

    /** Small Devices **/
    @media (min-width 544px)

        .Site_Header .Container
            align-items center
            display flex
            justify-content space-between

        .Site_Header .Logo
            display inline-block
            float left

        .Site_Header .Logo img
            max-width none
            width 260px

        .Site_Header .icon-menu
            color $BRAND_YELLOW
            display block
            font-size 28px

        .Site_Header .icon-menu:hover
            cursor pointer

        .Navigation--toggle
            display none

        .Navigation--mobile
            top 85px

    /** Medium Devices **/
    @media (min-width 768px)

        .Site_Header .Logo img
            width 275px

    /** Large Devices **/
    /** Extra Large Devices **/
    @media (min-width 992px)

        .Site_Header .Container
            display block

        .Site_Header .Logo img
            width 300px

        .Site_Header .icon-menu,
        .Navigation--mobile
            display none

        .Site_Header .Navigation--left,
        .Site_Header .Navigation--right
            align-items center
            display inline-flex
            height 100%
            justify-content center
            width auto

        .Site_Header .Navigation--left
            margin-left 32px

        .Site_Header .Navigation--right
            float right

        .Site_Header .Navigation--left nav,
        .Site_Header .Navigation--right nav
            align-items center
            display inline-flex
            height 100%
            justify-content center

        .Site_Header .Navigation--left nav li,
        .Site_Header .Navigation--right nav li
            align-items center
            display inline-flex
            height 100%
            justify-content center
            list-style-type none

        .Site_Header .Navigation--left nav li a,
        .Site_Header .Navigation--right nav li a
            font-family inherit
            font-size 13px
            font-weight bold
            text-decoration none
            text-transform uppercase

        .Site_Header .Navigation--left nav li
            margin-right 33px

        .Site_Header .Navigation--left nav li:last-child
            margin-right 0px

        .Site_Header .Navigation--left nav li a,
        .Site_Header .Navigation--right nav li a
            align-items center
            border-bottom 2px solid transparent
            box-sizing border-box
            display inline-flex
            justify-content center
            height 100%

        .Site_Header .Navigation--left nav li a
            color #999CA3

        .Site_Header .Navigation--right nav li a
            color $WHITE

        .Site_Header .Navigation--left nav li a:hover,
        .Site_Header .Navigation--right nav li a:hover
            border-bottom-color $BRAND_YELLOW
            color $WHITE

        .Site_Header .Navigation--left nav li a.v-link-active,
        .Site_Header .Navigation--right nav li a.v-link-active
            border-bottom-color $BRAND_YELLOW
            color $WHITE

        .Site_Header .Navigation--right nav li + li:before
            color #303138
            content: " | "
            padding 0 16px

</style>