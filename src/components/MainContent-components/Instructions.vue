<script>
import { handleVipButtonClick } from '../../main.js';

export default {
    name: 'Instructions',
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
    <div id="instruction-container">
        <h2 id="instruction-title">STEP NECESSARI</h2>
        <div id="steps-container">
            <div class="steps-column">
                <h3 class="second-instruction-title">Compila il form</h3>
                <span class="instruction-description">Compila il form lasciando i tuoi dati di contatto e scarica
                    l'E-book</span>
            </div>
            <div class="arrow-container">
                <span class="right-arrow">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </span>
                <span class="down-arrow">
                    <font-awesome-icon icon="fa-solid fa-arrow-down-long" />
                </span>
            </div>
            <div class="steps-column">
                <h3 class="second-instruction-title">Call conoscitiva</h3>
                <span class="instruction-description">Ti contattiamo per illustrarti il servizio, come accedere e rispondere
                    alle tue domande </span>
            </div>
            <div class="arrow-container">
                <span class="right-arrow">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </span>
                <span class="down-arrow">
                    <font-awesome-icon icon="fa-solid fa-arrow-down-long" />
                </span>
            </div>
            <div class="steps-column">
                <h3 class="second-instruction-title">Accedi al gruppo privato "Elite"</h3>
                <span class="instruction-description">Sei dentro! Approfitta di tutti i servizi gratuiti che
                    offriamo!</span>
            </div>
        </div>
        <div class="vip-button-container">
            <button class="vip-button" @click="ShowForm">Sblocca gratis il gruppo Elite</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
#instruction-container {
    background-color: #ECC01B;
    padding: 100px 10%;

    #instruction-title {
        font-size: 65px;
        text-align: center;
        text-decoration: underline;
        margin-bottom: 100px;
    }

    @media screen and (max-width: 601px) {
        #instruction-title {
            font-size: 55px;
        }
    }

    #steps-container {
        display: flex;
        align-items: flex-start;
        margin-bottom: 50px;

        .steps-column {
            width: 22%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            padding: 20px 0;
            border-top: 4px dotted #000000;
            border-bottom: 4px dotted #000000;

            .second-instruction-title {
                font-size: 45px;
                text-align: center;
                line-height: 50px;
            }

            .instruction-description {
                font-size: 25px;
                text-align: center;
            }

            @media screen and (max-width: 601px) {
                .second-instruction-title {
                    font-size: 40px;
                    line-height: 45px;
                }

                .instruction-description {
                    font-size: 23px;
                }
            }
        }

        @media screen and (max-width: 901px) {
            .steps-column {
                width: 80%;
            }
        }

        .arrow-container {
            width: 17%;
            height: 100%;
            font-size: 70px;
            display: flex;
            justify-content: center;

            .right-arrow {
                height: 100%;
                padding-top: 30px;
            }

            .down-arrow {
                display: none;
            }

            @media screen and (max-width: 901px) {
                .right-arrow {
                    display: none;
                }

                .down-arrow {
                    display: block;
                    margin: 20px 0;
                }
            }
        }
    }

    @media screen and (max-width: 901px) {
        #steps-container {
            flex-direction: column;
            align-items: center;
        }
    }
}

@media screen and (max-width: 901px) {
    #instruction-container {
        padding: 100px 7%;
    }
}

@media screen and (max-width: 601px) {
    #instruction-container {
        padding: 100px 3%;
    }
}
</style>