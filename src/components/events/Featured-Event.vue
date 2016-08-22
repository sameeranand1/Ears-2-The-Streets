<template>

    <div class="Featured_Event">

        <a href="#"><img :src="event.img" alt="Event"></a>

    </div>

</template>

<script>

    export default
    {
        data()
        {
            return {
                event: 
                { 
                    name: 'Hip-Hop Freestyle Battle',
                    host: 'ears2thestreets.com',
                    date: 'August 9',
                    time: '8 PM',
                    img: 'https://s3.amazonaws.com/ears2thestreets/featured-event.png' 
                }
            }
        }
    }

</script>

<style lang="stylus" scoped>

    .Featured_Event img
        width 100%

</style>