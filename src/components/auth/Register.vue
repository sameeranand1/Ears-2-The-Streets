<template>

    <div class="Page">

        <div class="Container">

            <div class="Register" v-if="!registered">

                <header class="Register_Header">

                    <title-bar top="Yo Just" bottom="Create Account">

                        <small>Login</small>
                        <small v-link="{ path: '/login' }">Nah, Login</small>

                    </title-bar>

                </header>

                <div class="Register_Form">

                    <validator name="validator">

                        <form novalidate v-on:submit.prevent="register()">

                            <div class="Input_Group">

                                <input class="Input" type="text" v-model="first_name" v-validate:first_name="{ required: true, pattern: '/[a-zA-Z]+/' }" placeholder="First name">

                                <span class="icon-error" v-if="$validator.first_name.invalid && !$validator.first_name.pristine"></span>
                                <span class="icon-check" v-if="$validator.first_name.valid && !$validator.first_name.pristine"></span>

                                <div class="Errors" v-if="$validator.first_name.invalid && !$validator.first_name.pristine">

                                    <p v-if="$validator.first_name.required">Please enter your first name.</p>
                                    <p v-if="$validator.first_name.pattern && !$validator.first_name.required">Please use only letters A-Z.</p>

                                </div>

                            </div>

                            <div class="Input_Group">

                                <input class="Input" type="text" v-validate:last_name="{ required: true, pattern: '/[a-zA-Z]+/' }" v-model="last_name" placeholder="Last name">

                                <span class="icon-error" v-if="$validator.last_name.invalid && !$validator.last_name.pristine"></span>
                                <span class="icon-check" v-if="$validator.last_name.valid && !$validator.last_name.pristine"></span>

                                <div class="Errors" v-if="$validator.last_name.invalid && !$validator.last_name.pristine">

                                    <p v-if="$validator.last_name.required">Please enter your last name.</p>
                                    <p v-if="$validator.last_name.pattern && !$validator.last_name.required">Please use only letters A-Z.</p>

                                </div>

                            </div>

                            <div class="Input_Group">

                                <input class="Input" type="text" v-validate:username="{ required: true, maxlength: 12, minlength: 5, pattern: '/[A-Za-z0-9_]+/' }" v-model="username" placeholder="Username">

                                <span class="icon-error" v-if="$validator.username.invalid && !$validator.username.pristine"></span>
                                <span class="icon-check" v-if="$validator.username.valid && !$validator.username.pristine"></span>

                                <div class="Errors" v-if="$validator.username.invalid && !$validator.username.pristine">

                                    <p v-if="$validator.username.required">Please choose a username.</p>
                                    <p v-if="$validator.username.minlength">Your username must be at least 5 characters.</p>
                                    <p v-if="$validator.username.maxlength">Your username cannot be longer than 12 characters.</p>
                                    <p v-if="$validator.username.pattern && !$validator.username.required">Please use only letters A-Z and numbers 0-9.</p>

                                </div>

                            </div>

                            <div class="Input_Group">

                                <input class="Input" type="email" v-validate:email_address="['required', 'email']" v-model="email_address" placeholder="Email address">

                                <span class="icon-error" v-if="$validator.email_address.invalid && !$validator.email_address.pristine"></span>
                                <span class="icon-check" v-if="$validator.email_address.valid && !$validator.email_address.pristine"></span>

                                <div class="Errors" v-if="$validator.email_address.invalid && !$validator.email_address.pristine">

                                    <p v-if="$validator.email_address.required">Your email address is required.</p>
                                    <p v-if="$validator.email_address.email && !$validator.email_address.required">Please enter a valid email address.</p>

                                </div>

                            </div>

                            <div class="Input_Group">

                                <input class="Input" type="password" v-validate:password="{ required: true, maxlength: 25, minlength: 5 }" v-model="password" placeholder="Password">

                                <span class="icon-error" v-if="$validator.password.invalid && !$validator.password.pristine"></span>
                                <span class="icon-check" v-if="$validator.password.valid && !$validator.password.pristine"></span>

                                <div class="Errors" v-if="$validator.password.invalid && !$validator.password.pristine">

                                    <p v-if="$validator.password.required">Please choose a password</p>
                                    <p v-if="$validator.password.minlength">Your password must be at least 5 characters.</p>
                                    <p v-if="$validator.password.maxlength">Your password cannot be longer than 25 characters.</p>

                                </div>

                            </div>

                            <div class="Input_Group">

                                <input class="Input" type="password" v-validate:confirm_password="{ required: true, match: matchPassword }" v-model="confirm_password" placeholder="Confirm password">

                                <span class="icon-error" v-if="$validator.confirm_password.invalid && !$validator.confirm_password.pristine"></span>
                                <span class="icon-check" v-if="$validator.confirm_password.valid && !$validator.confirm_password.pristine"></span>

                                <div class="Errors" v-if="!$validator.confirm_password.pristine && $validator.confirm_password.invalid">

                                    <p v-if="$validator.confirm_password.required">Please confirm your password.</p>
                                    <p v-if="$validator.confirm_password.match && !$validator.confirm_password.required">Your passwords do not match.</p>

                                </div>

                            </div>

                            <div class="Input_Group Terms">

                                <input id="tos" type="checkbox" v-validate:terms="['required']" v-model="terms">

                                <label for="tos"><span class="checkbox">
                                    I agree to the following <a target="_blank" v-link="{ path: '/terms-of-service' }">Terms &amp; Conditions</a> and <a target="_blank" v-link="{ path: '/privacy-policy' }">Privacy Policy</a>.</span>
                                </label>

                            </div>

                            <div class="Input_Group" v-if="!$validator.terms.pristine && $validator.terms.invalid">

                                <div class="Errors">

                                    <p v-if="$validator.terms.required">You must agree to the terms of service and privacy policy.</p>

                                </div>

                            </div>

                            <div class="Input_Group">

                                <button class="Button Register_Button" type="submit" :disabled="$validator.invalid">Next</button>

                            </div>

                        </form>

                    </validator>

                </div>

            </div>

            <div class="Verify" v-if="registered">

                <header class="Verify_Header">

                    <title-bar top="Now Verify" bottom="Your Account"></title-bar>

                </header>

                <div class="Instructions">

                    <div class="Container--fluid">

                        <h3>What's good {{ username }},</h3>

                        <p>Now that you're apart of the e2ts family, we just need you to verify your email address.</p>

                        <p class="Email_Address">Email address: {{ email_address }}</p>

                        <p>We dispatched a verification email to the email address above. Simply click the link to verify that
                            you are the owner of both this account and the email associated with the account. </p>

                    </div>

                    <div class="Container--fluid">

                        <div class="Column--left">

                            <div class="Logo">
                                <img src="../../assets/images/logo-mascot-round.svg" alt="Logo">
                            </div>

                        </div>

                        <div class="Column--right">

                            <h3>Need help?</h3>

                            <p>Didn't receive an email? Check your junk mail or <a href="#">resend email</a>.</p>

                            <p>Still nothing? <a href="#">Email us</a> and we will manually verify your account.</p>

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

        computed:
        {
            /**
             * Tests if the entered password matches the entered confirmation.
             * 
             * @return boolean
             */
            matchPassword: function()
            {
                return this.password === this.confirm_password;
            }
        },

        data()
        {
            return {

                first_name:         null,
                last_name:          null,
                username:           null,
                email_address:      null,
                password:           null,
                confirm_password:   null,
                registered:         false,
                terms:              null,

            }
        },

        methods:
        {
            register()
            {
                this.registered = true;
            }
        },

        validators:
        {
            /**
             * Validates an entered email address.
             * 
             * @return boolean
             */
            email: function(val)
            {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
            },

            /**
             * Tests if two values equal each other.
             * 
             * @return boolean
             */
            match: function(val, result)
            {
                return result;
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Page
        background url('../../assets/images/Register-background.jpg')
        background-position top center
        background-size cover

    .Page .Container
        align-items flex-start
        display flex
        justify-content center

    .Register,
    .Verify
        background $WHITE
        border-radius 6px
        box-sizing border-box
        margin 50px 0
        padding 20px
        width 320px

    .Register .Register_Header small
        align-self center
        left 11px
        margin-left auto
        position relative

    .Register .Register_Header small:last-child
        display none

    .Register .Register_Form .Input_Group
        margin-bottom 15px
        position relative

    .Register .Register_Form .Input_Group .icon-error
        color #F14747
        font-size 20px
        position absolute
        right 13px
        top 10px

    .Register .Register_Form .Input_Group .icon-check
        color #50C71B
        font-size 20px
        position absolute
        right 13px
        top 10px

    .Register .Register_Form .Input_Group.Terms
        align-items center
        display flex

    .Register .Register_Form .Input_Group.Terms input
        height 20px
        margin-right 20px
        width 20px

    .Register .Register_Form .Input_Group.Terms label
        color $BRAND_LIGHT_BLUE
        cursor pointer
        font-family inherit
        font-size 13px
        font-weight normal
        line-height 1.5
        position relative

    .Register .Register_Form .Input_Group.Terms label a
        color #898C9A
        font-weight bold
        text-decoration none

    .Register .Register_Form .Input_Group.Terms label span.checkbox
        position relative

    .Register .Register_Form .Input_Group.Terms label span.checkbox::before,
    .Register .Register_Form .Input_Group.Terms label span.checkbox::after
        bottom 0
        content ''
        margin auto
        position absolute
        top 0

    .Register .Register_Form .Input_Group.Terms label span.checkbox:hover
        cursor pointer

    .Register .Register_Form .Input_Group.Terms label span.checkbox::before
        background $WHITE
        border 4px solid $BRAND_YELLOW
        border-radius 2px
        box-sizing border-box
        height 20px
        left -38px
        top 14px
        width 20px

    .Register .Register_Form .Input_Group.Terms input:checked + label span.checkbox::before
        border none

    .Register .Register_Form .Input_Group.Terms input:checked + label span.checkbox::after
        content '\e91e'
        color #50C71B
        font-family 'icomoon'
        font-size 20px
        height 20px
        left -34px
        top 10px
        width 20px

    .Register .Register_Form .Input_Group .Errors
        margin-top 15px

    .Register .Register_Form .Input_Group .Errors p
        color #F14747
        font-family inherit
        font-size 13px
        font-weight normal
        line-height 1.5

    .Register .Register_Form .Input_Group .Register_Button
        width 100%

    .Verify .Instructions h3
        color $BRAND_LIGHT_BLUE
        font-family inherit
        font-size 20px
        font-weight bold
        line-height 1.3
        margin-bottom 15px

    .Verify .Instructions p
        color #8D8B8D
        font-family inherit
        font-size 13px
        font-weight normal
        line-height 1.5
        margin-bottom 15px

    .Verify .Instructions p.Email_Address
        color $BRAND_LIGHT_BLUE
        font-weight bold

    .Verify .Instructions p a
        color $BRAND_YELLOW
        font-family inherit
        font-size 13px
        font-weight normal
        text-decoration none

    .Verify .Instructions p a:hover
        color $BRAND_LIGHT_BLUE

    .Verify .Instructions .Container--fluid:last-child
        align-items center
        display flex
        lost-utility clearfix
        lost-flex-container row
        margin-top 50px

    .Verify .Instructions .Column--left,
    .Verify .Instructions .Column--right
        lost-waffle 1 1 20px

    .Verify .Instructions .Column--left
        align-items center
        display flex
        justify-content center

    .Verify .Instructions .Column--left .Logo
        position relative
        width 130px

    @media (min-width 544px)

        .Register,
        .Verify
            width 380px

        .Register .Register_Header small:first-child
            display none

        .Register .Register_Header small:last-child
            display block

        .Verify .Instructions .Column--left,
        .Verify .Instructions .Column--right
            lost-waffle 1/2 2 20px

</style>