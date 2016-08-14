<template>
    
    <div class="Hottest_Music_Videos">

        <header class="Header">

            <title-bar top="The Hottest" bottom="Music Videos">
                <small>more <span class="icon-arrow-right2"></span></small>
            </title-bar>

        </header>

        <div class="Music_Videos">

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
                musicVideos:
                [
                    { src: '',      title: 'Breath',                      user: '@Token',     views: 200000 },
                    { src: '',      title: 'Waist Down',                  user: '@Token',     views: 200000 },
                    { src: '',      title: 'Party On The East Coast',     user: '@Token',     views: 200000 },
                    { src: '',      title: 'Breath',                      user: '@Token',     views: 200000 },
                    { src: '',      title: 'Waist Down',                  user: '@Token',     views: 200000 },
                    { src: '',      title: 'Party On The East Coast',     user: '@Token',     views: 200000 },
                    { src: '',      title: 'Breath',                      user: '@Token',     views: 200000 },
                    { src: '',      title: 'Waist Down',                  user: '@Token',     views: 200000 },
                    { src: '',      title: 'Party On The East Coast',     user: '@Token',     views: 200000 }
                ]
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Hottest_Music_Videos
        background-color $WHITE
        border-radius 6px
        padding 20px

</style>