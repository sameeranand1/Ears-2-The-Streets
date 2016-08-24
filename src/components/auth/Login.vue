<template>

    <div class="Page">

        <div class="Container">

            <div class="Login">

                <header class="Login_Header">

                    <title-bar top="C'Mon" bottom="Login Already">

                        <small v-link="{ path: '/register' }">Register</small>
                        <small v-link="{ path: '/register' }">Create Account</small>

                    </title-bar>

                </header>

                <div class="Login_Form">

                    <form novalidate v-on:submit.prevent="login()">

                        <div class="Input_Group">

                            <input class="Input" type="email" v-model="email_address" placeholder="Email address">

                        </div>

                        <div class="Input_Group">

                            <input class="Input" type="password" v-model="password" placeholder="Password">

                        </div>

                        <div class="Input_Group">

                            <button class="Button Login_Button" type="submit">Login</button>

                        </div>

                    </form>

                </div>

                <div class="Container--fluid">

                    <div class="Column--left">

                        <h3>
                            <span>Y</span>
                            <span>O</span>
                            <span>O</span>
                            <span>O</span>
                            <span>O</span>
                            <span>O</span>
                            <span>O!</span>
                        </h3>

                        <p>Having trouble logging into your account? Hi, my name is Gravy
                            baby and I can help.
                        </p>

                        <p><a href="#">Reset your password</a></p>

                    </div>

                    <div class="Column--right">

                        <div class="Logo">
                            <img src="../../assets/images/logo-mascot-round.svg" alt="Logo">
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

    import TitleBar from '../misc/Title-Bar.vue'

    export default
    {
        components:
        {
            'title-bar': TitleBar
        },

        data()
        {
            return {

                email_address:  null,
                password:       null

            }
        },

        methods:
        {
            /**
             * Authenticates the user.
             * 
             * @return void
             */
            login()
            {
                console.log('Authenticate The User...');
                return;
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Page
        background url('../../assets/images/login-background.jpg')
        background-position top center
        background-size cover

    .Page .Container
        align-items flex-start
        display flex
        justify-content center

    .Login
        background $WHITE
        border-radius 6px
        box-sizing border-box
        margin 50px 0
        padding 20px
        width 320px

    .Login .Login_Header small
        align-self center
        left 11px
        margin-left auto
        position relative

    .Login .Login_Header small:last-child
        display none

    .Login .Login_Form .Input_Group
        margin-bottom 15px
        position relative

    .Login .Login_Form .Input_Group .Login_Button
        width 100%

    .Login .Container--fluid
        align-items center
        display flex
        lost-utility clearfix
        lost-flex-container row
        margin-top 40px

    .Login .Container--fluid p
        color #8D8B8D
        font-family inherit
        font-size 13px
        font-weight bold
        line-height 1.5
        margin-bottom 15px

    .Login .Container--fluid p a
        color $BRAND_YELLOW
        font-family inherit
        font-size 13px
        font-weight bold
        text-decoration none

    .Login .Container--fluid p a:hover
        color $BRAND_LIGHT_BLUE

    .Login .Container--fluid .Column--left,
    .Login .Container--fluid .Column--right
        lost-waffle 1 1 20px

    .Login .Container--fluid .Column--right
        align-items center
        display flex
        justify-content center

    .Login .Container--fluid .Column--right .Logo
        position relative
        width 130px

    .Login .Container--fluid .Column--left h3
        color $BRAND_LIGHT_BLUE
        font-family inherit
        font-weight bold
        letter-spacing -2px
        margin-bottom 15px

    .Login .Container--fluid .Column--left h3 span:first-child,
    .Login .Container--fluid .Column--left h3 span:nth-child(2)
        font-size 20px

    .Login .Container--fluid .Column--left h3 span:nth-child(3)
        font-size 22px

    .Login .Container--fluid .Column--left h3 span:nth-child(4)
        font-size 24px

    .Login .Container--fluid .Column--left h3 span:nth-child(5)
        font-size 27px

    .Login .Container--fluid .Column--left h3 span:nth-child(6)
        font-size 29px

    .Login .Container--fluid .Column--left h3 span:nth-child(7)
        font-size 32px

    @media (min-width 544px)

        .Login
            width 380px

        .Login .Login_Header small:first-child
            display none

        .Login .Login_Header small:last-child
            display block

        .Login .Container--fluid .Column--left,
        .Login .Container--fluid .Column--right
            lost-waffle 1/2 2 20px

</style>