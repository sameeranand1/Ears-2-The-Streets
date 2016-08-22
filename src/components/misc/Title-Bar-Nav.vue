<template>

    <div class="Title_Bar_Nav">

        <nav>

            <li v-for="link in links">
                <a href="#">{{ link.title }}</a>
            </li>

        </nav>

    </div>

</template>

<script>

    export default
    {
        props: [ 'links' ]
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Title_Bar_Nav
        margin-left 29px

    .Title_Bar_Nav nav
        height 100%

    .Title_Bar_Nav nav li
        display inline-block
        list-style-type none
        margin 0 40px 0 0

    .Title_Bar_Nav nav li:last-child
        margin 0

    .Title_Bar_Nav nav li a
        color #898C9A
        font-family inherit
        font-size 14px
        font-weight bold
        text-decoration none
        text-transform uppercase

    .Title_Bar_Nav nav li a:hover
        color $BRAND_LIGHT_BLUE

</style>