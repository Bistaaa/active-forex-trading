<script>
import { handleVipButtonClick } from '../../main.js';

export default {
    name: 'Ebook',
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
    <div id="ebook-overall-container">
        <div id="ebook-content-container">
            <p class="category-icon">
                <font-awesome-icon icon="fa-solid fa-book-open" />
            </p>
            <h2 id="ebook-title">IL MIO E-BOOK</h2>
            <h3 id="second-ebook-title">"Dalle basi alla mia strategia"</h3>
            <div id="ebook-background-image-container">
                <img src="../../assets/img/ebook-3-2.png" alt="">
            </div>
            <!-- <button class="ebook-button" id="small-ebook-button" @click="ShowForm">Scarica l'E-book</button> -->
            <div id="ebook-download-container">
                <h4>SCARICA GRATIS IL MIO NUOVO E-BOOK</h4>
                <button class="ebook-button" @click="ShowForm">Scarica l'E-book</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#ebook-overall-container {
    background-image: url(../../assets/img/ipad-background.png);
    background-size: cover;
    width: 100%;

    #ebook-content-container {
        background-color: rgba($color: #ffffff, $alpha: 0.7);
        width: 100%;
        height: 100%;
        padding: 100px 20%;
        display: flex;
        flex-direction: column;
        align-items: center;

        #ebook-title {
            color: #000000;
            font-size: 65px;
            text-align: center;
            text-decoration: underline;
            margin-bottom: 30px;
        }

        @media screen and (max-width: 601px) {
            #ebook-title {
                font-size: 50px;
            }
        }

        #second-ebook-title {
            text-align: center;
            font-size: 50px;
            margin-bottom: 100px;
        }

        @media screen and (max-width: 601px) {

            #second-ebook-title {
                font-size: 25px;
            }
        }

        #ebook-background-image-container {
            height: 100%;
            width: 100%;
            position: relative;
            z-index: 4;

            img {
                background-size: contain;
                background-repeat: no-repeat;
                width: 100%;
                height: calc((2 / 3) * 100%);
            }
        }

        #ebook-download-container {
            width: 70%;
            padding: 0 30px 20px;
            margin-top: 50px;
            border: 5px solid #000000;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 5;

            h4 {
                font-size: 30px;
                color: #000000;
                text-align: center;
                margin-top: 20px;
            }

            @media screen and (max-width: 601px) {
                h4 {
                    font-size: 23px;
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
                border: 3px solid #000000;
                border-radius: 2px;
                position: relative;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
                color: #000000;
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

            @media screen and (max-width: 601px) {
                .ebook-button {
                    font-size: 16px;
                    padding: 10px 20px;
                    letter-spacing: 1px;
                }
            }
        }

        @media screen and (max-width: 901px) {

            #ebook-download-container {
                width: 90%;
            }
        }

        @media screen and (max-width: 601px) {

            #ebook-download-container {
                border: none;
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 901px) {

        #ebook-content-container {
            padding: 100px 5%;
        }
    }
}

@media screen and (max-width: 901px) {

    #ebook-overall-container {
        background-position: center;
    }
}
</style>