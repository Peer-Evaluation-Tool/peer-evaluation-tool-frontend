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
import AdminNavigation from '@/components/AdminNavigation.vue';
// import NotFound from '@/views/common/NotFound.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes: [
    {
            path: '/login',
            name: 'login',
            component: login,
        },
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
    path: '/admin-navigation',
    name: 'admin-navigation',
    component: AdminNavigation,
  },
        // {
        //     path: '/:pathMatch(.*)*', //any character zero or more
        //     component: NotFound
        // },
    ]

})

export default router;
