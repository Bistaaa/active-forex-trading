<script>
import { handleVipButtonClick } from '../../main.js';

export default {
    name: 'BestTrades',
    data() {
        return {
            images: [
                'trade-01.jpg',
                'trade-02.jpg',
                'trade-03.jpg',
                'trade-04.jpg',
                'trade-05.jpg',
                'trade-06.jpg',
                'trade-07.jpg',
                'trade-08.jpg',
                'trade-09.jpg',
                'trade-10.jpg',
                'trade-11.jpg',
                'trade-12.jpg',
                'trade-13.jpg',
                'trade-14.jpg',
                'trade-15.jpg',
                'trade-16.jpg',
                'trade-17.jpg',
                'trade-18.jpg',
                'trade-19.jpg',
                'trade-20.jpg',

            ],
            showLargeImage: false,
            largeImage: '',
        };
    },

    methods: {
        openImage(image) {
            this.largeImage = image;
            this.showLargeImage = true;
        },
        closeImage() {
            this.showLargeImage = false;
        },
        ShowForm() {

            handleVipButtonClick();
        },
    },
}
</script>

<template>
    <div id="best-trades-container">
        <p class="category-icon">
            <font-awesome-icon icon="fa-solid fa-chart-line" />
        </p>
        <h2 id="best-trades-title">I MIGLIORI TRADE DELL'ANNO</h2>
        <div id="trades-container">
            <div class="single-trade-container" v-for="(image, index) in images" :key="index">
                <div class="trade-image-container">
                    <img :src="'src/assets/img/best-trades/' + image" class="trades-image" alt="Trade Image" />
                    <div class="trades-image-overlay-container" @click="openImage(image)">
                        <img src="../../assets/img/overlays/Overlay-60.png" class="trades-image-overlay" alt="">
                        <span class="trades-image-overlay-text">VISUALIZZA <br> A SCHERMO INTERO</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="vip-button-container">
            <button class="vip-button" @click="ShowForm">Sblocca gratis il gruppo Elite</button>
        </div>

        <!-- Visualizza l'immagine ingrandita -->
        <div v-if="showLargeImage" class="large-image-container">
            <img :src="'src/assets/img/best-trades/' + largeImage" class="large-image" alt="Large Image" />
            <button class="close-trade-button" @click="closeImage">&#10006;</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
#best-trades-container {
    background-color: #ECC01B;
    padding: 100px 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    #best-trades-title {
        color: #000000;
        font-size: 65px;
        text-align: center;
        text-decoration: underline;
        margin-bottom: 70px;
    }

    @media screen and (max-width: 601px) {
        #best-trades-title {
            font-size: 45px;
        }
    }

    #trades-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 80px;

        .single-trade-container {
            width: calc(100% / 4);
            padding: 10px;

            .trade-image-container {
                width: 100%;
                padding-top: calc(9 / 16 * 100%);
                overflow: hidden;
                position: relative;
                transition: transform 0.3s;

                &:hover {
                    transform: scale(1.05);
                }

                .trades-image {
                    background-size: cover;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 110%;
                    z-index: 5;
                    cursor: pointer;
                }

                .trades-image-overlay-container {
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

                    .trades-image-overlay {
                        width: 100%;
                        z-index: 7;
                    }

                    .trades-image-overlay-text {
                        text-align: center;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 1em;
                        font-weight: bold;
                        color: #ffffff;
                    }

                    @media screen and (max-width: 601px) {
                        .trades-image-overlay-text {
                            font-size: 13px;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 601px) {
            .single-trade-container {
                width: calc(100% / 2);
            }
        }
    }

    .large-image-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
    }

    .large-image {
        max-width: 80vw;
        max-height: 80vh;
    }

    @media screen and (max-width: 901px) {
        .large-image {
            max-width: 100vw;
            max-height: 100vh;
        }
    }

    .close-trade-button {
        position: absolute;
        top: 25px;
        right: 30px;
        background: none;
        border: none;
        font-size: 35px;
        color: #FF0000;
        cursor: pointer;
        outline: none;
        padding: 0;
        z-index: 21;

        &:hover {
            color: #ffffff;
        }
    }
}

@media screen and (max-width: 901px) {
    #best-trades-container {
        padding: 100px 5%;
    }
}
</style>