<script>
export default {
    name: 'Shop',
    data() {
        return {
            selectedProduct: null,
            products: [
                {
                    id: 1,
                    title: 'Lezione privata "ONE-TO ONE"',
                    image: 'one-to-one.jpg',
                    description: 'Videolezione privata "ONE TO ONE" personalizzata in base al vostro grado di conoscenza del Trading su Meet o Zoom con possibilità di registrazione per poterla rivedere tutte le volte che vorrai.',
                    paymentLink: 'https://buy.stripe.com/28EcN7fEw57jbMf8SV43S0c',
                    price: '€1497,00',
                },
                {
                    id: 2,
                    title: 'PACCHETTO "BOOST PACK"',
                    image: 'boost-pack.jpeg',
                    description: 'contenuto pacchetto "Boost Pack": INDICATORE KEY-LEVEL - CORSO TRADING - EBOOK - FULL IMMERSION - ACCESSO A TRADING-ROOM - COPYTRADING - BIDIRECTIONAL MAP - 2 ANALISI LIVE A SETTIMANA - T-SHIRT - BOOTCAMP - SERVIZIO PORTA UN AMICO - WHACH LIST SU TRADINGVIEW',
                    paymentLink: 'https://buy.stripe.com/5kQ4gB2RK8jv2bF7OR43S04',
                    price: '€597,00',
                },
                {
                    id: 3,
                    title: 'PACCHETTO "BUSINESS PACK"',
                    image: 'business-pack.jpeg',
                    description: 'IL PACCHETTO "BUSINESS PACK" COMPRENDE: Tutto il Pacchetto "Boost pack" e in più: -Formazione "ONE TO ONE" e Chat privata con Riccardo (una giornata di trading in diretta insieme)',
                    paymentLink: 'https://buy.stripe.com/00wdRbfEw8jv8A31qt43S05',
                    price: '€897,00',
                },
                {
                    id: 4,
                    title: '"I segreti della mia Strategia"',
                    image: 'corso1.jpeg',
                    description: 'Corso di Trading "I segreti della mia Strategia" composto da 3 video da circa 1 ora ciascuno scaricabile e rivedibile in qualunque momento',
                    paymentLink: 'https://buy.stripe.com/aFabJ3bogarDeYrd9b43S0e',
                    price: '€497,00',
                },
                {
                    id: 5,
                    title: '"I segreti della mia strategia" + "Full Immersion"',
                    image: 'corso1.jpeg',
                    description: 'Corso di Trading "I segreti della mia strategia" + "Full Immersion" costituiti da altri 17 video di approfondimento del corso base.',
                    paymentLink: 'https://buy.stripe.com/dRm6oJeAs8jvg2vb1343S0g',
                    price: '€797,00',
                },
                {
                    id: 6,
                    title: 'Indicatore "Active Forex Key-level"',
                    image: 'indicatore.jpeg',
                    description: 'Indicatore che si aggancia alla MT4 che ti segnala con un alert quando il prezzo di un asset raggiunge potenziali livelli di ingresso a mercato.',
                    paymentLink: 'https://buy.stripe.com/14AeVf8c40R36rV8SV43S0b',
                    price: '€497,00',
                },
                {
                    id: 7,
                    title: 'ABBONAMENTO 1 MESE A TRADING-ROOM',
                    image: 'abbonamento1.png',
                    description: 'Abbonamento per 1 mese alla nostra esclusiva trading-room',
                    paymentLink: 'https://buy.stripe.com/bJeeVf3VOdDP5nRgln43S06',
                    price: '€90,00/mese',
                },
                {
                    id: 8,
                    title: 'ABBONAMENTO 3 MESI A TRADING-ROOM',
                    image: 'abbonamento3.png',
                    description: 'Abbonamento per 3 mesi alla nostra esclusiva trading-room',
                    paymentLink: 'https://buy.stripe.com/bJe4gB0JCczL5nRgln43S08',
                    price: '€250,00/3 mesi',
                },
                {
                    id: 9,
                    title: 'ABBONAMENTO 6 MESI A TRADING-ROOM',
                    image: 'abbonamento6.png',
                    description: 'Abbonamento per 6 mesi alla nostra esclusiva trading-room',
                    paymentLink: 'https://buy.stripe.com/dRm4gB2RK43f5nR1qt43S09',
                    price: '€400,00/6 mesi',
                },
                {
                    id: 10,
                    title: 'ABBONAMENTO "LIFE-TIME" ALLA TRADING-ROOM',
                    image: 'abbonamento-life.png',
                    description: 'Abbonamento "LIFE-TIME" (senza scadenza) alla nostra esclusiva trading-room',
                    paymentLink: 'https://buy.stripe.com/28EbJ3dwo7fr5nRb1343S0a',
                    price: '€700,00',
                },
                {
                    id: 11,
                    title: 'Libro cartaceo "Dalle Basi alla mia Strategia"',
                    image: 'book.jpeg',
                    description: 'Libro in versione cartacea "Dalle basi alla mia strategia - Stoppare le perdite sul nascere e lasciar correre i profitti"',
                    paymentLink: 'https://buy.stripe.com/7sY7sN1NG0R35nRd9b43S0d',
                    price: '€28,00',
                },
                {
                    id: 12,
                    title: 'T-Shirt "Active Forex Trading"',
                    image: 'tshirt.png',
                    description: 'T-Shirt del gruppo "Active Forex Trading"',
                    paymentLink: 'https://buy.stripe.com/aFa7sNbog7frg2vedf43S0f',
                    price: '€22,00',
                },
            ],
        };
    },
    methods: {
        openModal(product) {
            this.selectedProduct = product;
        },
        closeModal() {
            this.selectedProduct = null;
        },
    },
};
</script>

<template>
    <div id="shop-container">
        <div id="shop-content-container">
            <h2 id="shop-title">IL NOSTRO SHOP</h2>
            <h3 id="second-shop-title">Scopri i nostri prodotti dedicati al trading</h3>
            <div class="products-grid">
                <div v-for="product in products" :key="product.id" class="product-card">
                    <h3 class="product-title">{{ product.title }}</h3>
                    <div class="product-image-container">
                        <img :src="'img/shop/' + product.image" class="product-image" :alt="product.title" />
                        <div class="product-image-overlay" @click="openModal(product)">
                            <span>Maggiori informazioni</span>
                        </div>
                    </div>
                    <p class="product-price">{{ product.price }}</p>
                    <a :href="product.paymentLink" class="buy-button" target="_blank">Acquista</a>
                </div>
            </div>
        </div>

        <!-- Modale -->
        <div v-if="selectedProduct" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <h2 class="modal-title">{{ selectedProduct.title }}</h2>
                <img :src="'img/shop/' + selectedProduct.image" class="modal-image" :alt="selectedProduct.title" />
                <p class="modal-description">{{ selectedProduct.description }}</p>
                <p class="modal-price">{{ selectedProduct.price }}</p>
                <a :href="selectedProduct.paymentLink" class="buy-button" target="_blank">Acquista</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#shop-container {
    background-image: url(../../assets/img/background-shop.jpg);
    background-size: cover;
    width: 100%;

    #shop-content-container {
        width: 100%;
        padding: 100px 10%;
        background-color: rgba($color: #ffffff, $alpha: 0.7);
        text-align: center;

        @media (max-width: 899px) {
            padding: 100px 5%;
        }

        #shop-title {
            font-size: 60px;
            margin-bottom: 10px;
            color: #000000;
            text-decoration: underline;
        }

        #second-shop-title {
            font-size: 40px;
            margin-bottom: 80px;
            color: #000000;
        }

        @media screen and (max-width: 601px) {
            #shop-title {
                font-size: 40px;
            }

            #second-shop-title {
                font-size: 25px;
                margin-bottom: 30px;
            }
        }

        .products-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;

            .product-card {
                width: 300px;
                background-color: #fff;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                transition: transform 0.3s;

                &:hover {
                    transform: scale(1.05);
                }

                .product-title {
                    font-size: 18px;
                    margin-bottom: 15px;
                    color: #000;
                    text-transform: uppercase;
                    min-height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    line-height: 1.4;
                }

                .product-image-container {
                    position: relative;
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    border-radius: 10px;

                    .product-image {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .product-image-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.5);
                        backdrop-filter: blur(3px);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        opacity: 0;
                        transition: opacity 0.3s;
                        cursor: pointer;

                        span {
                            color: #fff;
                            font-size: 18px;
                            font-weight: bold;
                            text-align: center;
                        }
                    }

                    &:hover .product-image-overlay {
                        opacity: 1;
                    }
                }

                .product-price {
                    font-size: 20px;
                    font-weight: bold;
                    color: #000;
                    margin: 15px 0;
                }

                .buy-button {
                    display: block;
                    padding: 10px;
                    background-color: #ECC01B;
                    color: #000;
                    text-decoration: none;
                    border-radius: 5px;
                    text-align: center;
                    transition: background-color 0.3s;

                    &:hover {
                        background-color: #ad8c15;
                    }
                }
            }

            @media screen and (max-width: 601px) {
                .product-card {
                    width: 100%;
                    max-width: 300px;
                }
            }
        }
    }

    /* Stile per il modale */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;

        .modal-content {
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            text-align: center;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

            .modal-title {
                font-size: 28px;
                margin-bottom: 15px;
                color: #000;
            }

            .modal-image {
                max-width: 100%;
                max-height: 300px;
                object-fit: contain;
                border-radius: 10px;
                margin-bottom: 15px;
            }

            .modal-description {
                font-size: 16px;
                margin-bottom: 20px;
                color: #333;
                text-align: justify;
            }

            .modal-price {
                font-size: 20px;
                font-weight: bold;
                color: #000;
                margin-bottom: 20px;
            }

            .buy-button {
                display: inline-block;
                padding: 10px 40px;
                background-color: #ECC01B;
                color: #000;
                text-decoration: none;
                border-radius: 5px;
                transition: background-color 0.3s;

                &:hover {
                    background-color: #ad8c15;
                }
            }
        }
    }
}
</style>