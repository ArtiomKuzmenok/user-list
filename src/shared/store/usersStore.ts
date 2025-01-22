import { defineStore } from 'pinia';
import userList from '@/userList.json';
import type { User } from '@/features/userManagement';
import { ref, reactive, computed } from 'vue';
import type { sortOrderType } from '@/features/filters';

export const useUserStore = defineStore('user', () => {
	const allUsers = ref<User[]>(userList.map((user) => reactive(user)));
	const filteredUsers = ref<User[]>([...allUsers.value]);
	const currentPage = ref(1);
	const usersPerPage = 10;

	const addUser = (user: User) => {
		allUsers.value.unshift(user);
		filteredUsers.value.unshift(user);
	};

	const deleteUser = (userId: number) => {
		const removeFromArray = (array: User[], id: number) => {
			const index = array.findIndex((user) => user.id === id);
			if (index !== -1) {
				array.splice(index, 1);
			}
		};

		removeFromArray(allUsers.value, userId);
		removeFromArray(filteredUsers.value, userId);
	};

	const updateUser = (userId: number, updatedData: Partial<User>) => {
		const updateArray = (array: User[]) => {
			const userIndex = array.findIndex((user) => user.id === userId);
			if (userIndex !== -1) {
				array[userIndex] = {
					...array[userIndex],
					...updatedData
				};
			}
		};
		updateArray(allUsers.value);
		updateArray(filteredUsers.value);
	};

	const getUserByid = (userId: number) => {
		return filteredUsers.value.find((user: User) => user.id === userId);
	};

	const sortUsersByField = <K extends keyof User>(
		field: K,
		order: sortOrderType = 'asc'
	) => {
		filteredUsers.value.sort((a, b) => {
			setPage(1);
			const valueA = a[field];
			const valueB = b[field];

			if (typeof valueA === 'string' && typeof valueB === 'string') {
				const result = valueA.localeCompare(valueB);
				return order === 'asc' ? result : -result;
			}

			if (typeof valueA === 'number' && typeof valueB === 'number') {
				if (valueA !== valueB) {
					return order === 'asc' ? valueA - valueB : valueB - valueA;
				}
				return (
					filteredUsers.value.indexOf(a) -
					filteredUsers.value.indexOf(b)
				);
			}

			return 0;
		});
	};

	const searchUsers = (searchInput: string) => {
		if (!searchInput.trim()) {
			filteredUsers.value.splice(
				0,
				filteredUsers.value.length,
				...allUsers.value
			);
		} else {
			const lowerCaseInput = searchInput.toLowerCase();
			const searchedUsers = allUsers.value.filter(
				(user) =>
					user.firstName.toLowerCase().includes(lowerCaseInput) ||
					user.lastName.toLowerCase().includes(lowerCaseInput) ||
					user.email.toLowerCase().includes(lowerCaseInput)
			);

			filteredUsers.value.splice(
				0,
				filteredUsers.value.length,
				...searchedUsers
			);
		}
		setPage(1);
	};

	const paginatedUsers = computed(() => {
		const start = (currentPage.value - 1) * usersPerPage;
		const end = start + usersPerPage;
		return filteredUsers.value.slice(start, end);
	});

	const totalPages = computed(() =>
		Math.ceil(filteredUsers.value.length / usersPerPage)
	);

	const setPage = (page: number) => {
		if (page >= 1 && page <= totalPages.value) {
			currentPage.value = page;
		}
	};

	const getCurrentPage = () => {
		return currentPage.value;
	};

	return {
		users: filteredUsers,
		totalPages,
		paginatedUsers,
		addUser,
		deleteUser,
		updateUser,
		getUserByid,
		sortUsersByField,
		searchUsers,
		setPage,
		getCurrentPage
	};
});
