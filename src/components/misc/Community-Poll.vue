<template>
    
    <div class="Community_Poll">

        <header class="Header">

            <title-bar top="Community" bottom="Poll"></title-bar>

        </header>

        <div class="Question">
            <h4>{{ question }}</h4>
        </div>

        <div class="Poll" v-if="!answered" transition="expand">

            <div class="Options">

                <div class="Option" v-for="(index, option) in options">

                    <input :id="index" type="radio" :value="option.value" v-model="selected">
                    <label :for="index"><span class="radio">{{ option.value }}</span></label>

                </div>

            </div>

            <button class="Button" type="button" :disabled="!selected" @click="submit()">Cast Vote</button>

        </div>

        <div class="Stats" v-if="answered" transition="expand">

            <div class="Progress" v-for="option in options">

                <h4>{{ option.value }}</h4>

                <div class="Progress_Bar">

                    <progress-bar :value="option.votes"></progress-bar>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

    import ProgressBar from './Progress-Bar.vue'
    import TitleBar from '../misc/Title-Bar.vue'

    export default 
    {
        components:
        {
            'progress-bar': ProgressBar,
            'title-bar': TitleBar
        },

        data()
        {
            return {

                answered: false,

                selected: null,

                question: 'Which new mixtape is your favorite for this week?',

                options:
                [
                    { value: 'Life Of A Dreamer',   votes: 50 },
                    { value: 'E.A.R.T.H',           votes: 24 },
                    { value: 'Slow Motion 2',       votes: 25 },
                    { value: 'Puke Blue Devil',     votes: 1 }
                ]

            }
        },

        methods:
        {
            /**
             * Event fires when user casts his or her vote.
             * 
             * @return void
             */
            submit()
            {
                this.answered = true;
                return;
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Community_Poll
        background-color $WHITE
        border-radius 6px
        padding 20px

    .Community_Poll .Question
        margin-bottom 20px
        text-align center

    .Community_Poll .Question h4
        color $BRAND_LIGHT_BLUE
        font-family inherit
        font-size 15px
        font-weight bold
        line-height 1.3

    .Community_Poll .Poll
        text-align center

    .Community_Poll .Poll.expand-transition
        transition all 5ms linear

    .Community_Poll .Poll.expand-enter,
    .Community_Poll .Poll.expand-leave
        opacity 0
        height 0

    .Community_Poll .Poll .Options
        color $BRAND_LIGHT_BLUE
        font-family inherit
        font-size 14px
        font-weight normal
        line-height 1.3
        margin-bottom 25px

    .Community_Poll .Poll .Options .Option
        align-items center
        display flex
        margin-bottom 12px

    .Community_Poll .Poll .Options .Option input
        height 18px
        margin-left 20px
        margin-right 15px
        width 18px

    .Community_Poll .Poll .Options .Option label 
        position relative

    .Community_Poll .Poll .Options .Option label span.radio
        position relative

    .Community_Poll .Poll .Options .Option label span.radio::before,
    .Community_Poll .Poll .Options .Option label span.radio::after
        bottom 0
        content ''
        margin auto
        position absolute
        top 0

    .Community_Poll .Poll .Options .Option label span.radio:hover
        cursor pointer

    .Community_Poll .Poll .Options .Option label span.radio::before
        background-color: $WHITE
        border 2px solid #D3D3D3
        border-radius 50%
        box-sizing border-box
        height 18px
        left -33px
        transition border-color .3s linear
        width 18px

    .Community_Poll .Poll .Options .Option input:checked + label span.radio::before
        border 6px solid $BRAND_YELLOW

    .Community_Poll .Stats.expand-transition
        transition opacity .5s ease-in
        overflow hidden

    .Community_Poll .Stats.expand-enter,
    .Community_Poll .Stats.expand-leave
        opacity 0

    .Community_Poll .Stats .Progress
        margin 0 10px

    .Community_Poll .Stats .Progress h4
        color $BRAND_LIGHT_BLUE
        font-family inherit
        font-size 14px
        font-weight normal
        line-height 1.3

    .Community_Poll .Stats .Progress .Progress_Bar
        margin 10px 0

</style>