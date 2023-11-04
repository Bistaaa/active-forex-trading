<script>
export default {
    name: 'MyVideos',
    data() {
        return {
            videos: []
        }
    },

    mounted() {

        //API YouTube
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCb1ZKE1eay_VPglsP0Xp7EQ&maxResults=12&order=date&key=AIzaSyB-CVWdt8T-gAE5nyTxSKy32w0UfrbgSe0")
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                console.log(data.items);
                this.videos = data.items;
            })
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
        <h2>I MIEI ULTIMI VIDEO</h2>
        <div id="videos-container">
            <div class="single-video-container" v-for="video in videos" :key="video.id">
                <a :href="'https://www.youtube.com/watch?v=' + video.id.videoId" target="_blank">
                    <div class="video-thumbnail-container">
                        <img :src="video.snippet.thumbnails.high.url" class="video-thumbnail" alt="">
                        <img src="../../assets/img/overlay-video/Overlay-50.png" class="video-thumbnail-overlay" alt="">
                    </div>
                </a>
                <h3 class="video-title-container">{{ video.snippet.title }}</h3>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#my-videos-container {
    background-color: #ffffff;
    padding: 100px 10%;
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

    #videos-container {
        display: flex;
        flex-wrap: wrap;

        .single-video-container {
            width: calc(100% / 4);
            padding: 30px 20px;

            .video-thumbnail-container {
                width: 100%;
                padding-top: calc(9 / 16 * 100%);
                overflow: hidden;
                position: relative;

                .video-thumbnail {
                    background-size: cover;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    z-index: 5;
                }

                .video-thumbnail-overlay {
                    background-size: cover;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 105%;
                    z-index: 6;
                    opacity: 0;
                    transition: opacity 0.3s;
                    cursor: pointer;

                    &:hover {
                        opacity: 1;
                    }
                }
            }

            .video-title-container {
                margin-top: 10px;
            }
        }
    }
}
</style>