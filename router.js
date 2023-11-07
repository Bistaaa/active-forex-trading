import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'MainContent',
            component: () => import('./src/components/MainContent.vue')
        },

        {
            path: '/faq',
            name: 'Faq',
            component: () => import('./src/components/pages/Faq.vue')
        },
    ],
    /* scrollBehavior(to, from, savedPosition) {
        // Scrolla in cima alla pagina quando si effettua la navigazione
        return { top: 0 };
    }*/
});

export { router };

