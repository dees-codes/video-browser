<template>
    <!-- key enhances the performance of re-rendering our list of items; value in key is something unique and individual to each item -->
    <ul class="list-group">
        <VideoListItem 
            v-for="video in videos" 
            :video="video"
            :key="video.etag"
        >
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
    name: 'VideoList',
    props: {
        videos: Array
    },
    components: {
        VideoListItem
    }
};
</script>

<style>
</style>