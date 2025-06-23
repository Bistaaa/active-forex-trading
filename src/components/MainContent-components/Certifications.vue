<script>
export default {
    name: 'Certifications',
    data() {
        return {
            currentIndex: 0,
            certificates: ['certificate1.jpg', 'certificate2.jpg'], // Solo i nomi delle immagini
            isFullScreen: false, // Stato per controllare la modalità a schermo intero
            intervalId: null, // Per gestire il timer del carosello
        };
    },
    methods: {
        nextCertificate() {
            this.currentIndex = (this.currentIndex + 1) % this.certificates.length;
        },
        toggleFullScreen(index) {
            this.isFullScreen = !this.isFullScreen;
            if (this.isFullScreen) {
                this.currentIndex = index; // Imposta l'immagine corrente quando si apre
                clearInterval(this.intervalId); // Ferma il timer
            } else {
                this.startAutoAdvance(); // Riavvia il timer quando si chiude
            }
        },
        startAutoAdvance() {
            // Avvia il timer per il carosello
            this.intervalId = setInterval(() => {
                this.nextCertificate();
            }, 5000);
        },
    },
    mounted() {
        this.startAutoAdvance(); // Avvia il timer all'avvio del componente
    },
    beforeDestroy() {
        clearInterval(this.intervalId); // Pulisce il timer quando il componente viene distrutto
    },
};
</script>

<template>
    <div id="certifications-container">
        <div id="certifications-content-container">
            <p class="category-icon">
                <font-awesome-icon icon="fa-solid fa-certificate" />
            </p>
            <h2 id="certifications-title">I MIEI CERTIFICATI</h2>
            <h3 id="second-certifications-title">Le mie qualifiche come istruttore finanziario</h3>
            <div id="carousel-container">
                <div class="carousel">
                    <div v-for="(image, index) in certificates" :key="index" class="certificate-slide"
                        :class="{ active: index === currentIndex }" @click="toggleFullScreen(index)">
                        <img :src="'img/' + image" class="certificate-image" :alt="'Certificato ' + (index + 1)" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Overlay a schermo intero -->
        <div v-if="isFullScreen" class="fullscreen-overlay" @click="toggleFullScreen">
            <img :src="'img/' + certificates[currentIndex]" class="fullscreen-image"
                :alt="'Certificato ' + (currentIndex + 1)" />
        </div>
    </div>
</template>

<style scoped lang="scss">
#certifications-container {
    /* background-image: url(../../assets/img/background-certifications.jpg); */
    background-size: cover;
    width: 100%;
    padding: 50px 0;
    position: relative;

    #certifications-content-container {
        width: 100%;
        padding: 50px 10%;
        background-color: rgba($color: #ffffff, $alpha: 0.7);
        text-align: center;

        #certifications-title {
            font-size: 60px;
            margin-bottom: 10px;
            color: #000000;
            text-decoration: underline;
        }

        #second-certifications-title {
            font-size: 40px;
            margin-bottom: 50px;
            color: #000000;
        }

        @media screen and (max-width: 601px) {
            #certifications-title {
                font-size: 40px;
            }

            #second-certifications-title {
                font-size: 25px;
                margin-bottom: 30px;
            }
        }

        #carousel-container {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            overflow: hidden;

            .carousel {
                position: relative;
                width: 100%;
                height: 400px;

                .certificate-slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                    cursor: pointer;

                    &.active {
                        opacity: 1;
                        z-index: 1;
                    }

                    .certificate-image {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        /* border: 2px solid #000; */
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }
                }

                @media screen and (max-width: 601px) {
                    height: 250px;
                }
            }
        }
    }

    .fullscreen-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;

        .fullscreen-image {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border: 2px solid #000;
            border-radius: 10px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
    }
}
</style>