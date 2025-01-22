<template>
	<div>
		<form @submit="handleSubmit" ref="form" class="user-form">
			<input
				type="text"
				name="First Name"
				required
				placeholder="First Name"
				v-model="formInputsData.firstName"
			/>
			<input
				type="text"
				name="Family Name"
				required
				placeholder="Second Name"
				v-model="formInputsData.lastName"
			/>
			<input
				type="email"
				name="Email"
				required
				placeholder="Email"
				v-model="formInputsData.email"
			/>
			<button type="submit">Submit</button>
		</form>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { formData } from '../types/formData';
import { useUserStore } from '@/shared';
import type { User } from '../types/user';
import { useRoute, useRouter } from 'vue-router';

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();
const routeName = route.name;
const userId = +route.params.id;
const user = userStore.getUserByid(userId);

const formInputsData = ref<formData>({
	firstName: '',
	lastName: '',
	email: ''
});

if (routeName === 'Edit User Data' && user) {
	formInputsData.value = {
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email
	};
}

const formRef = ref<HTMLFormElement | null>(null);

const updateExistingUser = (userId: number, userData: User) => {
	userStore.updateUser(userId, userData);
};

const addNewUser = (userData: User) => {
	userStore.addUser(userData);
	formRef.value?.reset();
	formInputsData.value = {
		firstName: '',
		lastName: '',
		email: ''
	};
};

const handleSubmit = (e: Event) => {
	e.preventDefault();

	if (
		!formInputsData.value.firstName ||
		!formInputsData.value.lastName ||
		!formInputsData.value.email
	)
		return;

	let userData: User = {
		...formInputsData.value,
		id: userId ? userId : Date.now(),
		lastVisitedAt: Date.now()
	};
	if (user) {
		updateExistingUser(userId, userData);
	} else {
		addNewUser(userData);
	}

	router.push('/');
};
</script>

<style scoped>
.user-form {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.user-form input {
	height: 30px;
	font-size: 18px;
}

.user-form button {
	display: block;
	padding: 15px;
	background-color: #0971ce;
	font-size: 18px;
	font-weight: 700;
	color: white;
	appearance: none;
	outline: none;
	text-decoration: none;
	border: none;
	text-transform: uppercase;
	transition: background-color 0.3s ease-in-out;
}

.user-form button:hover,
.user-form button:focus-visible {
	background-color: #004c8f;
}
</style>
