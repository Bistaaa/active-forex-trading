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
            <div id="vip-button-container-header">
                <button class="vip-button">Sblocca gratis Gruppo VIP</button>
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
                font-size: 22px;
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

        #vip-button-container-header {
            display: flex;
            justify-content: center;
            width: 20%;

            .vip-button {
                cursor: pointer;
                position: relative;
                padding: 10px 24px;
                font-size: 25px;
                color: #ffffff;
                border: 2px solid #ffffff;
                border-radius: 34px;
                background-color: #2FA9DA;
                font-weight: 600;
                overflow: hidden;
                transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
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
            }

            .vip-button::before {
                content: '';
                position: absolute;
                inset: 0;
                margin: auto;
                width: 200px;
                height: 100px;
                border-radius: inherit;
                scale: 0;
                z-index: -1;
                background-color: #000000;
                transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
            }

            .vip-button:hover::before {
                scale: 3;
            }

            .vip-button:hover {
                color: #ffffff;
                scale: 1.1;
                box-shadow: 0 0px 20px #000000;
            }

            .vip-button:active {
                scale: 1;
            }
        }
    }
}
</style>
  