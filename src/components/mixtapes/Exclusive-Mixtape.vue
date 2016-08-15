<template>
    
    <div class="Exclusive_Mixtape">

        <header class="Header">

            <title-bar top="Exclusive" bottom="Mixtape"></title-bar>

        </header>

        <audio v-el:audio 
            @waiting="onWaiting()" 
            @playing="onPlaying()"
            @play="onPlay()"
            @pause="onPause()"
            @canplay="onCanPlay()"
        >
        </audio>

        <div class="Wrapper">

            <loader :visible="loading"></loader>

            <div class="Top_Bar">

                <div class="Left">

                    <div class="Icon Playlist_Icon">
                        <span class="icon-list"></span>
                    </div>

                </div>

                <div class="Right">

                    <div class="Icon Share_Icon">
                        <span class="icon-share"></span>
                    </div>

                    <div class="Icon Popout_Icon">
                        <span class="icon-popout"></span>
                    </div>

                </div>

            </div>

            <div class="Player">

                <div class="Cover_Image" :style="{ 'background-image': 'url(' + getCurrentSong().img + ')' }">
                    <img src="../../assets/images/logo-mascot.svg" alt="Logo" class="Logo" v-show="!doesCurrentSongHaveImage()">
                </div>

                <div class="Player_Controls">

                    <div class="Playback_Slider">

                    </div>

                    <div class="Info">

                        <h4 class="Mixtape_Name">{{ getCurrentSong().album }}</h4>
                        <h4 class="Song_Name">{{ getCurrentSong().name }}</h4>
                        <h4 class="Artists">{{ getCurrentSong().artist }}</h4>

                    </div>

                    <div class="Playback_Controls">

                        <div class="Icon Back_Icon" v-on:click="playPreviousSong()">
                            <span class="icon-previous"></span>
                        </div>

                        <div class="Icon Play_Icon" v-on:click="play()" v-show="!isPlaying()">
                            <span class="icon-play"></span>
                        </div>

                        <div class="Icon Pause_Icon" v-on:click="pause()" v-show="isPlaying()">
                            <span class="icon-pause"></span>
                        </div>

                        <div class="Icon Forward_Icon" v-on:click="playNextSong()">
                            <span class="icon-next"></span>
                        </div>

                    </div>

                    <div class="Volume_Controls">

                        <div class="Volume_Slider">

                        </div>

                        <div class="Volume_Icon">

                        </div>

                    </div>

                </div>

            </div>

            <div class="Logo">

            </div>

        </div>

    </div>

</template>

<script>

    import Loader   from '../misc/Loader.vue'
    import TitleBar from '../misc/Title-Bar.vue'

    export default 
    {
        components:
        {
            'loader':       Loader,
            'title-bar':    TitleBar
        },

        created()
        {
            this.setCurrentSong(this.getFirstSong());
        },

        data()
        {
            return {

                current: null,

                loading: true,

                playing: false,

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
        },

        methods:
        {
            /**
             * Returns true if the current song has a cover image.
             * 
             * @return boolean
             */
            doesCurrentSongHaveImage()
            {
                return this.getCurrentSong().img.length
            },

            /**
             * Returns the current song.
             * 
             * @return song
             */
            getCurrentSong()
            {
                return this.current;
            },

            /**
             * Returns the current song's ID
             * 
             * @return int
             */
            getCurrentSongID()
            {
                return this.getCurrentSong().ID;
            },

            /**
             * Returns the source of the current song.
             * 
             * @return string
             */
            getCurrentSongSource()
            {
                return this.getCurrentSong().src;
            },

            /**
             * Returns the first song in the playlist.
             * 
             * @return song
             */
            getFirstSong()
            {
                return this.playlist[0];
            },

            /**
             * Returns the song after the current song.
             * 
             * @return song
             */
            getNextSong()
            {
                if (this.getCurrentSongID() == (this.playlist.length - 1)) {
                    return this.getSong(0);
                }

                return this.getSong(this.getCurrentSongID() + 1);
            },

            /**
             * Returns the music player.
             * 
             * @return el
             */
            getPlayer()
            {
                return this.$els.audio;
            },

            /**
             * Returns the song before the current song.
             * 
             * @return song
             */
            getPreviousSong()
            {
                if (this.getCurrentSongID() == 0) {
                    return this.getSong(this.playlist.length - 1);
                }

                return this.getSong(this.getCurrentSongID() - 1);
            },

            /**
             * Returns the song with given ID
             * 
             * @params int ID - song ID
             * @return song
             */
            getSong(ID)
            {
                return this.playlist[ID];
            },

            /**
             * Returns the source of the song with given ID.
             * 
             * @params int ID - song ID
             * @return string
             */
            getSongSource(ID)
            {
                return this.getSong(ID).src;
            },

            /**
             * Returns true if the player is playing.
             * 
             * @return boolean
             */
            isPlaying()
            {
                return this.playing;
            },

            /**
             * Event occurs when the browser can start playing the media.
             * 
             * @return void
             */
            onCanPlay()
            {
                this.playing = false;
            },

            /**
             * Event occurs when the media is paused either by the user or programmatically.
             * 
             * @return void
             */
            onPause()
            {
                this.playing = false;
            },

            /**
             * Event occurs when media has been started or is no longer paused.
             * 
             * @return void
             */
            onPlay()
            {
                this.playing = true;
            },

            /**
             * Event occurs when media is playing after having been paused or stopped
             * for buffering.
             * 
             * @return void
             */
            onPlaying()
            {
                this.playing = true;

                if (this.loading) {
                    return this.loading = false;
                }
            },

            /**
             * Event occurs when media has paused but is expected to resume (during buffer).
             */
            onWaiting()
            {
                this.loading = true;
            },

            /**
             * Pause the current track.
             * 
             * @return void
             */
            pause()
            {
                return this.getPlayer().pause();
            },

            /**
             * Resume the current track.
             * 
             * @return void
             */
            play()
            {
                return this.getPlayer().play();
            },

            /**
             * Play the next song.
             * 
             * @return void
             */
            playNextSong()
            {
                this.loading = true;

                if (this.isPlaying()) {
                    this.pause();
                }

                this.setCurrentSong(this.getNextSong());

                this.getPlayer().src = this.getCurrentSongSource();
                this.reload();

                this.loading = false;

                this.play();
            },

            /**
             * Play the previous song.
             * 
             * @return void
             */
            playPreviousSong()
            {
                this.loading = true;

                if (this.isPlaying()) {
                    this.pause();
                }

                this.setCurrentSong(this.getPreviousSong());

                this.getPlayer().src = this.getCurrentSongSource();
                this.reload();

                this.loading = false;
                
                this.play();
            },

            /**
             * Reload the audio player.
             * 
             * @return void
             */
            reload()
            {
                return this.getPlayer().load();
            },

            /**
             * Set the current song with given song.
             * 
             * @params obj song - song
             * @return void
             */
            setCurrentSong(song)
            {
                return this.current = song;
            }
        },

        /**
         * Fire when the component is ready.
         */
        ready()
        {
            this.getPlayer().src = this.getCurrentSongSource();
            this.reload();
            this.loading = false;
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Exclusive_Mixtape .Wrapper
        background-color $BRAND_LIGHTER_BLUE
        border-radius 6px
        padding 20px
        position relative

    .Exclusive_Mixtape .Wrapper .Top_Bar
        align-items center
        display flex
        justify-content space-between
        margin-bottom 20px

    .Exclusive_Mixtape .Wrapper .Top_Bar .Left .Icon,
    .Exclusive_Mixtape .Wrapper .Top_Bar .Right .Icon
        color #8E8F98
        cursor pointer
        font-size 16px
        transition color .3s ease

    .Exclusive_Mixtape .Wrapper .Top_Bar .Left .Icon:hover,
    .Exclusive_Mixtape .Wrapper .Top_Bar .Right .Icon:hover
        color $BRAND_YELLOW
        cursor pointer

    .Exclusive_Mixtape .Wrapper .Top_Bar .Right
        align-items center
        display flex

    .Exclusive_Mixtape .Wrapper .Top_Bar .Right .Icon
        margin-right 25px

    .Exclusive_Mixtape .Wrapper .Top_Bar .Right .Icon:last-child
        margin-right 0

    .Exclusive_Mixtape .Wrapper .Player
        /** Todo **/

    .Exclusive_Mixtape .Wrapper .Player .Cover_Image
        align-items center
        background-color $BRAND_LIGHT_BLUE
        background-position center
        background-repeat no-repeat
        background-size cover
        display flex
        justify-content center
        height 260px
        overflow hidden

    .Exclusive_Mixtape .Wrapper .Player .Cover_Image .Logo
        margin 90px 0
        width 100px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls
        background-color $WHITE
        padding 15px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Slider
        /** Todo **/

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Info
        text-align center

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Info .Mixtape_Name
        color #292A32
        font-family inherit
        font-size 14px
        font-weight bold
        margin-bottom 12px
        text-transform uppercase

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Info .Song_Name
        color #8E8F98
        font-family inherit
        font-size 14px
        font-weight normal
        margin-bottom 8px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Info .Artists
        color #8E8F98
        font-family inherit
        font-size 13px
        font-weight normal

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls
        align-items center
        display flex
        justify-content space-around
        margin-left auto
        margin-right auto
        margin-top 20px
        width 150px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls .Icon
        cursor pointer
        font-size 20px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls .Back_Icon
        color #8E8F98

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls .Play_Icon
        color $BRAND_BLUE
        font-size 26px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls .Pause_Icon
        color $BRAND_BLUE
        font-size 26px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls .Forward_Icon
        color #8E8F98

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls
        /** Todo **/

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Slider
        /** Todo **/

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Icon
        /** Todo **/

    .Exclusive_Mixtape .Wrapper .Logo
        /** Todo **/

</style>