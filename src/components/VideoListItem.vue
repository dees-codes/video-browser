<template>
    <li class="list-group-item">
        {{ video.snippet.title }}
    </li>
</template>

<script>
export default {
    name: 'videoListItem',
    props: ['video']
}
</script>

<style>
</style>