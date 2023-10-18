<script>
import Jumbotron from './Header-components/Jumbotron.vue'

export default {
    name: 'Header',
    components: {
        Jumbotron
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <div id="header-container">
        <!-- NAV -->
        <div id="nav-container">
            <div id="nav-logo">
                <img src="../assets/img/6.png" alt="">
            </div>
            <div id="nav-menu">
                <span class="nav-link">La Strategia</span>
                <span class="nav-link">I Nostri Corsi</span>
                <span class="nav-link">Chi Sono</span>
                <span class="nav-link">Indicatore</span>
                <span class="nav-link">FAQ</span>
                <span class="nav-link">Contatti</span>
            </div>
            <div id="vip-button-container">
                <button class="vip-button">
                    <span>Click!</span>
                    <span>Sblocca gratis l'accesso <br> al canale Elite</span>
                </button>
                <!-- <button class="custom-btn btn-12">
                    <span>Click!</span>
                    <span>Read More</span>
                </button> -->
            </div>
        </div>

        <Jumbotron />
    </div>
</template>
  
<style scoped lang="scss">
#header-container {
    width: 100%;

    #nav-container {
        display: flex;
        align-items: center;
        padding: 0 5%;
        width: 100%;
        height: 170px;
        background-color: #ECC01B;

        #nav-logo {
            height: 95%;
            width: 20%;
            display: flex;
            justify-content: center;

            img {
                height: 100%;
            }
        }

        #nav-menu {
            width: 60%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 35px;

            .nav-link {
                color: #000000;
                font-size: 20px;
                text-transform: uppercase;
                cursor: pointer;
                position: relative;

                &:hover {
                    color: #ffffff;
                }

                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background-color: #ffffff;
                    bottom: -2px;
                    left: 0;
                    transform: scaleX(0);
                    transform-origin: 0% 50%;
                    transition: transform 0.3s ease-in-out;
                }

                &:hover::after {
                    transform: scaleX(1);
                }
            }
        }

        #vip-button-container {
            display: flex;
            justify-content: center;
            width: 20%;

            /* #vip-button {
                width: auto;
                padding: 10px 20px;
                background-color: #2FA9DA;
                color: #ffffff;
                border: none;
                cursor: pointer;
                border-radius: 20px;

                &:hover {
                    background-color: #FFA500;
                    color: #000000;
                }

                &:active {
                    background-color: #FFD700;
                    color: #000000;
                }

                p {
                    font-size: 17px;
                }
            } */

            /* .custom-btn {
                width: 130px;
                height: 40px;
                color: #fff;
                border-radius: 5px;
                padding: 10px 25px;
                font-family: 'Lato', sans-serif;
                font-weight: 500;
                background: transparent;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                display: inline-block;
                box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
                    7px 7px 20px 0px rgba(0, 0, 0, .1),
                    4px 4px 5px 0px rgba(0, 0, 0, .1);
                outline: none;
            } */

            .vip-button {
                position: relative;
                right: 20px;
                bottom: 20px;
                border: none;
                box-shadow: none;
                width: 230px;
                height: 60px;
                line-height: 20px;
                -webkit-perspective: 230px;
                perspective: 230px;
                background: transparent;
                color: #ffffff;
                font-size: 18px;
            }

            .vip-button span {
                background: rgb(0, 172, 238);
                background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
                display: block;
                position: absolute;
                width: 230px;
                height: 40px;
                box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
                    7px 7px 20px 0px rgba(0, 0, 0, .1),
                    4px 4px 5px 0px rgba(0, 0, 0, .1);
                border-radius: 5px;
                margin: 0;
                text-align: center;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                -webkit-transition: all .3s;
                transition: all .3s;
            }

            .vip-button span:nth-child(1) {
                box-shadow:
                    -7px -7px 20px 0px #fff9,
                    -4px -4px 5px 0px #fff9,
                    7px 7px 20px 0px #0002,
                    4px 4px 5px 0px #0001;
                -webkit-transform: rotateX(90deg);
                -moz-transform: rotateX(90deg);
                transform: rotateX(90deg);
                -webkit-transform-origin: 50% 50% -20px;
                -moz-transform-origin: 50% 50% -20px;
                transform-origin: 50% 50% -20px;
            }

            .vip-button span:nth-child(2) {
                -webkit-transform: rotateX(0deg);
                -moz-transform: rotateX(0deg);
                transform: rotateX(0deg);
                -webkit-transform-origin: 50% 50% -20px;
                -moz-transform-origin: 50% 50% -20px;
                transform-origin: 50% 50% -20px;
            }

            .vip-button:hover span:nth-child(1) {
                box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
                    7px 7px 20px 0px rgba(0, 0, 0, .1),
                    4px 4px 5px 0px rgba(0, 0, 0, .1);
                -webkit-transform: rotateX(0deg);
                -moz-transform: rotateX(0deg);
                transform: rotateX(0deg);
            }

            .vip-button:hover span:nth-child(2) {
                box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
                    7px 7px 20px 0px rgba(0, 0, 0, .1),
                    4px 4px 5px 0px rgba(0, 0, 0, .1);
                color: transparent;
                -webkit-transform: rotateX(-90deg);
                -moz-transform: rotateX(-90deg);
                transform: rotateX(-90deg);
            }
        }
    }
}
</style>
  