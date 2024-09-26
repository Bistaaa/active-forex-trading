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
            currentIndex: 0
        }
    },
    methods: {
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        getPrevIndex() {
            return (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        getNextIndex() {
            return (this.currentIndex + 1) % this.images.length;
        }
    },
    mounted() {
        setInterval(this.nextImage, 5000);
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
                    <div class="carousel-item active-image">
                        <img :src="images[currentIndex]" alt="Current review image">
                    </div>
                    <!-- Immagine destra (successiva) -->
                    <div class="carousel-item next-image">
                        <img :src="images[getNextIndex()]" alt="Next review image">
                    </div>
                </div>
                <button @click="prevImage" class="carousel-control prev">‹</button>
                <button @click="nextImage" class="carousel-control next">›</button>
            </div>
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
        margin-bottom: 60px;
    }

    #trustpilot-img-container {
        height: 60px;
        margin-bottom: 80px;

        #trustpilot-img {
            height: 100%;
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
                align-items: center;
                gap: 20px;
                padding: 30px;
                width: 100%;
            }

            .carousel-item {
                width: 30%;
                transition: opacity 1s ease-in-out;

                img {
                    width: 100%;
                    height: auto;
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
            }

            .carousel-control {
                background: rgba(0, 0, 0, 0.5);
                border: none;
                color: white;
                font-size: 2rem;
                padding: 10px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
                z-index: 1;

                &.prev {
                    left: 10px;
                }

                &.next {
                    right: 10px;
                }
            }
        }
    }
}
</style>
