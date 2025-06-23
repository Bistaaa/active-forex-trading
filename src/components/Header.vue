<script>
import { handleVipButtonClick } from '../main.js';
import { RouterLink } from 'vue-router';

export default {
    name: 'Header',
    data() {
        return {
            showSmallNavMenu: false,
        };
    },
    methods: {
        ShowForm() {
            handleVipButtonClick();
        },

        navigateTo(route) {
            this.$router.push(route);
        },

        scrollToElement(elementId) {
            this.$router.push('/');

            setTimeout(() => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        },

        toggleSmallNavMenu() {
            this.showSmallNavMenu = !this.showSmallNavMenu;
        },
    },
};
</script>

<template>
    <div id="header-container">
        <!-- NAV DESKTOP-->
        <div id="nav-container">
            <div id="nav-logo">
                <img src="../assets/img/logo.png" alt="" @click="navigateTo('/')">
            </div>
            <div id="nav-menu">
                <span class="nav-link" @click="scrollToElement('mystrategy-container')">La Strategia</span>
                <span class="nav-link" @click="scrollToElement('personalinfo-container')">Chi Sono</span>
                <span class="nav-link" @click="scrollToElement('ebook-overall-container')">E-Book</span>
                <span class="nav-link" @click="scrollToElement('footer-container')">Contatti</span>
                <span class="nav-link" @click="navigateTo('/faq')">FAQ</span>
                <span class="nav-link" @click="navigateTo('/shop')">Shop</span>
            </div>
            <div id="vip-button-container-header">
                <button class="vip-button" @click="ShowForm">Sblocca gratis il gruppo Elite</button>
            </div>
        </div>

        <!-- NAV SMALL DEVICES-->
        <div id="small-nav-container">
            <div id="small-nav-menu-icon-container" @click="toggleSmallNavMenu">
                <font-awesome-icon id="small-nav-menu-icon" icon="fa-solid fa-bars" />
            </div>

            <div id="small-nav-menu"
                :class="{ 'show-small-nav-menu': showSmallNavMenu, 'hide-small-nav-menu': !showSmallNavMenu }">
                <span class="nav-link"
                    @click="() => { toggleSmallNavMenu(); scrollToElement('mystrategy-container'); }">La
                    Strategia</span>
                <span class="nav-link"
                    @click="() => { toggleSmallNavMenu(); scrollToElement('personalinfo-container'); }">Chi Sono</span>
                <span class="nav-link"
                    @click="() => { toggleSmallNavMenu(); scrollToElement('ebook-overall-container'); }">E-Book</span>
                <span class="nav-link"
                    @click="() => { toggleSmallNavMenu(); scrollToElement('footer-container'); }">Contatti</span>
                <span class="nav-link" @click="() => { toggleSmallNavMenu(); navigateTo('/faq'); }">FAQ</span>
                <span class="nav-link" @click="() => { toggleSmallNavMenu(); navigateTo('/shop'); }">Shop</span>


                <div id="vip-button-container-nav-menu">
                    <button class="vip-button" @click="() => { toggleSmallNavMenu(); ShowForm(); }">Sblocca gratis il
                        gruppo
                        Elite</button>
                </div>
            </div>

            <div id="small-nav-logo">
                <img src="../assets/img/logo.png" alt="" @click="navigateTo('/')">
            </div>
        </div>
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
                cursor: pointer;
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
                background-color: #000000;
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
                background-color: #fff;
                transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
            }

            .vip-button:hover::before {
                scale: 3;
            }

            .vip-button:hover {
                color: #000;
                scale: 1.1;
                box-shadow: 0 0px 20px #000000;
                border: 2px solid #000;
            }

            .vip-button:active {
                scale: 1;
            }
        }
    }

    #small-nav-container {
        display: none;
    }

    @media screen and (max-width: 901px) {
        #nav-container {
            display: none;
        }

        #small-nav-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 130px;
            padding: 0 5%;
            background-color: #ECC01B;
            position: relative;

            #small-nav-menu-icon-container {
                height: 80%;
                aspect-ratio: 1/1;
                position: relative;

                #small-nav-menu-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 3em;
                }
            }

            .hide-small-nav-menu {
                display: none;
            }

            .show-small-nav-menu {
                display: flex;
            }


            #small-nav-menu {
                flex-direction: column;
                position: absolute;
                bottom: 0;
                left: 0;
                transform: translateY(100%);
                border: 3px solid #333;
                border-left: none;
                z-index: 20;
                background-color: #ECC01B;
                padding: 10px 20px 10px 10px;

                .nav-link {
                    color: #333333;
                    font-size: 30px;
                    text-transform: none;
                    position: relative;
                    text-transform: uppercase;
                    margin: 10px 0;

                    &:not(:last-child)::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 4px;
                        background-color: #ffffff;
                        bottom: -11px;
                        left: 0;
                        transform: scaleX(1);
                        transform-origin: 0% 50%;
                    }
                }

                @media screen and (max-width: 601px) {
                    .nav-link {
                        font-size: 25px;
                    }
                }

                #vip-button-container-nav-menu {
                    display: flex;
                    justify-content: center;
                    margin: 30px 0 20px;

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
                }
            }

            @media screen and (max-width: 601px) {
                #small-nav-menu {
                    width: 100vw;
                    border-right: none;
                }
            }

            #small-nav-logo {
                height: 80%;


                img {
                    height: 100%;
                    background-size: contain;
                }
            }
        }
    }
}
</style>