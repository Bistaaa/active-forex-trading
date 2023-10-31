<script>
export default {
    name: 'MyVideos',
    data() {

    },
    methods: {

    },
}
</script>

<template>
    <div id="my-videos-container">
        <span class="category-icon">
            <font-awesome-icon icon="fa-solid fa-video" />
        </span>
        <h2>I MIEI VIDEO SUL TRADING</h2>
        <div id="videos-container">

        </div>
    </div>
</template>

<style scoped lang="scss">
#my-videos-container {
    background-color: #ffffff;
    padding: 100px 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: #000000;
        font-size: 65px;
        text-align: center;
        text-decoration: underline;
        margin-bottom: 30px;
    }

    #videos-container {}
}
</style>