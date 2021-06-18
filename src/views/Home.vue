<template>
<div class="home container">
    <job-item></job-item>
    <job-item></job-item>
    <job-item></job-item>
    <job-item></job-item>
</div>
</template>

<script>
import JobItem from '../components/JobItem.vue'

export default {
    name: 'Home',
    components: {
        JobItem
    }
}
</script>
