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
        <h2>STEP NECESSARI</h2>
        <div id="steps-container">
            <div class="steps-column">
                <h3>Compila il form</h3>
                <span>Compila il form lasciando i tuoi dati di contatto e scarica l'E-book</span>
            </div>
            <div class="arrow-container">
                <span class="right-arrow">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </span>
            </div>
            <div class="steps-column">
                <h3>Call conoscitiva</h3>
                <span>Ti contattiamo per illustrarti il servizio, come accedere e rispondere alle tue domande </span>
            </div>
            <div class="arrow-container">
                <span class="right-arrow">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </span>
            </div>
            <div class="steps-column">
                <h3>Accedi al gruppo privato "Elite"</h3>
                <span>Sei dentro! Approfitta di tutti i servizi gratuiti che offriamo!</span>
            </div>
        </div>
        <div class="vip-button-container">
            <button class="vip-button" @click="ShowForm">Sblocca gratis Gruppo VIP</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
#instruction-container {
    background-color: #ECC01B;
    padding: 100px 10%;

    h2 {
        font-size: 65px;
        text-align: center;
        text-decoration: underline;
        margin-bottom: 100px;
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

            h3 {
                font-size: 45px;
                text-align: center;
                line-height: 50px;
            }

            span {
                font-size: 25px;
                text-align: center;
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
        }
    }
}
</style>