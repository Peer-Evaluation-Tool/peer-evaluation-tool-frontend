import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue'
import StudentRegistration from '@/student/StudentRegistration.vue'
import PeerEvaluation from '@/student/PeerEvaluation.vue';
// import ManageTasks from '@/student/ManageTasks.vue';
import MyTeam from '@/views/common/MyTeam.vue';
import login from '@/components/login.vue';
import FindStudent from '@/admin/FindStudent.vue';
import InviteStudents from '@/admin/InviteStudents.vue';
import TeamManagement from '@/admin/TeamManagement.vue';
import FindSections from '@/admin/FindSections.vue'
import FindTeam from '@/admin/FindTeam.vue';
import AdminNavigation from '@/components/AdminNavigation.vue';
import CreateSection from '../admin/CreateSection.vue';
import CreateTeam from '@/admin/CreateTeam.vue'
import EditTeam from '../admin/EditTeam.vue';
// import NotFound from '@/views/common/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: login,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
          meta: { requiresAuth: true }
        },
        {
            path: '/peereval',
            name: 'evaluation',
            component: PeerEvaluation,
        //    meta: { requiresAuth: true }
        },
        {
            path: '/studentaccount',
            name: 'student-account',
            component: StudentRegistration,
       //    meta: { requiresAuth: true }
        },
        {
            path: '/team',
            name: 'my-team',
            component: MyTeam,
         //    meta: { requiresAuth: true }
        },
        {
            path: '/register',
            name: 'register',
            component: StudentRegistration,

        },
        {
            path: '/find-student',
            name: 'find-student',
            component: FindStudent,
        },
        {
            path: '/invite-students',
            name: 'invite-students',
            component: InviteStudents,
        },
        {
            path: '/team-management',
            name: 'team-management',
            component: TeamManagement,
        },
        {
            path: '/find-sections',
            name: 'find-sections',
            component: FindSections,
        },
        {
            path: '/find-teams',
            name: 'find-teams',
            component: FindTeam,
        },
        {
            path: '/admin-navigation',
            name: 'admin-navigation',
            component: AdminNavigation,
        },
        {
            path: '/create-section',
            name: 'create-section',
            component: CreateSection,
        },
        {
            path: '/create-team',
            name: 'create-team',
            component: CreateTeam,
        },
        {
            path: '/edit-team',
            name: 'edit-team',
            component: EditTeam,
        },
        // {
        //     path: '/:pathMatch(.*)*', //any character zero or more
        //     component: NotFound
        // },
    ]

});
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (requiresAuth && !isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;
