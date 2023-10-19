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
                <img src="../assets/img/logo.png" alt="">
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
                <div class="vip-button b05_3d_roll">
                    <div>Click!</div>
                    <div>Sblocca gratis l'accesso</div>
                </div>
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
            height: 80%;
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

            .vip-button {
                margin: 0;
                border: 0;
                font-size: 22px;
                position: relative;
                width: 300px;
                height: 50px;
                text-align: center;
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-user-select: none;
                cursor: default;
                perspective: 500px;
                -webkit-perspective: 500px;
                -moz-perspective: 500px;
            }

            .vip-button:hover {
                cursor: pointer;
            }

            .b05_3d_roll {
                perspective: 500px;
                -webkit-perspective: 500px;
                -moz-perspective: 500px;
            }

            .b05_3d_roll div {
                position: absolute;
                text-align: center;
                width: 100%;
                height: 50px;
                padding: 10px;
                border: #000000 solid 1px;
                pointer-events: none;
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
            }

            .b05_3d_roll div:nth-child(1) {
                color: #000000;
                background-color: #000000;
                transform: rotateX(90deg);
                -webkit-transform: rotateX(90deg);
                -moz-transform: rotateX(90deg);
                transition: all 0.2s ease;
                -webkit-transition: all 0.2s ease;
                -moz-transition: all 0.2s ease;
                transform-origin: 50% 50% -25px;
                -webkit-transform-origin: 50% 50% -25px;
                -moz-transform-origin: 50% 50% -25px;
            }

            .b05_3d_roll div:nth-child(2) {
                color: #ffffff;
                background-color: #2FA9DA;
                transform: rotateX(0deg);
                -webkit-transform: rotateX(0deg);
                -moz-transform: rotateX(0deg);
                transition: all 0.2s ease;
                -webkit-transition: all 0.2s ease;
                -moz-transition: all 0.2s ease;
                transform-origin: 50% 50% -25px;
                -webkit-transform-origin: 50% 50% -25px;
                -moz-transform-origin: 50% 50% -25px;
            }

            .b05_3d_roll:hover div:nth-child(1) {
                color: #ffffff;
                transition: all 0.2s ease;
                -webkit-transition: all 0.2s ease;
                -moz-transition: all 0.2s ease;
                transform: rotateX(0deg);
                -webkit-transform: rotateX(0deg);
                -moz-transform: rotateX(0deg);
            }

            .b05_3d_roll:hover div:nth-child(2) {
                background-color: #000000;
                color: #000000;
                transition: all 0.2s ease;
                -webkit-transition: all 0.2s ease;
                -moz-transition: all 0.2s ease;
                transform: rotateX(-90deg);
                -webkit-transform: rotateX(-90deg);
                -moz-transform: rotateX(-90deg);
            }
        }
    }
}
</style>
  