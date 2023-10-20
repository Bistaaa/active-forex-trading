<script>
export default {
    name: 'Instructions',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div id="instruction-container">
        <h2 class="underlined">STEP NECESSARI</h2>
        <div id="steps-container">
            <div class="steps-column">
                <h3>Compila il form</h3>
                <span>Compila il form lasciando i tuoi dati di contatto e scarica l'E-book</span>
            </div>
            <div class="arrow-container">
                <font-awesome-icon icon="fa-solid fa-arrow-right right-arrow" />
            </div>
            <div class="steps-column">
                <h3>Call conoscitiva</h3>
                <span>Ti contattiamo per illustrarti il servizio, come accedere e rispondere alle tue domande </span>
            </div>
            <div class="arrow-container">
                <font-awesome-icon icon="fa-solid fa-arrow-right right-arrow" />
            </div>
            <div class="steps-column">
                <h3>Accedi al gruppo privato "Elite"</h3>
                <span>Sei dentro! Approfitta di tutti i servizi gratuiti che offriamo!</span>
            </div>
        </div>
        <div class="button-container">
            <div class="vip-button b05_3d_roll">
                <div>Click!</div>
                <div>Sblocca gratis Gruppo VIP</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#instruction-container {
    background-color: #ECC01B;
    padding: 100px 10%;

    h2 {
        font-size: 60px;
        text-align: center;
    }

    #steps-container {
        margin-top: 50px;
        display: flex;
        align-items: center;


        .steps-column {
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;

            h3 {
                font-size: 45px;
                text-align: center;
            }

            span {
                font-size: 25px;
                text-align: center;
            }
        }

        .arrow-container {
            width: 20%;
            font-size: 70px;
            display: flex;
            justify-content: center;
        }
    }
}
</style>