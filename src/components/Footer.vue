<script>
export default {
    name: 'Footer',
    data() {
        return {
            showSubMenuContacts: false,
            showSubMenuLinks: false,
        };
    },
    methods: {
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

        <!-- UPPER FOOTER -->
        <div id="upper-footer">

            <!-- CONTACTS COLUMN -->
            <div class="upper-footer-column">
                <font-awesome-icon icon="fa-solid fa-address-book" class="footer-icon" />
                <div class="footer-title-and-menu-container" @mouseover=" showSubMenuContacts = true"
                    @mouseout="showSubMenuContacts = false;">
                    <div class="footer-title-container">
                        <span class="footer-title">CONTATTI</span>
                        <div class="footer-title-arrow-container">
                            <font-awesome-icon icon="fa-solid fa-angles-down" class="footer-title-arrow" />
                        </div>
                    </div>
                    <div class="footer-sub-menu" v-show="showSubMenuContacts">
                        <div class="footer-menu-row">
                            <div class="footer-menu-row-icon-container" id="phone-menu-background">
                                <img src="../assets/img/social-icons/phone-icon.png" class="footer-social-icon" />
                            </div>
                            <a href="tel:+393383525888" target="_blank">
                                <span class="footer-menu-row-data">+39 3383525888</span>
                            </a>
                        </div>
                        <div class="footer-menu-row">
                            <div class="footer-menu-row-icon-container" id="whatsapp-menu-background">
                                <img src="../assets/img/social-icons/whatsapp-icon.png" class="footer-social-icon" />
                            </div>
                            <a href="https://wa.me/message/POHA3ZSPWN73D1" target="_blank">
                                <span class="footer-menu-row-data">+39 3383525888</span>
                            </a>
                        </div>
                        <div class="footer-menu-row">
                            <div class="footer-menu-row-icon-container" id="telegram-menu-background">
                                <img src="../assets/img/social-icons/telegram-icon.png" class="footer-social-icon" />
                            </div>
                            <a href="https://t.me/Riccardobista" target="_blank">
                                <span class="footer-menu-row-data">@Riccardobista</span>
                            </a>
                        </div>
                        <div class="footer-menu-row">
                            <div class="footer-menu-row-icon-container" id="mail-menu-background">
                                <img src="../assets/img/social-icons/mail-icon.png" class="footer-social-icon" />
                            </div>
                            <a href="mailto:info@activeforextrading.it" target="_blank">
                                <span class="footer-menu-row-data">info@activeforextrading.it</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <!-- LOCATIONS COLUMN -->
            <div class="upper-footer-column">
                <font-awesome-icon icon="fa-solid fa-location-dot" class="footer-icon" />
                <div class="footer-title-and-menu-container">
                    <div class="footer-title-container">
                        <span class="footer-title">DOVE SIAMO</span>
                    </div>
                    <span>Via Santa Maria, 2 - 06010 Citerna (PG)</span>
                </div>
            </div>


            <!-- LINKS COLUMN -->
            <div class="upper-footer-column">
                <font-awesome-icon icon="fa-solid fa-link" class="footer-icon" />
                <div class="footer-title-and-menu-container" @mouseover="showSubMenuLinks = true"
                    @mouseout="showSubMenuLinks = false;">
                    <div class="footer-title-container">
                        <span class="footer-title">LINK</span>
                        <div class="footer-title-arrow-container">
                            <font-awesome-icon icon="fa-solid fa-angles-down" class="footer-title-arrow" />
                        </div>
                    </div>
                    <div class="footer-sub-menu" v-show="showSubMenuLinks">
                        <div class="footer-menu-row">
                            <span class="footer-menu-row-data" @click="scrollToElement('mystrategy-container')"> Strategia
                            </span>
                        </div>
                        <div div class="footer-menu-row">
                            <span class="footer-menu-row-data" @click="scrollToElement('personalinfo-container')">Chi
                                Sono</span>
                        </div>
                        <div class="footer-menu-row">
                            <span class="footer-menu-row-data"
                                @click="scrollToElement('ebook-overall-container')">E-Book</span>
                        </div>
                        <div class="footer-menu-row">
                            <span class="footer-menu-row-data" @click="scrollToElement('footer-container')">Contatti</span>
                        </div>
                        <div class="footer-menu-row">
                            <span class="footer-menu-row-data" @click="navigateTo('/faq')">FAQ</span>
                        </div>
                        <div class="footer-menu-row">
                            <span class="footer-menu-row-data" @click="navigateTo('/shop')">I Nostri Corsi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>






        <!-- MOBILE DEVICES UPPER FOOTER -->
        <div id="upper-footer-small">

            <div id="contacts-column">
                <font-awesome-icon icon="fa-solid fa-address-book" class="footer-icon" />
                <div class="footer-title-and-menu-container">
                    <div class="footer-title-container">
                        <span class="footer-title">CONTATTI</span>
                    </div>
                    <div class="footer-sub-menu">
                        <div class="footer-menu-row">
                            <a href="tel:+393383525888" target="_blank">
                                <div class="footer-menu-row-icon-container" id="phone-menu-background">
                                    <img src="../assets/img/social-icons/phone-icon.png" class="footer-social-icon" />
                                </div>
                                <span class="footer-menu-row-data">+39 3383525888</span>
                            </a>
                        </div>
                        <div class="footer-menu-row">
                            <a href="https://wa.me/message/POHA3ZSPWN73D1" target="_blank">
                                <div class="footer-menu-row-icon-container" id="whatsapp-menu-background">
                                    <img src="../assets/img/social-icons/whatsapp-icon.png" class="footer-social-icon" />
                                </div>
                                <span class="footer-menu-row-data">+39 3383525888</span>
                            </a>
                        </div>
                        <div class="footer-menu-row">
                            <a href="https://t.me/Riccardobista" target="_blank">
                                <div class="footer-menu-row-icon-container" id="telegram-menu-background">
                                    <img src="../assets/img/social-icons/telegram-icon.png" class="footer-social-icon" />
                                </div>
                                <span class="footer-menu-row-data">@Riccardobista</span>
                            </a>
                        </div>
                        <div class="footer-menu-row">
                            <a href="mailto:info@activeforextrading.it" target="_blank">
                                <div class="footer-menu-row-icon-container" id="mail-menu-background">
                                    <img src="../assets/img/social-icons/mail-icon.png" class="footer-social-icon" />
                                </div>
                                <span class="footer-menu-row-data">info@activeforextrading.it</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="location-column">
                <font-awesome-icon icon="fa-solid fa-location-dot" class="footer-icon" />
                <div class="footer-title-and-menu-container">
                    <div class="footer-title-container">
                        <span class="footer-title">DOVE SIAMO</span>
                    </div>
                    <span>Via Santa Maria, 2 - 06010 Citerna (PG)</span>
                </div>
            </div>
        </div>

        <!-- LOWER FOOTER -->
        <div id="lower-footer">
            <div id="social-container">
                <a href="https://www.youtube.com/channel/UCb1ZKE1eay_VPglsP0Xp7EQ" target="_blank">
                    <div class="social-icon-background" id="youtube-background">
                        <img src="../assets/img/social-icons/youtube-icon.png" class="social-icon" id="youtube-icon" />
                    </div>
                </a>
                <a href="https://t.me/activeforexbase" target="_blank">
                    <div class="social-icon-background" id="telegram-background">
                        <img src="../assets/img/social-icons/telegram-icon.png" class="social-icon" id="telegram-icon" />
                    </div>
                </a>
                <a href="https://www.instagram.com/active_forex_trading_/" target="_blank">
                    <div class="social-icon-background" id="instagram-background">
                        <img src="../assets/img/social-icons/instagram-icon.png" class="social-icon" id="instagram-icon" />
                    </div>
                </a>
                <a href="https://www.facebook.com/activeforextrading.it" target="_blank">
                    <div class="social-icon-background" id="facebook-background">
                        <img src="../assets/img/social-icons/facebook-icon.png" class="social-icon" id="facebook-icon" />
                    </div>
                </a>
                <a href="https://wa.me/message/POHA3ZSPWN73D1" target="_blank">
                    <div class="social-icon-background" id="whatsapp-background">
                        <img src="../assets/img/social-icons/whatsapp-icon.png" class="social-icon" id="whatsapp-icon" />
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
            <div id="bottom-informations"></div>
        </div>
    </div>
</template>
  

<style scoped lang="scss">
#footer-container {

    #upper-footer {
        background-color: #ECC01B;
        padding: 50px 10% 80px;
        display: flex;
        justify-content: space-between;

        .upper-footer-column {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: calc(100% / 3);

            .footer-icon {
                font-size: 50px;
                margin-bottom: 20px;
            }

            .footer-title-and-menu-container {
                position: relative;
                cursor: pointer;

                .footer-title-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;

                    .footer-title {
                        font-size: 35px;
                    }

                    .footer-title-arrow-container {
                        position: relative;
                        height: 30px;
                        width: 30px;

                        .footer-title-arrow {
                            font-size: 20px;
                            position: absolute;
                            top: 7px;
                        }
                    }
                }

                .footer-sub-menu {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 4;
                    border: 1px solid #ffffff;
                    background-color: #111111;
                    padding: 5px 5px;


                    .footer-menu-row {
                        /* background-color: #d6249f; */
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 20px;
                        padding: 10px 10px;
                        position: relative;

                        &:not(:last-child)::before {
                            content: "";
                            position: absolute;
                            width: 90%;
                            height: 1px;
                            background-color: white;
                            bottom: 0;
                            left: 50%;
                            transform: translateX(-50%);
                        }

                        .footer-menu-row-icon-container {
                            width: 45px;
                            height: 45px;
                            border-radius: 50%;
                            position: relative;

                            .footer-menu-row-icon {
                                font-size: 27px;
                                color: white;
                            }

                            .footer-social-icon {
                                width: 60%;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                            }
                        }

                        #phone-menu-background {
                            background-color: #ff0000;
                        }

                        #whatsapp-menu-background {
                            background-color: #25D366
                        }

                        #telegram-menu-background {
                            background-color: #2481CC
                        }

                        #mail-menu-background {
                            background-color: #dd9716
                        }

                        #location-menu-background {
                            background-color: #ff0000
                        }

                        a {
                            text-decoration: none;

                        }

                        .footer-menu-row-data {
                            font-size: 20px;
                            color: #ffffff;
                            white-space: nowrap;
                            cursor: pointer;

                            &:hover {
                                color: #ECC01B;
                            }
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 901px) {
            .upper-footer-column {
                display: none;
            }
        }
    }

    @media screen and (max-width: 901px) {
        #upper-footer {
            display: none;
        }
    }

    #upper-footer-small {
        background-color: #ECC01B;
        padding: 50px 5% 80px;
        display: none;
        flex-direction: column;
        gap: 20px;

        #contacts-column {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            .footer-icon {
                font-size: 50px;
                margin-bottom: 10px;
            }

            .footer-title-and-menu-container {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;

                .footer-title-container {
                    font-size: 40px;
                    width: 100%;
                    margin-bottom: 20px;

                    .footer-title {
                        text-align: center;
                    }
                }

                .footer-sub-menu {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    .footer-menu-row {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 20px;
                        padding: 10px 10px;
                        position: relative;
                        width: 100%;

                        &:not(:last-child)::before {
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 1px;
                            background-color: #000000;
                            bottom: 0;
                            left: 50%;
                            transform: translateX(-50%);
                        }

                        a {
                            text-decoration: none;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            gap: 20px;
                            position: relative;
                            width: 100%;

                            .footer-menu-row-icon-container {
                                width: 40px;
                                height: 40px;
                                border-radius: 50%;
                                position: relative;

                                .footer-menu-row-icon {
                                    font-size: 27px;
                                    color: white;
                                }

                                .footer-social-icon {
                                    width: 60%;
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%);
                                }
                            }

                            #phone-menu-background {
                                background-color: #ff0000;
                            }

                            #whatsapp-menu-background {
                                background-color: #25D366
                            }

                            #telegram-menu-background {
                                background-color: #2481CC
                            }

                            #mail-menu-background {
                                background-color: #617379
                            }

                            a {
                                text-decoration: none;

                            }

                            .footer-menu-row-data {
                                font-size: 20px;
                                color: #000000;
                                white-space: nowrap;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }

        #location-column {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .footer-icon {
                font-size: 50px;
                margin-bottom: 10px;
            }

            .footer-title-and-menu-container {
                text-align: center;

                .footer-title-container {
                    width: 100%;
                    margin-bottom: 30px;

                    .footer-title {
                        text-align: center;
                        font-size: 40px;
                    }
                }

                span {
                    font-size: 25px;
                }
            }
        }

        @media screen and (max-width: 601px) {
            #contacts-column {
                width: 100%;
                margin-bottom: 50px;
            }

            #location-column {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }

    @media screen and (max-width: 901px) {
        #upper-footer-small {
            display: flex;
            flex-direction: row;
        }
    }

    @media screen and (max-width: 601px) {
        #upper-footer-small {
            flex-direction: column;
        }
    }







    /* LOWER FOOTER */

    #lower-footer {
        background-color: #111111;
        padding: 40px 0 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        #social-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 20px;
            margin: 10px 0 30px;

            .social-icon-background {
                height: 60px;
                width: 60px;
                border-radius: 50%;
                position: relative;

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

            @media screen and (max-width: 601px) {
                .social-icon-background {
                    height: 40px;
                    width: 40px;
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

        @media screen and (max-width: 601px) {
            #social-container {
                gap: 10px;
                flex-wrap: wrap;
            }
        }

        .bottom-footer-info {
            font-size: 23px;
            color: #ffffff;
        }

        #owner {
            margin: 40px 0 25px;
            text-align: center;
        }

        #owner-vat-number {
            text-align: center;
            margin-bottom: 40px;
        }
    }
}
</style>
