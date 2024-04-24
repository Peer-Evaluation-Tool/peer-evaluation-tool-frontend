import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue'
import Evaluation from '@/views/peerevaluation/Evaluation.vue'

import NotFound from '@/views/common/NotFound.vue';

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/', 
            meta: { class: 'home' },
            name: 'home',
            component: Home 
        }, 
        {
            path: '/peerevaluation', 
            meta: { class: 'peer-evaluation' },
            name: 'evaluation',
            component: PeerEvaluation, 
        }, 
        {
            path: '/:pathMatch(.*)*', //any character zero or more
            component: NotFound
        },
    ]

})

export default router;
