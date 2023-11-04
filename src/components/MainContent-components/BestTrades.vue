<script>
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
    },
}
</script>

<template>
    <div id="best-trades-container">
        <p class="category-icon-black">
            <font-awesome-icon icon="fa-solid fa-chart-line" />
        </p>
        <h2>I MIGLIORI TRADE DELL'ANNO</h2>
        <div id="trades-container">
            <div class="single-trade-container" v-for="(image, index) in images" :key="index">
                <div class="trade-image-container">
                    <img :src="'src/assets/img/best-trades/' + image" class="trades-images" alt="Trade Image"
                        @click="openImage(image)" />
                </div>
            </div>
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

    h2 {
        color: #000000;
        font-size: 65px;
        text-align: center;
        text-decoration: underline;
        margin-bottom: 70px;
    }

    #trades-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .single-trade-container {
            width: calc(100% / 4);
            padding: 10px;

            .trade-image-container {
                width: 100%;
                padding-top: calc(9 / 16 * 100%);
                overflow: hidden;
                position: relative;

                .trades-images {
                    background-size: cover;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 105%;
                    z-index: 5;
                    cursor: pointer;
                    /* Aggiungi il cursore mano quando si passa sopra l'immagine */
                }
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

    .close-trade-button {
        position: absolute;
        top: 25px;
        right: 30px;
        background: none;
        border: none;
        font-size: 35px;
        color: #ffffff;
        cursor: pointer;
        outline: none;
        padding: 0;

        &:hover {
            color: #FF0000;
        }
    }
}
</style>