<template>
    <!-- App.vue is the brains of our applicaiton. -->
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList :videos="videos"></VideoList>
    </div>
</template>

<script>
//App.vue is the brains of our app. Coordinates all the different components in our app.
//First change from mini mac.
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
const API_KEY = 'AIzaSyD3ms9I33HQfwD0-g6vGSqVweQ_Jc6Dhug';
const random = "to delete";

export default {
    name: 'App',
    // Updating data causes App to rerender and all the child components within App component to re-render as well.
    // Use data as function, not as object.
    data() {
        return { videos: [] };
    },
    components: {
        SearchBar,
        VideoList
    },
    methods: {
        onTermChange(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => {
                this.videos = response.data.items;
            });
        }
    }
};
</script>