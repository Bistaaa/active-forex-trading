<script>
import { handleVipButtonClick } from '../../main.js';

export default {
    name: 'PersonalInfo',
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
    <div id="personalinfo-container">
        <p class="category-icon">
            <font-awesome-icon icon="fa-solid fa-user" />
        </p>
        <h2 id="personalinfo-title">CHI SONO</h2>
        <div id="personalinfo-main-content">
            <div id="personalinfo-upper-content">
                <div class="personalinfo-image-container" id="personalinfo-image-container-mobile">
                    <img src="../../assets/img/presentazione.jpg" class="personalinfo-image" alt="">
                </div>
                <p class="personalinfo-text">Sono Riccardo Bistarelli, il fondatore di Active Forex Trading.
                    <br>
                    <br>
                    La mia avventura nel mondo finanziario ha inizio ben 25 anni fa, nel 1998. Durante il mio percorso,
                    ho esplorato diverse sfaccettature degli investimenti, iniziando con le tradizionali operazioni in borsa
                    e successivamente muovendomi nel mondo del Forex e delle opzioni binarie. Alla fine, ho scelto di
                    specializzarmi nel Forex Valutario, nelle materie prime e negli indici.
                    <br>
                    <br>
                    La mia preparazione è il frutto di studi approfonditi in vari campi, tra cui l'analisi tecnica,
                    l'analisi ciclica e l'analisi fondamentale. La mia specializzazione principale è l'analisi "PRICE
                    ACTION", che ho
                    ulteriormente perfezionato con le conoscenze acquisite in due decenni di esperienza. Questa versione
                    "evoluta" dell'analisi tiene conto di conferme derivanti dalla mia vasta conoscenza tecnica, ciclica e
                    fondamentale.
                    <br>
                    <br>
                    Come trader analista dei mercati finanziari, ho sviluppato una strategia che si basa sul mio motto
                    personale: "STOPPARE LE PERDITE SUL NASCERE E LASCIAR CORRERE I PROFITTI". Questo approccio ha ispirato
                    la
                    creazione del mio corso di trading avanzato, intitolato "COME ESSERE PROFITTEVOLE CON LA MIA STRATEGIA".
                    Offro lezioni personalizzate "One to One" tramite Zoom, per garantire un apprendimento approfondito.
                    Ho anche creato un indicatore semiautomatico chiamato "ACTIVE FOREX KEY LEVEL" che si integra con la
                    piattaforma "META TRADE 4". Questo indicatore è progettato per ottimizzare la mia strategia.
                    <br>
                    <br>
                </p>
                <div class="personalinfo-image-container" id="personalinfo-image-container-desktop">
                    <img src="../../assets/img/presentazione.jpg" class="personalinfo-image" alt="">
                </div>
            </div>

            <div id="personalinfo-bottom-content">
                <div class="personalinfo-image-container">
                    <img src="../../assets/img/presentazione2.jpg" class="personalinfo-image" alt="">
                </div>
                <p class="personalinfo-text">
                    Nel corso degli anni, ho ideato diverse tecniche di trading che si integrano perfettamente con la mia
                    strategia, inclusa l'innovativa tecnica "BIDIREZIONALE" e il relativo "Bidirectional Mapping": una
                    mappatura
                    dei principali market-mover ideali per utilizzare la strategia bidirezionale.
                    <br>
                    <br>
                    Recentemente, ho pubblicato un libro intitolato "IL TRADING: DALLE BASI FINO ALLA MIA STRATEGIA,"
                    disponibile anche in versione e-book gratuita.
                    <br>
                    <br>
                    Per condividere le mie conoscenze, gestisco un canale YouTube
                    in cui pubblico analisi Price Action e video su vari aspetti del trading. Inoltre, ho un canale e un
                    gruppo
                    Telegram in cui mostro la mia operatività e dove gli iscritti possono condividere esperienze. Offriamo
                    rubriche informative, come lo "Spazio Analisi," "Forza valute" e "Focus Settimanale."
                    <br>
                    <br>
                    In sintesi, sono un esperto trader e formatore nel campo del trading finanziario, specializzato in
                    analisi
                    Price Action evoluta, con una vasta gamma di risorse e strumenti per condividere la mia conoscenza e
                    aiutare
                    gli altri a diventare trader di successo.
                </p>
            </div>

        </div>
        <div class="vip-button-container">
            <button class="vip-button" @click="ShowForm">Sblocca gratis il gruppo Elite</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
#personalinfo-container {
    background-color: #ECC01B;
    padding: 100px 10%;

    #personalinfo-title {
        font-size: 65px;
        text-align: center;
        text-decoration: underline;
        margin-bottom: 100px;
    }

    @media screen and (max-width: 601px) {
        #personalinfo-title {
            font-size: 50px;
        }
    }

    #personalinfo-main-content {
        margin-bottom: 100px;

        #personalinfo-upper-content {
            display: flex;
            align-items: center;
            margin-bottom: 100px;

            .personalinfo-text {
                background-color: #ECC01B;
                width: 60%;
                padding-right: 50px;
                font-size: 20px;
                text-align: justify;
            }

            @media screen and (max-width: 601px) {
                .personalinfo-text {
                    font-size: 18px;
                }
            }

            .personalinfo-image-container {
                width: 40%;

                .personalinfo-image {
                    border-radius: 20px;
                    width: 100%;
                }
            }

            #personalinfo-image-container-mobile {
                display: none;
            }

            #personalinfo-image-container-desktop {
                display: block;
            }

            @media screen and (max-width: 901px) {
                #personalinfo-image-container-mobile {
                    display: block;
                }

                #personalinfo-image-container-desktop {
                    display: none;
                }

                .personalinfo-image-container {
                    width: 100%;
                    margin-bottom: 50px;
                }
            }
        }

        #personalinfo-bottom-content {
            display: flex;
            justify-content: center;
            align-items: center;

            .personalinfo-text {
                background-color: #ECC01B;
                width: 60%;
                padding-left: 50px;
                font-size: 20px;
                text-align: justify;
            }

            @media screen and (max-width: 601px) {
                .personalinfo-text {
                    font-size: 18px;
                }
            }

            .personalinfo-image-container {
                width: 40%;

                .personalinfo-image {
                    width: 100%;
                    border-radius: 20px;
                }
            }
        }

        @media screen and (max-width: 901px) {
            #personalinfo-upper-content {
                background-image: none;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: right;
                margin-bottom: 50px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .personalinfo-text {
                    background-color: #ECC01B;
                    width: 100%;
                    padding-right: 0;
                    font-size: 20px;
                    text-align: justify;
                }

                .personalinfo-image-container {
                    display: block;
                }
            }

            #personalinfo-bottom-content {
                background-image: none;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: left;
                display: flex;
                flex-direction: column;
                align-items: center;

                .personalinfo-text {
                    background-color: #ECC01B;
                    width: 100%;
                    padding-left: 0;
                    font-size: 20px;
                    text-align: justify;
                }

                .personalinfo-image-container {
                    display: block;
                }

                @media screen and (max-width: 901px) {
                    .personalinfo-image-container {
                        width: 100%;
                        margin-bottom: 50px;
                    }
                }
            }
        }

    }
}
</style>