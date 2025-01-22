<template>
	<div class="user-table">
		<div v-for="user in users" class="user-item" :key="user.id">
			<h3 class="user-item__name">
				{{ `${user.firstName} ${user.lastName}` }}
			</h3>
			<a :href="`mailto:${user.email}`" class="user-item__email">{{
				user.email
			}}</a>
			<span class="user-item__text"
				>Last visit at:
				<time :datetime="formatRobotReadableDate(user.lastVisitedAt)">{{
					formatDate(user.lastVisitedAt)
				}}</time></span
			>

			<UserActions :userId="user.id" />
		</div>
	</div>

	<div class="pagination" v-if="usersStore.totalPages > 1">
		<button type="button" @click="prevPage" :disabled="currentPage === 1">
			Prev
		</button>
		<button
			type="button"
			@click="nextPage"
			:disabled="currentPage === usersStore.totalPages"
		>
			Next
		</button>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/shared/';
import { formatDate, formatRobotReadableDate } from '@/shared';
import UserActions from './UserActions.vue';
import { computed } from 'vue';

const usersStore = useUserStore();

const currentPage = computed(() => usersStore.getCurrentPage());

const users = computed(() => usersStore.paginatedUsers);

const prevPage = () => {
	usersStore.setPage(currentPage.value - 1);
};

const nextPage = () => {
	usersStore.setPage(currentPage.value + 1);
};
</script>

<style scoped>
.user-table {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.user-item {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 15px;
	background-color: #ddefff;
}

.user-item__name {
	margin: 0;
	font-size: 24px;
	font-weight: 600;
}

.user-item__email {
	width: fit-content;
	font-size: 18px;
	color: black;
	text-decoration: none;
	transition: color 0.3s ease-in-out;
}

.user-item__email:hover,
.user-item__email:focus-visible {
	color: rgb(13, 0, 197);
}

.user-item__text {
	font-size: 18px;
}

.user-item__text time {
	font-weight: 600;
}

.pagination {
	display: flex;
}
</style>
