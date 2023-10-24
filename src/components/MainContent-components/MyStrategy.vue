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
            <h2>LA NOSTRA STRATEGIA VINCENTE</h2>
            <div id="strategy-description-container">
                <div class="neon-border" id="left-description-container">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h3>STOPPARE LE PERDITE SUL NASCERE E LASCIAR CORRERE I PROFITTI</h3>
                    <p>La nostra strategia si basa sul motto "STOPPARE LE PERDITE SUL NASCERE E LASCIAR CORRERE I PROFITTI".
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
                    <h3>UNICA STRATEGIA ADATTA ANCHE A CONTI MEDIO PICCOLI</h3>
                    <p>La caratteristica distintiva della nostra strategia è il suo adattamento anche ai conti
                        medio-piccoli,
                        grazie agli stop loss stretti che permettono draw-down minimi evitando perdite significative, al
                        contrario di molti trader che non usano stop-loss e ti fanno bruciare il conto.
                    </p>
                </div>
            </div>
            <div class="vip-button-container">
                <button class="vip-button" @click="ShowForm">Sblocca gratis Gruppo VIP</button>
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

        h2 {
            text-align: center;
            font-size: 60px;
            margin-bottom: 150px;
            color: #000000;
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

                h3 {
                    font-size: 35px;
                    text-align: center;
                    margin-bottom: 30px;
                }

                p {
                    font-size: 23px;
                    text-align: justify;
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

                h3 {
                    font-size: 35px;
                    text-align: center;
                    margin-bottom: 30px;
                }

                p {
                    font-size: 23px;
                    text-align: justify;
                }
            }
        }
    }
}
</style>