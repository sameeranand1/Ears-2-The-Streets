<template>
    
    <div class="Upcoming_Events">

        <header class="Header">

            <title-bar top="Upcoming" bottom="Events">
                <small>more <span class="icon-arrow-right2"></span></small>
            </title-bar>

        </header>

        <div class="Events">

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
                events:
                [
                    { 
                        src:            '',      
                        title:          'E2TS is hosting a live rap battle, winner takes home $1000 CASH!',               
                        description:    'Ears 2 The Streets is putting on a LIVE rap battle that will be LIVE streamed directly ...' 
                    },
                    { 
                        src:            '',      
                        title:          'E2TS is giving away a free iPhone 6',                 
                        description:    'Ears 2 The Streets is putting on a LIVE rap battle that will be LIVE streamed directly ...' 
                    },
                    { 
                        src:            '',      
                        title:          'E2TS offering a FREE featured spot',                     
                        description:    'Ears 2 The Streets is putting on a LIVE rap battle that will be LIVE streamed directly ...' 
                    }
                ]
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Upcoming_Events
        background-color $WHITE
        border-radius 6px
        padding 20px

</style>