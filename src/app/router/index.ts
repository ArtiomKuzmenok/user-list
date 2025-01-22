import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/Home';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomeView
		},
		{
			path: '/add-new-user',
			name: 'Add New User',
			component: () => import('@/pages/AddNewUser')
		},
		{
			path: '/edit-user-data/:id',
			name: 'Edit User Data',
			component: () => import('@/pages/EditUserData')
		}
	]
});

export default router;
