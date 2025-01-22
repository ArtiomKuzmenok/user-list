<template>
	<div class="buttons-container">
		<button
			@click="handleRemoveClick"
			type="button"
			class="button delete-button"
		>
			Remove User
		</button>

		<RouterLink :to="`/edit-user-data/${userId}`" class="button edit-button"
			>Edit User Data</RouterLink
		>
	</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/shared';

const userStore = useUserStore();

const props = defineProps<{
	userId: number;
}>();

const handleRemoveClick = () => {
	userStore.deleteUser(props.userId);
};
</script>

<style scoped>
.buttons-container {
	display: flex;
	gap: 15px;
}

.button {
	display: block;
	padding: 8px;
	font-size: 14px;
	font-weight: 400;
	appearance: none;
	outline: none;
	text-decoration: none;
	border: none;
	text-transform: uppercase;
	background-color: transparent;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;
}

.delete-button {
	background-color: rgb(223, 134, 51);
	color: black;
}

.delete-button:hover,
.delete-button:focus-visible {
	background-color: rgb(189, 120, 55);
}

.edit-button {
	background-color: #0971ce;
	color: white;
}

.edit-button:hover,
.edit-button:focus-visible {
	background-color: #004c8f;
}
</style>
