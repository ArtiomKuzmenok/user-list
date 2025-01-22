<template>
	<div class="filters-bar">
		<input
			type="text"
			name="search"
			v-model="searchInput"
			@input="handleSearch"
			placeholder="Search"
			class="search-input"
		/>

		<select
			name="Sort By"
			v-model="sortBy"
			@change="handleSort"
			class="sort-select"
		>
			<option value="" disabled>Sort by</option>
			<option value="firstName">First Name</option>
			<option value="lastName">Last Name</option>
			<option value="lastVisitedAt">Last Visit</option>
		</select>

		<div class="order-toggle">
			<label>
				<input
					type="radio"
					name="order"
					value="asc"
					selected
					v-model="sortOrder"
				/>
				ASC
			</label>

			<label>
				<input
					type="radio"
					name="order"
					value="desc"
					v-model="sortOrder"
				/>
				DESC
			</label>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/shared';
import { ref, watch } from 'vue';
import { debounce } from '@/shared/';
import type { User } from '@/features/userManagement';
import type { sortOrderType } from '../types/sortOrderType';

const userStore = useUserStore();
const searchInput = ref('');
const sortOrder = ref<sortOrderType>('asc');
const sortBy = ref<keyof User | ''>('');

const debouncedSort = debounce(() => {
	if (!sortBy.value) return;
	userStore.sortUsersByField(sortBy.value, sortOrder.value);
}, 500);

const handleSort = () => {
	debouncedSort();
};

watch(sortOrder, () => {
	handleSort();
});

const handleSearch = () => {
	userStore.searchUsers(searchInput.value);
	handleSort();
};
</script>

<style scoped>
.filters-bar {
	display: flex;
	align-items: center;
	gap: 15px;
	margin-bottom: 20px;
}

.search-input {
	flex: 1 0 auto;
	padding: 1px;
	height: 24px;
}

.sort-select {
	flex: 0 0 150px;
	height: 30px;
	margin: 0;
}

.order-toggle {
	display: flex;
	padding: 2px;
	border-radius: 17px;
	overflow: hidden;
	background-color: #0971ce;
	box-shadow: 0 0 3px #0971ce;
}

.order-toggle label {
	padding: 8px;
	background-color: transparent;
	color: white;
	border-radius: 15px;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.order-toggle label:has(input:checked) {
	background-color: white;
	color: black;
}

.order-toggle input {
	display: none;
}
</style>
