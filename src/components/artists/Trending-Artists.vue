<template>
    
    <div class="Trending_Artists">

        <header class="Header">

            <title-bar top="Trending" bottom="Artists"></title-bar>

        </header>

        <div class="Artists">

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
                artists:
                [
                    { src: '',      user: '@Bezells',           views: 200000,      likes: 100000,      dislikes: 1000 },
                    { src: '',      user: '@Gucci Mane',        views: 200000,      likes: 100000,      dislikes: 1000 },
                    { src: '',      user: '@Jeremih',           views: 200000,      likes: 100000,      dislikes: 1000 },
                    { src: '',      user: '@Boosie Badazz',     views: 200000,      likes: 100000,      dislikes: 1000 },
                    { src: '',      user: '@Chance',            views: 200000,      likes: 100000,      dislikes: 1000 }
                ]
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Trending_Artists
        background-color $WHITE
        border-radius 6px
        padding 20px

</style>