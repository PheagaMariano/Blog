import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '',
        name: 'main',
        component: () => import('@/components/main.vue'),
    },
    {
        path: '/infomore/:id',
        name: 'infomore',
        component: () => import('@/components/secundario/info/infomore.vue'),
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    linkExactActiveClass: 'active'
})

export default router