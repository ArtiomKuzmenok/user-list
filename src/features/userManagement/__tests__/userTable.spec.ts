import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { createRouter, createWebHistory } from 'vue-router';
import UserTable from '../components/UserTable.vue';
import { useUserStore } from '@/shared';
import { describe, it, expect, beforeEach } from 'vitest';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: { template: '<div></div>' }
		},
		{
			path: '/edit-user-data/:id',
			name: 'editUserData',
			component: { template: '<div>Edit User</div>' }
		}
	]
});

let userStore: ReturnType<typeof useUserStore>;
let wrapper: ReturnType<typeof mount>;

describe('UserTable', () => {
	beforeEach(async () => {
		const testingPinia = createTestingPinia({
			initialState: {
				user: {
					users: [
						{
							id: 1,
							firstName: 'John',
							lastName: 'Doe',
							email: 'john@example.com',
							lastVisitedAt: 1672505600
						},
						{
							id: 2,
							firstName: 'Jane',
							lastName: 'Doe',
							email: 'jane@example.com',
							lastVisitedAt: 1672592000
						}
					]
				}
			},
			stubActions: false
		});

		wrapper = mount(UserTable, {
			global: {
				plugins: [testingPinia, router]
			}
		});

		userStore = useUserStore();

		await router.isReady();
	});

	it('renders a list of users from the store', () => {
		const rows = wrapper.findAll('.user-item');
		expect(rows).toHaveLength(2);
		expect(rows[0].find('.user-item__name').text()).toContain('John Doe');
		expect(rows[0].find('.user-item__email').text()).toContain(
			'john@example.com'
		);
		expect(rows[0].find('.user-item__text').text()).toContain(
			'Last visit at:'
		);

		expect(rows[1].find('.user-item__name').text()).toContain('Jane Doe');
		expect(rows[1].find('.user-item__email').text()).toContain(
			'jane@example.com'
		);
		expect(rows[1].find('.user-item__text').text()).toContain(
			'Last visit at:'
		);
	});

	it('reacts to user deletion', async () => {
		userStore.deleteUser(1);

		await wrapper.vm.$nextTick();

		const rows = wrapper.findAll('.user-item');
		expect(rows).toHaveLength(1);
		expect(rows[0].find('.user-item__name').text()).toContain('Jane Doe');
		expect(rows[0].find('.user-item__email').text()).toContain(
			'jane@example.com'
		);
		expect(rows[0].find('.user-item__text').text()).toContain(
			'Last visit at:'
		);
	});
});
