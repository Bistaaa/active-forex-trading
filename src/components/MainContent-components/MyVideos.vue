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
}
</script>

<template>
    <div id="my-videos-overall-container">
        <div id="my-videos-content-container">
            <p class="category-icon">
                <font-awesome-icon icon="fa-solid fa-video" />
            </p>
            <h2 id="my-videos-title">I MIEI ULTIMI VIDEO</h2>
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
            <a href="https://calendar.app.google/K3eBKpJxMUR9BAM27" target="_blank">
                <div id="calendar-button">Prenota la tua consulenza gratuita</div>
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
#my-videos-overall-container {
    background-image: url(../../assets/img/laptop-background.png);
    background-size: cover;
    width: 100%;

    #my-videos-content-container {
        background-color: rgba($color: #ffffff, $alpha: 0.7);
        width: 100%;
        height: 100%;
        padding: 100px 10%;
        display: flex;
        flex-direction: column;
        align-items: center;

        #my-videos-title {
            color: #000000;
            font-size: 65px;
            text-align: center;
            text-decoration: underline;
            margin-bottom: 30px;
        }

        @media screen and (max-width: 601px) {
            #my-videos-title {
                font-size: 50px;
            }
        }

        #videos-container {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 50px;

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

                @media screen and (max-width: 901px) {
                    .video-title-container {
                        margin-top: 10px;
                        font-size: 16px;
                    }
                }

                @media screen and (max-width: 901px) {
                    .video-title-container {
                        margin-top: 5px;
                        font-size: 13px;
                    }
                }
            }

            @media screen and (max-width: 901px) {
                .single-video-container {
                    width: calc(100% / 3);
                }
            }

            @media screen and (max-width: 601px) {
                .single-video-container {
                    width: calc(100% / 2);
                    padding: 15px 10px;
                }
            }
        }

        #calendar-button {
            background-color: #ECC01B;
            font-size: 18px;
            letter-spacing: 2px;
            text-transform: uppercase;
            display: inline-block;
            text-align: center;
            font-weight: bold;
            padding: 0.7em 2em;
            border: 3px solid #000000;
            border-radius: 2px;
            position: relative;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
            color: #000000;
            text-decoration: none;
            transition: 0.3s ease all;
            margin-top: 20px;
            z-index: 1;
            animation: bouncy 3s infinite linear;

            @keyframes bouncy {
                0% {
                    top: 0em;
                }

                3% {
                    top: -0.9em;
                }

                6% {
                    top: 0em;
                }

                9% {
                    top: -0.4em;
                }

                12% {
                    top: 0em;
                }

                100% {
                    top: 0em;
                }
            }

            &:before {
                transition: 0.5s all ease;
                position: absolute;
                top: 0;
                left: 50%;
                right: 50%;
                bottom: 0;
                opacity: 0;
                content: '';
                background-color: #ffffff;
                z-index: -1;
            }

            &:hover,
            &:focus {
                color: #000000;
                border: 3px solid #000000;

                &:before {
                    transition: 0.5s all ease;
                    left: 0;
                    right: 0;
                    opacity: 1;
                }
            }

            &:active {
                transform: scale(0.9);
            }
        }
    }

    @media screen and (max-width: 901px) {
        #my-videos-content-container {
            padding: 100px 5%;
        }
    }
}
</style>