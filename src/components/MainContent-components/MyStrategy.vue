<script>
import { handleVipButtonClick } from '../../main.js';

export default {
    name: 'MyStrategy',
    data() {
        return {

        }
    },
    methods: {
        ShowForm() {

            handleVipButtonClick();
        },
    },
}
</script>

<template>
    <div id="mystrategy-container">
        <div id="mystrategy-content-container">
            <p class="category-icon">
                <font-awesome-icon icon="fa-solid fa-bullseye" />
            </p>
            <h2 id="mystrategy-title">LA NOSTRA STRATEGIA VINCENTE</h2>
            <h3 id="second-mystrategy-title">Perchè scegliere Active Forex Trading?</h3>
            <div id="strategy-description-container">
                <div class="neon-border" id="left-description-container">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h3 class="mystrategy-description-title">STOPPARE LE PERDITE SUL NASCERE E LASCIAR CORRERE I PROFITTI
                    </h3>
                    <p class="mystrategy-description-text">La nostra strategia si basa sul motto "STOPPARE LE PERDITE SUL
                        NASCERE E LASCIAR CORRERE I PROFITTI".
                        Impostiamo trade con stop-loss stretti in punti chiave del grafico e take profit medio-lunghi.
                        Questo ci permette di bloccare le perdite e andare in positivo con la prima operazione che parte
                        nella direzione giusta.
                    </p>
                </div>
                <div class="neon-border" id="right-description-container">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h3 class="mystrategy-description-title">UNICA STRATEGIA ADATTA ANCHE A CONTI MEDIO PICCOLI</h3>
                    <p class="mystrategy-description-text">La caratteristica distintiva della nostra strategia è il suo
                        adattamento anche ai conti
                        medio-piccoli,
                        grazie agli stop loss stretti che permettono draw-down minimi evitando perdite significative, al
                        contrario di molti trader che non usano stop-loss e ti fanno bruciare il conto.
                    </p>
                </div>
            </div>
            <div class="vip-button-container">
                <button class="vip-button" @click="ShowForm">Sblocca gratis il gruppo Elite</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#mystrategy-container {
    background-image: url(../../assets/img/20.png);
    background-size: cover;
    width: 100%;

    #mystrategy-content-container {
        width: 100%;
        height: 100%;
        padding: 100px 10%;
        background-color: rgba($color: #ffffff, $alpha: 0.7);

        #mystrategy-title {
            text-align: center;
            font-size: 60px;
            margin-bottom: 10px;
            color: #000000;
            text-decoration: underline;
        }

        @media screen and (max-width: 601px) {

            #mystrategy-title {
                font-size: 50px;
                margin-bottom: 70px;
            }
        }

        #second-mystrategy-title {
            text-align: center;
            font-size: 40px;
            margin-bottom: 150px;
            color: #000000;
        }

        @media screen and (max-width: 601px) {

            #second-mystrategy-title {
                font-size: 25px;
                margin-bottom: 100px;
            }
        }

        #strategy-description-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 100px;
            width: 100%;

            #left-description-container {
                display: flex;
                flex-direction: column;
                width: 40%;
                padding: 40px 25px;
                transition: transform 0.3s;

                &:hover {
                    transform: scale(1.1);
                }

                .mystrategy-description-title {
                    font-size: 35px;
                    text-align: center;
                    margin-bottom: 30px;
                }

                .mystrategy-description-text {
                    font-size: 23px;
                    text-align: justify;
                }

                @media screen and (max-width: 601px) {

                    .mystrategy-description-title {
                        font-size: 25px;
                    }
                }

                @media screen and (max-width: 601px) {

                    .mystrategy-description-text {
                        font-size: 20px;
                    }
                }
            }

            #right-description-container {
                display: flex;
                flex-direction: column;
                width: 40%;
                padding: 40px 25px;
                transition: transform 0.3s;

                &:hover {
                    transform: scale(1.1);
                }

                .mystrategy-description-title {
                    font-size: 35px;
                    text-align: center;
                    margin-bottom: 30px;
                }

                .mystrategy-description-text {
                    font-size: 23px;
                    text-align: justify;
                }

                @media screen and (max-width: 601px) {

                    .mystrategy-description-title {
                        font-size: 25px;
                    }
                }

                @media screen and (max-width: 601px) {

                    .mystrategy-description-text {
                        font-size: 20px;
                    }
                }
            }

            @media screen and (max-width: 901px) {

                #left-description-container,
                #right-description-container {
                    width: 80%;
                }
            }

            @media screen and (max-width: 601px) {

                #left-description-container,
                #right-description-container {
                    width: 100%;
                }
            }
        }

        @media screen and (max-width: 901px) {
            #strategy-description-container {
                align-items: center;
                flex-direction: column;
                gap: 50px;
            }
        }
    }
}
</style>