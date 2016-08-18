<template>

    <div class="Exclusive_Mixtape">

        <header class="Header">

            <title-bar top="Exclusive" bottom="Mixtape"></title-bar>

        </header>

        <music-player :playlist="playlist"></music-player>

    </div>

</template>

<script>

    import MusicPlayer from '../player/Music-Player.vue'
    import TitleBar from '../misc/Title-Bar.vue'    

    export default
    {
        components:
        {
            'music-player': MusicPlayer,
            'title-bar':    TitleBar
        },

        data()
        {
            return {

                playlist:
                [
                    {  
                        ID:     0,
                        name:   'Voodoo',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/01+Voodoo.mp3'
                    },
                    {  
                        ID:     1,
                        name:   'Champagne Problems',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/02+Champagne+Problems.mp3'
                    },
                    {  
                        ID:     2,
                        name:   'Close',
                        artist: 'Nick Jonas feat. Tove Lo',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/03+Close+(feat_+Tove+Lo).mp3'
                    },
                    {  
                        ID:     3,
                        name:   'Chainsaw',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/04+Chainsaw.mp3'
                    },
                    {  
                        ID:     4,
                        name:   'Touch',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/05+Touch.mp3'
                    },
                    {  
                        ID:     5,
                        name:   'Bacon',
                        artist: 'Nick Jonas feat. Ty Dolla $ign',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/06+Bacon+(feat_+Ty+Dolla+%24ign).mp3'
                    },
                    {  
                        ID:     6,
                        name:   'Good Girls',
                        artist: 'Nick Jonas feat Big Sean',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/07+Good+Girls+(feat_+Big+Sean).mp3'
                    },
                    {  
                        ID:     7,
                        name:   'The Difference',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/08+The+Difference.mp3'
                    },
                    {  
                        ID:     8,
                        name:   'Don\'t Make Me Choose',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/09+Don%27t+Make+Me+Choose.mp3'
                    },
                    {  
                        ID:     9,
                        name:   'Under You',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/10+Under+You.mp3'
                    },
                    {  
                        ID:     10,
                        name:   'Unhinged',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/11+Unhinged.mp3'
                    },
                    {  
                        ID:     11,
                        name:   'Comfortable',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/12+Comfortable.mp3'
                    }
                ]

            }
        }
    }

</script>

<style lang="stylus" scoped>

    .Exclusive_Mixtape
        padding-bottom 15px

</style>