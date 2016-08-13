<template>
    
    <div class="Trending_Mixtapes">

        <header class="Header">

            <title-bar top="Trending" bottom="Mixtapes"></title-bar>

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
                    { src: '',      title: 'Something 4 The Cookout',       user: '@DJ Ty Boogie',      listens: 1000000 },
                    { src: '',      title: 'Dream Chasers, Part 2',         user: '@Meek Mill',         listens: 1000000 },
                    { src: '',      title: 'Progression 2 A Young...',      user: '@Kirko Bangz',       listens: 1000000 },
                    { src: '',      title: 'By Any Means',                  user: '@Kevin Gates',       listens: 1000000 },
                    { src: '',      title: 'Street Lottery',                user: '@Young Scooter',     listens: 1000000 }
                ]
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Trending_Mixtapes
        background-color $WHITE
        border-radius 6px
        padding 20px

</style>