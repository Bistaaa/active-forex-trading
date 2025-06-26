<script>
export default {
    name: 'Footer',
    data() {
        return {

        };
    },
    mounted() {
        this.loadIubendaScript();
    },
    methods: {
        loadIubendaScript() {
            const script = document.createElement('script');
            script.src = 'https://cdn.iubenda.com/iubenda.js';
            script.async = true;

            document.head.appendChild(script);
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

        navigateTo(route) {
            this.$router.push(route);
        },
    },
};
</script>

<template>
    <div id="footer-container">
        <div id="upper-footer">

            <!-- LEFT COLUMN -->
            <div class="footer-column" id="footer-container-left">
                <font-awesome-icon icon="fa-solid fa-address-book" class="footer-icon" />
                <div class="footer-title-and-menu-container">
                    <div class="footer-title-container">
                        <span class="footer-title">CONTATTI</span>
                    </div>
                    <div class="footer-sub-menu">
                        <div class="footer-menu-row">
                            <img src="../assets/img/social-icons/whatsapp-icon.png" class="footer-social-icon" />
                            <a href="https://wa.me/393784194165" target="_blank">
                                <span class="footer-menu-row-data">+39 378 419 4165</span>
                            </a>
                        </div>
                        <div class="footer-menu-row">
                            <img src="../assets/img/social-icons/telegram-icon.png" class="footer-social-icon" />
                            <a href="https://t.me/Riccardobista" target="_blank">
                                <span class="footer-menu-row-data">@Riccardobista</span>
                            </a>
                        </div>
                        <div class="footer-menu-row">
                            <img src="../assets/img/social-icons/mail-icon.png" class="footer-social-icon" />
                            <a href="mailto:info@activeforextrading.it" target="_blank">
                                <span class="footer-menu-row-data">info@activeforextrading.it</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <!-- MID COLUMN -->
            <div class="footer-column" id="footer-container-mid">
                <div id="social-container">
                    <a href="https://www.youtube.com/channel/UCb1ZKE1eay_VPglsP0Xp7EQ" target="_blank">
                        <div class="social-icon-background" id="youtube-background">
                            <img src="../assets/img/social-icons/youtube-icon.png" class="social-icon"
                                id="youtube-icon" />
                        </div>
                    </a>
                    <a href="https://t.me/activeforexbase" target="_blank">
                        <div class="social-icon-background" id="telegram-background">
                            <img src="../assets/img/social-icons/telegram-icon.png" class="social-icon"
                                id="telegram-icon" />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/active_forex_trading_/" target="_blank">
                        <div class="social-icon-background" id="instagram-background">
                            <img src="../assets/img/social-icons/instagram-icon.png" class="social-icon"
                                id="instagram-icon" />
                        </div>
                    </a>
                    <a href="https://www.facebook.com/activeforextrading.it" target="_blank">
                        <div class="social-icon-background" id="facebook-background">
                            <img src="../assets/img/social-icons/facebook-icon.png" class="social-icon"
                                id="facebook-icon" />
                        </div>
                    </a>
                    <a href="https://wa.me/393784194165" target="_blank">
                        <div class="social-icon-background" id="whatsapp-background">
                            <img src="../assets/img/social-icons/whatsapp-icon.png" class="social-icon"
                                id="whatsapp-icon" />
                        </div>
                    </a>
                    <a href="mailto:info@activeforextrading.it" target="_blank">
                        <div class="social-icon-background" id="mail-background">
                            <img src="../assets/img/social-icons/mail-icon.png" class="social-icon" id="mail-icon" />
                        </div>
                    </a>
                </div>
                <span class="bottom-footer-info" id="owner">Active Forex Trading di Bistarelli Riccardo</span>
                <span class="bottom-footer-info" id="owner-vat-number">P.IVA: 03832340545</span>
                <div id="policies-container">

                    <!-- Privacy Policy -->
                    <a href="https://www.iubenda.com/privacy-policy/25318288"
                        class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
                        title="Privacy Policy">Privacy
                        Policy</a>

                    <!-- Cookie Policy -->
                    <a href="https://www.iubenda.com/privacy-policy/25318288/cookie-policy"
                        class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
                        title="Cookie Policy">Cookie
                        Policy</a>
                </div>
            </div>


            <!-- RIGHT COLUMN -->
            <div class="footer-column" id="footer-container-right">
                <font-awesome-icon icon="fa-solid fa-location-dot" class="footer-icon" />
                <div class="footer-title-and-menu-container">
                    <div class="footer-title-container">
                        <span class="footer-title">DOVE SIAMO</span>
                    </div>
                    <span class="footer-data">Loc. Rosciano - 06010 Citerna (PG)</span>
                </div>
            </div>
        </div>
        <p id="bottom-informations">Sito progettato e sviluppato da <a href="https://www.michelebistarelli.it/"
                target="_blank">Michele Bistarelli</a></p>
    </div>
</template>


<style scoped lang="scss">
#footer-container {

    #upper-footer {
        background-color: #111111;
        padding: 40px 0;
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        @media (max-width: 899px) {
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
        }

        .footer-column {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: calc(100% / 3);

            .footer-icon {
                font-size: 50px;
                margin-bottom: 5px;
                color: #fff;
                margin-top: 30px;

                @media (max-width: 1399px) {
                    font-size: 25px;
                    margin-top: 30px;
                }
            }
        }


        /* LEFT COLUMN */

        #footer-container-left {
            @media (max-width: 899px) {
                display: none;
            }

            .footer-title-and-menu-container {
                position: relative;
                color: #fff;
                cursor: pointer;

                .footer-title-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    margin-bottom: 30px;

                    @media (max-width: 1399px) {
                        margin-bottom: 20px;
                    }

                    .footer-title {
                        font-size: 35px;

                        @media (max-width: 1399px) {
                            font-size: 25px;
                        }
                    }

                    .footer-title-arrow {
                        font-size: 20px;
                        position: absolute;
                        top: 7px;
                    }
                }
            }

            .footer-sub-menu {
                display: flex;
                flex-direction: column;

                .footer-menu-row {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 15px;
                    padding: 10px 10px;
                    position: relative;

                    @media (max-width: 1099px) {
                        padding: 8px 10px;
                    }

                    &:not(:last-child)::before {
                        content: "";
                        position: absolute;
                        width: 90%;
                        height: 1px;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        background: linear-gradient(to right, transparent, #fff 20%, #fff 80%, transparent);
                    }

                    .footer-menu-row-icon {
                        font-size: 27px;
                        color: white;
                    }

                    .footer-social-icon {
                        width: 25px;
                        height: auto;

                        @media (max-width: 1099px) {
                            width: 20px;
                        }
                    }

                    a {
                        text-decoration: none;

                    }

                    .footer-menu-row-data {
                        font-size: 16px;
                        color: #ffffff;
                        white-space: nowrap;
                        cursor: pointer;

                        @media (max-width: 1099px) {
                            font-size: 15px;
                        }
                    }

                    &:hover {
                        color: #ECC01B;
                    }
                }
            }
        }


        /* MID COLUMN */

        #footer-container-mid {
            @media (max-width: 899px) {
                width: 100%;
            }

            #social-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 20px;
                margin: 10px 0 30px;

                @media (max-width: 1399px) {
                    gap: 10px;
                    margin: 0;
                    margin-top: 30px;
                }

                @media (max-width: 601px) {
                    gap: 10px;
                    flex-wrap: wrap;
                }

                .social-icon-background {
                    height: 60px;
                    width: 60px;
                    border-radius: 50%;
                    position: relative;

                    @media (max-width: 1399px) {
                        height: 50px;
                        width: 50px;
                    }

                    @media (max-width: 1099px) {
                        height: 40px;
                        width: 40px;
                    }

                    @media (max-width: 899px) {
                        height: 50px;
                        width: 50px;
                    }

                    @media (max-width: 499px) {
                        height: 40px;
                        width: 40px;
                    }

                    @media (max-width: 399px) {
                        height: 38px;
                        width: 38px;
                    }

                    .social-icon {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 20px;
                        color: #ffffff;
                    }


                    .social-icon:not(#facebook-icon) {
                        width: 50%;
                    }

                    .social-icon#facebook-icon {
                        height: 50%;
                    }
                }

                #youtube-background {
                    background-color: #ff0000;
                }

                #telegram-background {
                    background-color: #2481CC;
                }

                #instagram-background {
                    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
                }

                #facebook-background {
                    background-color: #1877F2;
                }

                #whatsapp-background {
                    background-color: #25D366;
                }

                #mail-background {
                    background-color: #617379;
                }
            }

            .bottom-footer-info {
                font-size: 23px;
                color: #ffffff;

                @media (max-width: 1399px) {
                    font-size: 20px;
                }

                @media (max-width: 1099px) {
                    font-size: 18px;
                }

                @media (max-width: 399px) {
                    font-size: 16px;
                }
            }

            #owner {
                margin: 40px 0 25px;
                text-align: center;

                @media (max-width: 1399px) {
                    margin: 40px 0 0;
                }
            }

            #owner-vat-number {
                text-align: center;
                margin-bottom: 40px;

                @media (max-width: 1399px) {
                    margin-bottom: 20px;
                }
            }

            #policies-container {
                display: flex;
                gap: 10px;
            }
        }


        /* RIGHT COLUMN */

        #footer-container-right {
            @media (max-width: 899px) {
                display: none;
            }

            .footer-title-and-menu-container {
                position: relative;
                color: #fff;
                cursor: pointer;

                .footer-title-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    margin-bottom: 30px;

                    @media (max-width: 1399px) {
                        margin-bottom: 20px;
                    }

                    .footer-title {
                        font-size: 35px;

                        @media (max-width: 1399px) {
                            font-size: 25px;
                        }
                    }
                }

                .footer-data {
                    font-size: 16px;

                    @media (max-width: 1099px) {
                        font-size: 15px;
                    }
                }
            }

        }

    }

    #bottom-informations {
        position: relative;
        background-color: #111111;
        width: 100%;
        padding: 10px 0;
        font-size: 13px;
        color: #ffffff;
        text-align: center;

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 1px;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(to right, transparent, #fff 10%, #fff 90%, transparent);
        }

        a {
            color: #ffffff;
        }
    }
}
</style>
