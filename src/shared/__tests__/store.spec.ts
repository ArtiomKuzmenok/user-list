import { setActivePinia, createPinia } from 'pinia';
import { useUserStore } from '../store/usersStore';
import { describe, it, beforeEach, expect } from 'vitest';
import type { User } from '@/features/userManagement';

describe('User Store', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	it('adds a user', () => {
		const userStore = useUserStore();
		const newUser: User = {
			id: 3,
			firstName: 'Alice',
			lastName: 'Smith',
			email: 'alice@example.com',
			lastVisitedAt: 1672600000
		};

		userStore.addUser(newUser);

		expect(userStore.users).toContainEqual(newUser);
	});

	it('deletes a user', () => {
		const userStore = useUserStore();
		userStore.users = <User[]>[
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
		];

		userStore.deleteUser(1);

		expect(userStore.users).toHaveLength(1);
		expect(userStore.users[0].id).toBe(2);
	});

	it('sorts users by lastVisitedAt in ascending order', () => {
		const userStore = useUserStore();
		userStore.users = <User[]>[
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
		];

		userStore.sortUsersByField('lastVisitedAt', 'asc');

		expect(userStore.users[0].id).toBe(1);
		expect(userStore.users[1].id).toBe(2);
	});
});
