<script>
export default {
    name: 'Reviews',
    data() {
        return {
            images: [
                '/img/trustpilot-reviews/review-1.png',
                '/img/trustpilot-reviews/review-2.png',
                '/img/trustpilot-reviews/review-3.png',
                '/img/trustpilot-reviews/review-4.png',
                '/img/trustpilot-reviews/review-5.png',
                '/img/trustpilot-reviews/review-6.png',
                '/img/trustpilot-reviews/review-7.png',
                '/img/trustpilot-reviews/review-8.png',
            ],
            currentIndex: 0,
            intervalId: null, // Aggiungi una proprietà per l'ID dell'intervallo
            isFullscreen: false,
        }
    },

    methods: {

        startInterval() {
            this.intervalId = setInterval(this.nextImage, 5000); // Inizializza l'intervallo
        },
        stopInterval() {
            clearInterval(this.intervalId); // Ferma l'intervallo
        },

        nextImage() {
            this.stopInterval(); // Ferma l'intervallo prima di cambiare immagine
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            this.startInterval(); // Riavvia l'intervallo
        },
        prevImage() {
            this.stopInterval(); // Ferma l'intervallo prima di cambiare immagine
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            this.startInterval(); // Riavvia l'intervallo
        },

        getPrevIndex() {
            return (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        getNextIndex() {
            return (this.currentIndex + 1) % this.images.length;
        },

        openFullscreen() {
            this.stopInterval(); // Ferma l'intervallo quando si apre il fullscreen
            this.isFullscreen = true; // Attiva la modalità a schermo intero
        },
        closeFullscreen() {
            this.isFullscreen = false; // Disattiva la modalità a schermo intero
            this.startInterval(); // Riavvia l'intervallo quando si chiude il fullscreen
        },

        leaveReview() {
            const reviewUrl = "https://it.trustpilot.com/review/www.activeforextrading.it";
            window.open(reviewUrl, '_blank');
        },
    },

    mounted() {
        this.startInterval(); // Avvia l'intervallo al montaggio del componente
    },

    beforeDestroy() {
        this.stopInterval(); // Ferma l'intervallo quando il componente viene distrutto
    }
}
</script>


<template>
    <div id="reviews-container">
        <h2 id="reviews-title">ECCO COSA PENSANO DI NOI</h2>
        <div id="trustpilot-img-container">
            <img src="../../assets/img/trustpilot-logo-white.svg" id="trustpilot-img" alt="">
        </div>
        <div id="review-carousel-container">
            <div class="carousel">
                <div class="carousel-inner">
                    <!-- Immagine sinistra (precedente) -->
                    <div class="carousel-item prev-image">
                        <img :src="images[getPrevIndex()]" alt="Previous review image">
                    </div>
                    <!-- Immagine centrale (attuale) -->
                    <div class="carousel-item active-image" @click="openFullscreen">
                        <img :src="images[currentIndex]" alt="Current review image">
                    </div>
                    <!-- Immagine destra (successiva) -->
                    <div class="carousel-item next-image">
                        <img :src="images[getNextIndex()]" alt="Next review image">
                    </div>
                </div>

                <button @click="prevImage" class="carousel-control prev"><font-awesome-icon
                        icon="fa-solid fa-chevron-left" /></button>
                <button @click="nextImage" class="carousel-control next"><font-awesome-icon
                        icon="fa-solid fa-chevron-right" /></button>
            </div>
        </div>

        <div v-if="isFullscreen" class="fullscreen-modal" @click="closeFullscreen">
            <img :src="images[currentIndex]" class="fullscreen-image" alt="Fullscreen review image">
        </div>

        <div id="bottom-section">
            <span id="leave-review-title">Fai parte del nostro gruppo?</span>
            <span id="leave-review-button" @click="leaveReview">Lascia una recensione</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
#reviews-container {
    background-color: #111111;
    padding: 100px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    #reviews-title {
        color: #fff;
        font-size: 65px;
        text-align: center;
        text-decoration: underline;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 601px) {

        #reviews-title {
            font-size: 50px;
        }
    }

    @media screen and (max-width: 401px) {

        #reviews-title {
            font-size: 40px;
        }
    }

    #trustpilot-img-container {
        height: 60px;
        margin-bottom: 70px;

        #trustpilot-img {
            height: 100%;
        }
    }

    @media screen and (max-width: 1399px) {

        #trustpilot-img-container {
            margin-bottom: 20px;
        }
    }

    @media screen and (max-width: 1099px) {

        #trustpilot-img-container {
            margin-bottom: 70px;
        }
    }

    @media screen and (max-width: 999px) {

        #trustpilot-img-container {
            margin-bottom: 20px;
        }
    }

    @media screen and (max-width: 601px) {

        #trustpilot-img-container {
            height: 45px;
            margin-bottom: 0;
        }
    }

    @media screen and (max-width: 601px) {

        #trustpilot-img-container {
            height: 40px;
            margin-bottom: 0;
        }
    }

    #review-carousel-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 400px;
        padding: 30px 0;
        overflow: hidden;

        .carousel {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            .carousel-inner {
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 20px;
                padding: 30px;
                width: 100%;
            }

            @media screen and (max-width: 1099px) {

                .carousel-inner {
                    flex-direction: column;
                }
            }

            @media screen and (max-width: 501px) {

                .carousel-inner {
                    gap: 0;
                    padding: 0;
                }
            }

            .carousel-item {
                width: 30%;
                transition: opacity 1s ease-in-out;

                img {
                    width: 100%;
                    height: auto;
                }
            }

            @media screen and (max-width: 1299px) {

                .carousel-item {
                    width: 25%;
                }
            }

            @media screen and (max-width: 1099px) {

                .carousel-item {
                    width: 40%;
                }
            }

            @media screen and (max-width: 999px) {

                .carousel-item {
                    width: 45%;
                }
            }

            @media screen and (max-width: 799px) {

                .carousel-item {
                    width: 60%;
                }
            }

            @media screen and (max-width: 699px) {

                .carousel-item {
                    width: 70%;
                }
            }

            @media screen and (max-width: 601px) {

                .carousel-item {
                    width: 80%;
                }
            }

            @media screen and (max-width: 501px) {

                .carousel-item {
                    width: 90%;
                }
            }

            .prev-image {
                opacity: 0.5;
                transform: scale(0.8);
            }

            .next-image {
                opacity: 0.5;
                transform: scale(0.8);
            }

            .active-image {
                width: 40%;
                opacity: 1;
                transform: scale(1);
                cursor: pointer;
            }

            @media screen and (max-width: 1299px) {

                .active-image {
                    width: 50%;
                }
            }

            @media screen and (max-width: 1099px) {

                .active-image {
                    width: 60%;
                }
            }

            @media screen and (max-width: 999px) {

                .active-image {
                    width: 70%;
                }
            }

            @media screen and (max-width: 799px) {

                .active-image {
                    width: 85%;
                }
            }

            @media screen and (max-width: 601px) {

                .active-image {
                    width: 95%;
                }
            }

            @media screen and (max-width: 501px) {

                .active-image {
                    width: 100%;
                }
            }

            .carousel-control {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                font-size: 30px;
                position: absolute;
                display: block;
                top: 50%;
                transform: translateY(-50%);
                padding: 10px;
                cursor: pointer;
                z-index: 1;
                transition: all 0.2s ease;

                &.prev {
                    left: 0px;
                }

                &.next {
                    right: 0px;
                }

                &:active {
                    transform: translateY(-50%) scale(0.8);
                }
            }

            @media screen and (max-width: 1099px) {

                .carousel-control {
                    display: none;
                }
            }
        }

        @media screen and (max-width: 1099px) {

            .carousel {
                height: 100%;
            }
        }
    }

    @media screen and (max-width: 1399px) {

        #review-carousel-container {
            padding: 0;
        }
    }

    @media screen and (max-width: 1099px) {

        #review-carousel-container {
            height: 800px;
        }
    }

    @media screen and (max-width: 501px) {

        #review-carousel-container {
            height: 700px;
        }
    }

    @media screen and (max-width: 401px) {

        #review-carousel-container {
            height: 600px;
        }
    }

    @media screen and (max-width: 351px) {

        #review-carousel-container {
            height: 500px;
        }
    }

    /* Stili per la modal a schermo intero */
    .fullscreen-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(128, 128, 128, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .fullscreen-image {
        width: 50%;
        height: auto;
    }

    @media screen and (max-width: 1399px) {

        .fullscreen-image {
            width: 70%;
        }
    }

    @media screen and (max-width: 999px) {

        .fullscreen-image {
            width: 85%;
        }
    }

    @media screen and (max-width: 601px) {

        .fullscreen-image {
            width: 100%;
        }
    }

    #bottom-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        color: #fff;
        margin-top: 50px;

        #leave-review-title {
            font-size: 30px;
        }

        @media screen and (max-width: 401px) {

            #leave-review-title {
                font-size: 25px;
            }
        }

        #leave-review-button {
            font-size: 25px;
            background-color: transparent;
            border: 2px solid #fff;
            border-radius: 100px;
            padding: 8px 20px 10px;
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
                background-color: #04da8d;
                border: 2px solid #000;
                color: #000;
            }

            &:active {
                transform: scale(0.9)
            }
        }

        @media screen and (max-width: 801px) {

            #leave-review-button {
                background-color: #04da8d;
                border: 2px solid #000;
                color: #000;
            }
        }

        @media screen and (max-width: 401px) {

            #leave-review-button {
                font-size: 20px;
            }
        }
    }

    @media screen and (max-width: 1399px) {

        #bottom-section {
            margin-top: 20px;
        }
    }

    @media screen and (max-width: 1099px) {

        #bottom-section {
            margin-top: 70px;
        }
    }

    @media screen and (max-width: 999px) {

        #bottom-section {
            margin-top: 40px;
        }
    }

    @media screen and (max-width: 601px) {

        #bottom-section {
            margin-top: 0;
        }
    }
}

@media screen and (max-width: 1499px) {

    #reviews-container {
        padding: 100px 5%;
    }
}
</style>
