<template>
    
    <div class="Featured_Mixtapes">

        <header class="Header">

            <title-bar top="Featured" bottom="Mixtapes">
                <small>How to become featured?</small>
            </title-bar>

        </header>

        <div class="Mixtapes">

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
                mixtapes:
                [
                    { src: '',      title: 'Puke Blue Devil',               user: '@Bezells' },
                    { src: '',      title: 'Slow Motion 2',                 user: '@Jarren Benton' },
                    { src: '',      title: 'E.A.R.T.H',                     user: '@B.O.B' },
                    { src: '',      title: 'Left Of A Dreamer',             user: '@Sean Brown' }
                ]
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Featured_Mixtapes
        background-color $WHITE
        border-radius 6px
        padding 20px

</style>