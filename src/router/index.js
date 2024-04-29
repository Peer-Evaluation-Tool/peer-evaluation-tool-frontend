import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue'
import StudentRegistration from '@/student/StudentRegistration.vue'
import PeerEvaluation from '@/student/PeerEvaluation.vue';
// import ManageTasks from '@/student/ManageTasks.vue';
import MyTeam from '@/views/common/MyTeam.vue';
import login from '@/student/login.vue';

// import NotFound from '@/views/common/NotFound.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            // meta: { class: 'home' },
            name: 'home',
            component: Home 
        }, 
        {
            path: '/peereval', 
            name: 'evaluation',
            component: PeerEvaluation, 
        }, 
        {
            path: '/studentaccount',
            name: 'student-account',
            component: StudentRegistration,
        },
        {
            path: '/team',
            name: 'my-team',
            component: MyTeam,
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/register',
            name: 'register',
            component: StudentRegistration,
        }

        // {
        //     path: '/:pathMatch(.*)*', //any character zero or more
        //     component: NotFound
        // },
    ]

})

export default router;
