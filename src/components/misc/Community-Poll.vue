<template>
    
    <div class="Community_Poll">

        <header class="Header">

            <title-bar top="Community" bottom="Poll"></title-bar>

        </header>

        <div class="Poll">

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
                question: 'Which new mixtape is your favorite for this week?',
                options:
                [
                    'Life Of A Dreamer?',
                    'E.A.R.T.H',
                    'Slow Motion 2',
                    'Puke Blue Devil'
                ]
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

</style>