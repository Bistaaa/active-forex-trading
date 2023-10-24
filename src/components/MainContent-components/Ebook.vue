<script>
export default {
    name: 'Ebook',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div id="ebook-container">
        <h2>IL MIO E-BOOK</h2>
        <h3>"Dalle basi alla mia strategia"</h3>
        <div id="ebook-main-content-container">
            <div id="ebook-background-image-container">
                <img src="../../assets/img/ebook-3-2.png" alt="">
            </div>
            <div id="ebook-download-container">
                <h4>SCARICA GRATIS IL MIO NUOVO E-BOOK</h4>
                <button class="ebook-button">Scarica l'E-book</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#ebook-container {
    background-color: #ffffff;
    padding: 100px 20%;
    width: 100%;

    h2 {
        color: #000000;
        font-size: 65px;
        text-align: center;
        text-decoration: underline;
        margin-bottom: 30px;
    }

    h3 {
        text-align: center;
        font-size: 50px;
        margin-bottom: 100px;
    }

    #ebook-main-content-container {
        position: relative;

        #ebook-background-image-container {
            height: 100%;
            width: 100%;
            position: relative;
            z-index: 5;

            img {
                background-size: contain;
                background-repeat: no-repeat;
                width: 100%;
                height: calc((2 / 3) * 100%);
            }
        }

        #ebook-download-container {
            position: absolute;
            bottom: 15%;
            left: 50%;
            transform: translate(-50%, 50%);
            height: 23%;
            width: 60%;
            border: 5px solid #ffffff;
            background-color: rgba(0, 0, 0, 0.6);
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 11;

            h4 {
                font-size: 30px;
                color: #ffffff;
                text-align: center;
                margin-top: 20px;
            }
        }
    }

    .ebook-button {
        background-color: #ECC01B;
        font-size: 18px;
        letter-spacing: 2px;
        text-transform: uppercase;
        display: inline-block;
        text-align: center;
        font-weight: bold;
        padding: 0.7em 2em;
        border: 3px solid #ffffff;
        border-radius: 2px;
        position: relative;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
        color: #ffffff;
        text-decoration: none;
        transition: 0.3s ease all;
        margin-top: 20px;
        z-index: 1;
        animation: bouncy 3s infinite linear;

        @keyframes bouncy {
            0% {
                top: 0em;
            }

            3% {
                top: -0.9em;
            }

            6% {
                top: 0em;
            }

            9% {
                top: -0.4em;
            }

            12% {
                top: 0em;
            }

            100% {
                top: 0em;
            }
        }

        &:before {
            transition: 0.5s all ease;
            position: absolute;
            top: 0;
            left: 50%;
            right: 50%;
            bottom: 0;
            opacity: 0;
            content: '';
            background-color: #ffffff;
            z-index: -1;
        }

        &:hover,
        &:focus {
            color: #000000;
            border: 3px solid #000000;

            &:before {
                transition: 0.5s all ease;
                left: 0;
                right: 0;
                opacity: 1;
            }
        }

        &:active {
            transform: scale(0.9);
        }
    }

}
</style>