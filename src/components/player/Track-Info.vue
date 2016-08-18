<template>

    <div class="Track_Info">

        <h4 class="Album">{{ currentTrack.album }}</h4>

        <h4 class="Track">{{ currentTrack.name }}</h4>

        <h4 class="Artists">{{ currentTrack.artist }}</h4>

    </div>

</template>

<script>

    export default
    {
        props: [ 'currentTrack' ]
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Track_Info
        padding 10px 15px
        text-align center

    .Track_Info .Album
        color #292A32
        font-family inherit
        font-size 14px
        font-weight bold
        margin-bottom 12px
        text-transform uppercase

    .Track_Info .Track,
    .Track_Info .Artists
        color #8E8F98
        font-family inherit
        font-weight normal

    .Track_Info .Track
        font-size 14px
        margin-bottom 8px

    .Track_Info .Artists
        font-size 13px

</style>